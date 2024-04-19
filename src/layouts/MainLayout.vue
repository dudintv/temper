<script setup lang="ts"></script>

<template>
  <div class="w-full mix-h-screen">
    <div class="bg-[#6357b1] absolute top-0 left-0 right-0 h-60 diagonal-clip-path"></div>
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.diagonal-clip-path {
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}
</style>
