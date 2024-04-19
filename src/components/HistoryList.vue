<script setup lang="ts">
import type { HistoryStep } from "@/types";
import HistoryListItem from "./HistoryListItem.vue";

defineProps<{ items: HistoryStep[] }>();
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li v-for="step in items" :key="step.id">
      <HistoryListItem :item="step" />
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
