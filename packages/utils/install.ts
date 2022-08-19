import type { App, Component } from "vue";

// icons
// - 用于 breadcrumb 组件的 separator-icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// component
import Divider from "../components/divider/index.vue";
import Breadcrumb from "../components/breadcrumb/breadcrumb.vue";
import BreadcrumbItem from "../components/breadcrumb/breadcrumb-item.vue";
import Container from "../components/container/container.vue";
import Header from "../components/container/header.vue";
import Footer from "../components/container/footer.vue";
import Aside from "../components/container/aside.vue";
import Main from "../components/container/main.vue";
import Row from "../components/row/index.vue";
import Col from "../components/col/index.vue";
import Badge from "../components/badge/index.vue";
import Backtop from "../components/backtop/index.vue";

// 注意
// 这里不使用 require.context 是因为本项目使用了两套构建方式，require.context只在webpack环境中存在
// - 1. docs，使用 vite 构建
// - 2. examples，使用 webpack 构建
// import { requireComps } from "./requireContext";
// const components = requireComps();

const components = [
  Divider,

  Breadcrumb,
  BreadcrumbItem,

  Container,
  Header,
  Footer,
  Aside,
  Main,

  Row,
  Col,

  Badge,
  Backtop,
];

// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
export const installComponents = (app: App) => {
  components.forEach((comp: Component) => {
    app.component(comp.name as string, comp);
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
