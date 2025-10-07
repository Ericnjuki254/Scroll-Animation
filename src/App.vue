<script setup></script>

<template>
  <section class="h-[200vh] bg-black text-white flex items-center justify-center">
    <h1 ref="title" class="text-6xl font-bold">Smooth Scroll + GSAP ✨</h1>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "@/plugins/gsap";

const title = ref(null);

onMounted(() => {
  gsap.from(title.value, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });
});
</script>


<style scoped></style>
