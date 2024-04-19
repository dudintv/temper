<script setup lang="ts">
import SortableList from "@/components/SortableList.vue";
import HistoryList from "@/components/HistoryList.vue";
</script>

<template>
  <section class="flex justify-between items-start gap-8 flex-wrap md:flex-nowrap">
    <SortableList />
    <HistoryList class="md:flex-shrink-0" />
  </section>
</template>

<style lang="scss" scoped></style>
