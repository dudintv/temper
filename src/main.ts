import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import "./style.css";
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(pinia).use(autoAnimatePlugin).mount("#app");
