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
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot));
}
