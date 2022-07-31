// import Row from "./packages/row/index.js";
// import Col from "./packages/col/index.js";
// import "./packages/theme-chalk/index.scss"; // 需要引入样式文件，不然打包后样式不会生效

// // components 存放所有element中的组件
// const components = [Row, Col];

// // vue-plugin
// // - 每个Vue的插件都有一个 ( install函数 ) 或者 (  本身就是一个函数时直接调用 )
// // - install方法的参数就是大Vue，能在插件中使用到大Vue的能力，比如 Vue.mixin Vue.directive Vue.prototype.xxx Vue.xxx
// const install = (Vue) => {
//   components.forEach((component) => {
//     Vue.component(component.name, component); // 全局注册element中的每个组件
//   });
// };

// export default install;
