const { head, theme, plugins } = require("./utils/config.js");

// 1. head 注入到当前页面的 HTML <head> 中的标签
// 2. theme 主题和它的配置
// 3. plugins 插件配置
module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "DivinePlus",
  description: "Vue3 + Typescript + Webpack 构建的UI组件库",
  head,
  theme,
  plugins,
};
