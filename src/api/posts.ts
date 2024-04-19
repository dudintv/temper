import { Post } from "@/types";

function arePosts(posts: unknown): posts is Post[] {
  const postFields = ["id", "userId", "title", "body"];
  return (
    posts instanceof Array &&
    posts.every((post) => typeof post === "object" && postFields.every((field) => field in post))
  );
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  if (!arePosts(posts)) {
    console.error("Posts have not correct structure. Posts:", posts);
    return [];
  }
  return posts;
}
