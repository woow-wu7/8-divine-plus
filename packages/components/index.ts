import { App } from "vue";
import {
  installComponents,
  installFunctions,
  installIcons,
} from "../utils/index";

import DvMessage from "./message/index";
import DvLoading from "./loading/index";

// 1
// 使用方式
// 本项目采用两种组件的使用方式，(全局引入: 文件大 )，和 ( 通过路径单独引入某个组件 )
// - 全局注册使用: 在vue项目的入口文件，通过 vue.use() 来注册插件使用
// - 单独注册使用: 不在vue项目入口文件引入，而是直接通过路径引入

// 2
// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install = (app: App, router?: any) => {
  // !router && installRouter(app);
  installComponents(app);
  installFunctions(app);
  installIcons(app);

  DvLoading.install(app);
};

export { DvMessage };
export { DvLoading };
export default install;
