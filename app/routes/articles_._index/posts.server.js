import { formatTimecode, readingTime } from '~/utils/timecode';
import fs from 'fs';
import path from 'path';

export async function getPosts() {
  // Get all post folders from _posts directory
  const postsDir = path.join(process.cwd(), 'app/routes/articles_._index/_posts');
  const postFolders = fs.readdirSync(postsDir).filter(file => {
    const fullPath = path.join(postsDir, file);
    return fs.statSync(fullPath).isDirectory() && !file.startsWith('.');
  });

  const posts = await Promise.all(
    postFolders.map(async (folder) => {
      try {
        // Read meta.json
        const metaPath = path.join(postsDir, folder, 'meta.json');
        const metaContent = fs.readFileSync(metaPath, 'utf-8');
        const frontmatter = JSON.parse(metaContent);

        // Read content.mdx
        const contentPath = path.join(postsDir, folder, 'content.mdx');
        const content = fs.readFileSync(contentPath, 'utf-8');

        // Calculate reading time
        const readTime = readingTime(content);
        const timecode = formatTimecode(readTime);

        return {
          slug: folder,
          timecode,
          frontmatter,
        };
      } catch (error) {
        console.error(`Error reading post from folder "${folder}":`, error);
        return null;
      }
    })
  );

  // Filter out null entries (failed reads)
  const validPosts = posts.filter(post => post !== null);

  // Sort by date (newest first)
  return sortBy(validPosts, post => post.frontmatter.date, 'desc');
}

function sortBy(arr, key, dir = 'asc') {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === 'asc' ? res : -res;
  });
}

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
