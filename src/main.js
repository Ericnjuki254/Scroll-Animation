// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

import Lenis from "@studio-freight/lenis";

const app = createApp(App);

app.mount("#app");

// Smooth scrolling with Lenis
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
