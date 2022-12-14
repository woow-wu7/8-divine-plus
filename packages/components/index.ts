import { App } from "vue";
import { installComponents, installIcons } from "../utils/index";

// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install = (app: App, router?: any) => {
  // !router && installRouter(app);
  installComponents(app);
  installIcons(app);
};

export default install;
