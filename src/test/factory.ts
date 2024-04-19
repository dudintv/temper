import type { Post } from "@/types";

export function makePosts(amount: number): Post[] {
  const posts: Post[] = [];
  for (let i = 1; i <= amount; i++) {
    posts.push({ id: i, userId: 1000 + i, title: "", body: "" });
  }
  return posts;
}
