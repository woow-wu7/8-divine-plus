import { createApp } from "vue";
import App from "./app.vue";

const app = createApp(App);

app.mount("#app");

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env.HOST_ENV", process.env.HOST_ENV);
