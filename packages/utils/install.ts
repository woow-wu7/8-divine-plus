import { App } from "vue";
import Divider from "../components/divider/index.vue";
import Breadcrumb from "../components/breadcrumb/breadcrumb.vue";
import BreadcrumbItem from "../components/breadcrumb/breadcrumb-item.vue";

// 图标库，用于 breadcrumb 组件的 separator-icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import router from "../router/index";

const components = [Divider, Breadcrumb, BreadcrumbItem];

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
