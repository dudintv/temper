<script setup lang="ts">
import type { Post } from "@/types";
import { storeToRefs } from "pinia";
import SortableListItem from "./SortableListItem.vue";
import { usePostsStore } from "@/stores/posts";

const postStore = usePostsStore();
const { posts } = storeToRefs(postStore);
await postStore.getFirstPosts();

function movePostUp(post: Post) {
  postStore.movePostUp(post.id);
}
function movePostDown(post: Post) {
  postStore.movePostDown(post.id);
}
</script>

<template>
  <div class="w-full">
    <h1 class="text-2xl mb-4 text-white leading-tight">Sortable Post List</h1>
    <ul v-if="posts?.length" class="flex flex-col gap-4 max-w-lg items-stretch" v-auto-animate>
      <li v-for="(post, index) in posts" :key="post.id" class="bg-back rounded">
        <SortableListItem
          :item="post"
          :is-first="index === 0"
          :is-last="index === posts.length - 1"
          @up="movePostUp(post)"
          @down="movePostDown(post)"
        />
      </li>
    </ul>
    <div v-else>
      <span class="text-white/40">No posts</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
