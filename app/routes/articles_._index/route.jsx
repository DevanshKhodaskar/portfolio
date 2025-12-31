import { json } from "@remix-run/node";
import { baseMeta } from "~/utils/meta";
import { getPosts } from "./posts.server";

export async function loader() {
  const allPosts = await getPosts();
  const featured = allPosts.filter(post => post.frontmatter.featured)[0];
  const posts = allPosts.filter(post => featured?.slug !== post.slug);

  return json({ posts, featured });
}

export function meta() {
  return baseMeta({
    title: "Experiences",
    description: "Overall brief of my all experiences.",
  });
}

export { Articles as default } from "./articles";
