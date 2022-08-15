import { createApp } from "vue";
import App from "./app.vue";

// import DivinePlus from "../packages/components/index";
// import "../packages/theme-chalk/index.scss";

import DivinePlus from "divine-plus";
import "divine-plus/css/index.css";

// hightlight.js
// @highlightjs/vue-plugin
import "highlight.js/styles/stackoverflow-light.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import hljsVuePlugin from "@highlightjs/vue-plugin";

// contrast
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

// 测试 - 单独注册
// import Breadcrumb from "../packages/components/breadcrumb/index";
// import Divider from "../packages/components/divider/index";
// app.use(Breadcrumb);
// app.use(Divider);

hljs.registerLanguage("javascript", javascript);

const app = createApp(App);

app.use(DivinePlus); // 注册插件
// app.use(ElementPlus);
app.use(hljsVuePlugin);

app.mount("#app");

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env.HOST_ENV", process.env.HOST_ENV);
