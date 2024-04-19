<script setup lang="ts"></script>

<template>
  <main class="w-full mix-h-screen grid grid-cols-1 grid-rows-1">
    <div class="diagonal-clip-path bg-[#6357b1] h-60 col-span-full row-span-full opacity-90" />
    <div class="container mx-auto col-span-full row-span-full z-10 py-16">
      <slot name="default" />
    </div>
  </main>
</template>

<style scoped>
.diagonal-clip-path {
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}
</style>
