<script setup lang="ts">
import type { Post } from "@/types";
import SortableButtons from "@/components/SortableButtons.vue";

defineProps<{ post: Post; isFirst?: boolean; isLast?: Boolean }>();
const emit = defineEmits(["up", "down"]);
</script>

<template>
  <div class="bg-white/50 hover:bg-white flex justify-between rounded shadow-md hover:shadow-lg transition-all">
    <div class="flex items-center p-4 gap-4">
      <span class="flex-shrink-0">Post {{ post.id }}</span>
      <span class="text-slate-300 leading-tight">{{ post.title }}</span>
    </div>
    <SortableButtons class="shrink-0" :hide-up="isFirst" :hide-down="isLast" @up="emit('up')" @down="emit('down')" />
  </div>
</template>

<style lang="scss" scoped></style>
