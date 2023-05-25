import type { App, Component } from "vue";

// icons
// - 用于 breadcrumb 组件的 separator-icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// component
// 注意：
// - 这里没用 @ 是因为 vuepress2 使用文档中没法配置 client 端的别名
// - 核心原因是本库基于了两套构建工具 webpack 和 vite ，会有不兼容的情况
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
import Tag from "../components/tag/index.vue";
import Badge from "../components/badge/index.vue";
import Backtop from "../components/backtop/index.vue";
import Empty from "../components/empty/empty.vue";
import WaterMark from "../components/watermark/watermark.vue";
import Timeline from "../components/timeline/timeline.vue";
import TimelineItem from "../components/timeline/timeline-item.vue";

// 注意
// 这里不使用 require.context 是因为本项目使用了两套构建方式，require.context 只在webpack环境中存在
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

  Tag,
  Badge,
  Backtop,
  Empty,
  WaterMark,

  Timeline,
  TimelineItem,
];

// 1
// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册

// 2
// app.component()
// 1.如果同时传递一个 ( 组件名字符串 )，( 及其定义 )，则 ( 注册一个全局组件 ) ---- 存
// 2.如果 ( 只传递一个名字 )，则会返回用该名字注册的组件 (如果存在的话) ---------- 取

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
