import { App } from "vue";
import Divider from "./divider/index.vue";

const components = [Divider];

// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册

// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install = (app: App) => {
  components.forEach((comp) => {
    app.component(comp.name, comp);
  });
};

export default install;
