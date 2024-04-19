<script setup lang="ts">
import type { HistoryStep } from "@/types";
import HistoryListItem from "./HistoryListItem.vue";

defineProps<{ items: HistoryStep[] }>();

function stepTo(stepId: number) {
  console.log(stepId);
}
</script>

<template>
  <div class="bg-slate-100 shadow-md rounded-md">
    <h1 class="px-4 py-6 text-2xl leading-tight">List of actions committed</h1>
    <div class="p-4 bg-slate-200">
      <ul class="flex flex-col bg-slate-100 shadow-md hover:shadow-lg rounded transition-all">
        <li v-for="step in items" :key="step.id" class="border-slate-200 border-b last:border-b-0 hover:bg-white">
          <HistoryListItem :item="step" @stepTo="stepTo(step.id)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
