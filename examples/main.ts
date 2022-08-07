import { createApp } from "vue";
import App from "./app.vue";

import DivinePlus from "../packages/components/index";
import "../packages/theme-chalk/index.scss";

// contrast
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

// 测试 - 单独注册
// import Breadcrumb from "../packages/components/breadcrumb/index";
// import Divider from "../packages/components/divider/index";
// app.use(Breadcrumb);
// app.use(Divider);

const app = createApp(App);

app.use(DivinePlus); // 注册插件
// app.use(ElementPlus);

app.mount("#app");

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env.HOST_ENV", process.env.HOST_ENV);
