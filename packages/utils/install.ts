import { App } from "vue";
import Divider from "../components/divider/index.vue";

import Breadcrumb from "../components/breadcrumb/breadcrumb.vue";
import BreadcrumbItem from "../components/breadcrumb/breadcrumb-item.vue";

import Container from "../components/container/container.vue";
import Header from "../components/container/header.vue";
import Footer from "../components/container/footer.vue";
import Aside from "../components/container/aside.vue";
import Main from "../components/container/main.vue";

import Badge from "../components/badge/index.vue";

// 图标库，用于 breadcrumb 组件的 separator-icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import router from "../router/index";

const components = [
  Divider,

  Breadcrumb,
  BreadcrumbItem,

  Container,
  Header,
  Footer,
  Aside,
  Main,

  Badge,
];

// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
export const installComponents = (app: App) => {
  components.forEach((comp) => {
    app.component(comp.name, comp);
  });
};

export const installIcons = (app: App) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
};

// export const installRouter = (app: App) => {
//   app.use(router);
// };
