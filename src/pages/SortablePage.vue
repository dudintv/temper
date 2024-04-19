<script setup lang="ts">
import { storeToRefs } from "pinia";
import SortableList from "@/components/SortableList.vue";
import HistoryList from "@/components/HistoryList.vue";
import { usePostsStore } from "@/stores/posts";

const postStore = usePostsStore();
const { posts, historySteps } = storeToRefs(postStore);
await postStore.getFirstPosts();
</script>

<template>
  <section class="flex justify-between items-start gap-8 flex-wrap md:flex-nowrap">
    <SortableList :items="posts" />
    <HistoryList :items="historySteps" class="md:flex-shrink-0" />
  </section>
</template>

<style lang="scss" scoped></style>
