<script setup lang="ts">
import type { Post } from "@/types";
import SortableListItem from "./SortableListItem.vue";

defineProps<{ items: Post[] }>();
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li class="block" v-for="post in items" :key="post.id">
      <SortableListItem :item="post" />
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
