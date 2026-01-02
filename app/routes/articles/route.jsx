import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';

export async function loader({ request }) {
  const slug = request.url.split('/').at(-1);

  const modules = import.meta.glob('../articles.*.mdx');
  const rawModules = import.meta.glob('../articles.*.mdx', { as: 'raw' });

  const modulePath = `../articles.${slug}.mdx`;

  if (!modules[modulePath] || !rawModules[modulePath]) {
    throw new Response("Not Found", { status: 404 });
  }

  const module = await modules[modulePath]();
  const text = await rawModules[modulePath]();

  const readTime = readingTime(text);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;

  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime),
  });
}

export function meta({ data }) {
  const { title, abstract } = data.frontmatter;
  return baseMeta({ title, description: abstract, prefix: '', ogImage: data.ogImage });
}

export default function Articles() {
  const { frontmatter, timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
