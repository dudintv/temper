import type { Post } from "@/types";
import { defineStore, acceptHMRUpdate } from "pinia";
import { PostsStoreState } from "@/types";
import { getPosts } from "@/api/posts";

export const usePostsStore = defineStore("posts", {
  state: (): PostsStoreState => ({
    posts: [],
    historySteps: [],
  }),
  getters: {},
  actions: {
    async getFirstPosts() {
      const posts = await getPosts();
      this.posts = posts.splice(0, 5);
    },
    makeHistoryRecord(post: Post, indexFrom: number, indexTo: number) {
      this.historySteps.push({
        id: post.id,
        indexFrom,
        indexTo,
      });
    },
    movePostUp(postId: number) {
      const foundPostIndex = this.posts.findIndex((post) => post.id === postId);
      if (foundPostIndex < 1) return;

      const foundPost = this.posts[foundPostIndex];
      this.posts.splice(foundPostIndex, 1);
      this.posts.splice(foundPostIndex - 1, 0, foundPost);

      this.makeHistoryRecord(foundPost, foundPostIndex, foundPostIndex - 1);
    },
    movePostDown(postId: number) {
      const foundPostIndex = this.posts.findIndex((post) => post.id === postId);
      if (foundPostIndex < 0 || foundPostIndex > this.posts.length - 1) return;

      const foundPost = this.posts[foundPostIndex];
      this.posts.splice(foundPostIndex, 1);
      this.posts.splice(foundPostIndex + 1, 0, foundPost);

      this.makeHistoryRecord(foundPost, foundPostIndex, foundPostIndex + 1);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot));
}
