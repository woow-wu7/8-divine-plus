const { head, theme, plugins } = require("./utils/config.js");

// 1. head 注入到当前页面的 HTML <head> 中的标签
// 2. theme 主题和它的配置
// 3. plugins 插件配置
module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "DivinePlus",
  description: "vue3 + webpack5 + ts + vuepress2 组件库",
  head,
  theme,
  plugins,
};
