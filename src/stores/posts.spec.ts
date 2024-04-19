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

      expect(postsStore.posts).toHaveLength(5);
      postsStore.posts.forEach((post, index) => {
        expect(post).toEqual(originalPosts[index]);
      });
    });
  });

  describe("movePostUp", () => {
    describe("correct scenarios", () => {
      test("move the middle post up", () => {
        const originalPosts = makePosts(3);
        const postsStore = usePostsStore();
        postsStore.posts = structuredClone(originalPosts);
        expect(postsStore.historySteps).toHaveLength(0);

        postsStore.movePostUp(originalPosts[1].id);
        expect(postsStore.historySteps).toHaveLength(1);
        expect(postsStore.historySteps[0]).toEqual({
          id: originalPosts[1].id,
          indexFrom: 1,
          indexTo: 0,
        });
        expect(postsStore.posts).toEqual([originalPosts[1], originalPosts[0], originalPosts[2]]);
      });

      test("move the last post up", () => {
        const originalPosts = makePosts(3);
        const postsStore = usePostsStore();
        postsStore.posts = structuredClone(originalPosts);
        expect(postsStore.historySteps).toHaveLength(0);

        postsStore.movePostUp(originalPosts.at(-1)!.id);
        expect(postsStore.historySteps).toHaveLength(1);
        expect(postsStore.historySteps[0]).toEqual({
          id: originalPosts.at(-1)!.id,
          indexFrom: originalPosts.length - 1,
          indexTo: originalPosts.length - 2,
        });
        expect(postsStore.posts).toEqual([originalPosts[0], originalPosts[2], originalPosts[1]]);
      });
    });

    describe("wrong scenarios", () => {
      test("don't move the first post up", () => {
        const originalPosts = makePosts(3);
        const postsStore = usePostsStore();
        postsStore.posts = structuredClone(originalPosts);
        expect(postsStore.historySteps).toHaveLength(0);

        postsStore.movePostUp(originalPosts[0].id);
        expect(postsStore.historySteps).toHaveLength(0);
        expect(postsStore.posts).toEqual([originalPosts[0], originalPosts[1], originalPosts[2]]);
      });

      test("don't move if the post doesn't exist", () => {
        const originalPosts = makePosts(3);
        const postsStore = usePostsStore();
        postsStore.posts = structuredClone(originalPosts);
        expect(postsStore.historySteps).toHaveLength(0);

        postsStore.movePostUp(123456);
        expect(postsStore.historySteps).toHaveLength(0);
        expect(postsStore.posts).toEqual([originalPosts[0], originalPosts[1], originalPosts[2]]);
      });
    });
  });

  describe("movePostDown", () => {
    describe("correct scenarios", () => {
      test("move the middle post down", () => {
        const originalPosts = makePosts(3);
        const postsStore = usePostsStore();
        postsStore.posts = structuredClone(originalPosts);
        expect(postsStore.historySteps).toHaveLength(0);

        postsStore.movePostDown(originalPosts[1].id);
        expect(postsStore.historySteps).toHaveLength(1);
        expect(postsStore.historySteps[0]).toEqual({
          id: originalPosts[1].id,
          indexFrom: 1,
          indexTo: 2,
        });
        expect(postsStore.posts).toEqual([originalPosts[0], originalPosts[2], originalPosts[1]]);
      });

      test("move the first post down", () => {
        const originalPosts = makePosts(3);
        const postsStore = usePostsStore();
        postsStore.posts = structuredClone(originalPosts);
        expect(postsStore.historySteps).toHaveLength(0);

        postsStore.movePostDown(originalPosts[0].id);
        expect(postsStore.historySteps).toHaveLength(1);
        expect(postsStore.historySteps[0]).toEqual({
          id: originalPosts[0].id,
          indexFrom: 0,
          indexTo: 1,
        });
        expect(postsStore.posts).toEqual([originalPosts[1], originalPosts[0], originalPosts[2]]);
      });
    });

    describe("wrong scenarios", () => {
      test("don't move the last post down", () => {
        const originalPosts = makePosts(3);
        const postsStore = usePostsStore();
        postsStore.posts = structuredClone(originalPosts);
        expect(postsStore.historySteps).toHaveLength(0);

        postsStore.movePostDown(originalPosts.at(-1)!.id);
        expect(postsStore.historySteps).toHaveLength(0);
        expect(postsStore.posts).toEqual([originalPosts[0], originalPosts[1], originalPosts[2]]);
      });

      test("don't move if the post doesn't exist", () => {
        const originalPosts = makePosts(3);
        const postsStore = usePostsStore();
        postsStore.posts = structuredClone(originalPosts);
        expect(postsStore.historySteps).toHaveLength(0);

        postsStore.movePostDown(123456);
        expect(postsStore.historySteps).toHaveLength(0);
        expect(postsStore.posts).toEqual([originalPosts[0], originalPosts[1], originalPosts[2]]);
      });
    });
  });

  describe("goTimeTravel", () => {
    test("one step back", () => {
      const originalPosts = makePosts(3);
      const postsStore = usePostsStore();
      postsStore.posts = structuredClone(originalPosts);
      expect(postsStore.historySteps).toHaveLength(0);

      postsStore.movePostDown(originalPosts[0].id);
      expect(postsStore.historySteps).toHaveLength(1);
      expect(postsStore.historySteps[0]).toEqual({
        id: originalPosts[0].id,
        indexFrom: 0,
        indexTo: 1,
      });

      postsStore.goTimeTravel(0);
      expect(postsStore.historySteps).toHaveLength(0);
      expect(postsStore.posts).toEqual(originalPosts);
    });

    test("two steps back", () => {
      const originalPosts = makePosts(3);
      const postsStore = usePostsStore();
      postsStore.posts = structuredClone(originalPosts);
      expect(postsStore.historySteps).toHaveLength(0);

      postsStore.movePostDown(originalPosts[0].id);
      postsStore.movePostDown(originalPosts[0].id);
      expect(postsStore.historySteps).toHaveLength(2);
      expect(postsStore.historySteps).toEqual([
        {
          id: originalPosts[0].id,
          indexFrom: 0,
          indexTo: 1,
        },
        {
          id: originalPosts[0].id,
          indexFrom: 1,
          indexTo: 2,
        },
      ]);

      postsStore.goTimeTravel(0);
      expect(postsStore.historySteps).toHaveLength(0);
      expect(postsStore.posts).toEqual(originalPosts);
    });

    test("two of three steps back", () => {
      const originalPosts = makePosts(3);
      const postsStore = usePostsStore();
      postsStore.posts = structuredClone(originalPosts);
      expect(postsStore.historySteps).toHaveLength(0);

      postsStore.movePostDown(originalPosts[0].id);
      postsStore.movePostDown(originalPosts[0].id);
      postsStore.movePostDown(originalPosts[1].id);
      expect(postsStore.historySteps).toHaveLength(3);
      expect(postsStore.historySteps).toEqual([
        {
          id: originalPosts[0].id,
          indexFrom: 0,
          indexTo: 1,
        },
        {
          id: originalPosts[0].id,
          indexFrom: 1,
          indexTo: 2,
        },
        {
          id: originalPosts[1].id,
          indexFrom: 0,
          indexTo: 1,
        },
      ]);

      postsStore.goTimeTravel(1);
      expect(postsStore.historySteps).toHaveLength(1);
      expect(postsStore.posts).toEqual([originalPosts[1], originalPosts[0], originalPosts[2]]);
    });

    test("one step back and add new step", () => {
      const originalPosts = makePosts(3);
      const postsStore = usePostsStore();
      postsStore.posts = structuredClone(originalPosts);
      expect(postsStore.historySteps).toHaveLength(0);

      postsStore.movePostDown(originalPosts[0].id);
      expect(postsStore.historySteps).toHaveLength(1);
      expect(postsStore.historySteps[0]).toEqual({
        id: originalPosts[0].id,
        indexFrom: 0,
        indexTo: 1,
      });

      postsStore.goTimeTravel(0);
      expect(postsStore.historySteps).toHaveLength(0);
      expect(postsStore.posts).toEqual(originalPosts);

      postsStore.movePostDown(originalPosts[0].id);
      expect(postsStore.historySteps[0]).toEqual({
        id: originalPosts[0].id,
        indexFrom: 0,
        indexTo: 1,
      });
    });
  });
});
