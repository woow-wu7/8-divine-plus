const { defaultTheme } = require("vuepress");
const { head, navbar, sidebar } = require("./layout/layout.ts");

module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "DivinePlus",
  description: "Vue3 + Typescript + Webpack 构建的UI组件库",

  // 1
  // head
  // 注入到当前页面的 HTML <head> 中的标签
  head,

  // 2
  // theme
  // 主题和它的配置
  theme: defaultTheme({
    home: "/",
    navbar,
    sidebar,
  }),
};
