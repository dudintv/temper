<script setup lang="ts">
import { storeToRefs } from "pinia";
import SortableList from "@/components/SortableList.vue";
import HistoryList from "@/components/HistoryList.vue";
import { usePostsStore } from "@/stores/posts";

const postStore = usePostsStore();
const { posts, historySteps } = storeToRefs(postStore);
await postStore.getFirstPosts();

historySteps.value = [
  {
    id: 1,
    indexFrom: 1,
    indexTo: 2,
  },
  {
    id: 2,
    indexFrom: 4,
    indexTo: 2,
  },
  {
    id: 3,
    indexFrom: 10,
    indexTo: 5,
  },
];
</script>

<template>
  <section class="flex justify-between">
    <SortableList :items="posts" />
    <HistoryList :items="historySteps" />
  </section>
</template>

<style lang="scss" scoped></style>
