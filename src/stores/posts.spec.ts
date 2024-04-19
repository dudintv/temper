import { describe, expect, test, beforeEach, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { setActivePinia, createPinia } from "pinia";
import { usePostsStore } from "./posts";
import { makePosts } from "@/test/factory";

const fetchMocker = createFetchMock(vi);

describe("PostsStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("getFirstPosts", async () => {
    test("left only first 5 posts", async () => {
      const originalPosts = makePosts(10);
      fetchMocker.enableMocks();
      fetchMocker.mockResponse(JSON.stringify(originalPosts), { status: 200 });
      const postsStore = usePostsStore();
      await postsStore.getFirstPosts();

      expect(postsStore.posts[0]).toEqual(originalPosts[0]);
      expect;
    });
  });
});
