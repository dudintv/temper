<script setup lang="ts">
import type { Post } from "@/types";
import SortableButtons from "@/components/SortableButtons.vue";

defineProps<{ item: Post; isFirst?: boolean; isLast?: Boolean }>();
</script>

<template>
  <div class="bg-white/50 hover:bg-white flex justify-between rounded shadow-md hover:shadow-lg transition-all">
    <div class="flex items-center p-4">Post {{ item.id }}</div>
    <SortableButtons :hide-up="isFirst" :hide-down="isLast" @up="" @down="" />
  </div>
</template>

<style lang="scss" scoped></style>
