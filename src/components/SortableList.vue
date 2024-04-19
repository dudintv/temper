<script setup lang="ts">
import type { Post } from "@/types";
import SortableListItem from "./SortableListItem.vue";

defineProps<{ items: Post[] }>();
</script>

<template>
  <div class="w-full">
    <h1 class="text-2xl mb-4 text-white leading-tight">Sortable Post List</h1>
    <ul class="flex flex-col gap-4 w-full items-stretch">
      <li class="block" v-for="(post, index) in items" :key="post.id">
        <SortableListItem :item="post" :is-first="index === 0" :is-last="index === items.length - 1" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
