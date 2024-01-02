<script setup lang="ts">
import { onMounted } from 'vue';

import { type IStaticMethods } from "preline/preline";
import Navbar from './components/Navbar.vue';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit();
  }, 100)
});
</script>

<template>
  <Navbar></Navbar>
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
