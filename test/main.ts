import { createApp } from "vue";
import App from "./app.vue";

// import DivinePlus from "../packages/components/index";
// import "../packages/theme-chalk/index.scss";

const app = createApp(App);

// app.use(DivinePlus); // 注册插件

app.mount("#app");

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env.HOST_ENV", process.env.HOST_ENV);
