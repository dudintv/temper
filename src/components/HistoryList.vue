<script setup lang="ts">
import { storeToRefs } from "pinia";
import HistoryListItem from "./HistoryListItem.vue";
import { usePostsStore } from "@/stores/posts";

const postStore = usePostsStore();
const { historySteps } = storeToRefs(postStore);

function stepTo(stepId: number) {
  postStore.goTimeTravel(stepId);
}
</script>

<template>
  <div class="bg-white shadow-md rounded-md overflow-clip">
    <h1 class="px-4 py-6 text-2xl leading-tight">List of actions committed</h1>
    <div class="p-4 bg-back">
      <ul
        v-if="historySteps?.length"
        class="flex flex-col-reverse bg-white/50 shadow-md hover:shadow-lg rounded overflow-clip transition-all"
        v-auto-animate
      >
        <li
          v-for="(step, index) in historySteps"
          :key="index"
          class="border-slate-200 border-t last:border-t-0 hover:bg-white"
        >
          <HistoryListItem :item="step" @stepTo="stepTo(index)" />
        </li>
      </ul>
      <div v-else>
        <span class="text-primary/40">No actions</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
