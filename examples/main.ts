import { createApp } from "vue";
import App from "./app.vue";

import DivinePlus from "../packages/components/index";
import "../packages/theme-chalk/index.scss";

// 图标库，用于 breadcrumb 组件的 separator-icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

app.use(DivinePlus); // 注册插件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env.HOST_ENV", process.env.HOST_ENV);
