const { defaultTheme } = require("vuepress");

module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "DivinePlus",
  description: "Vue3 + Typescript + Webpack 构建的UI组件库",

  // head
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/logo.png",
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // theme
  // 主题和它的配置
  // theme: "@vuepress/theme-default",

  theme: defaultTheme({
    home: "/",
    navbar: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "组件",
        link: "/components",
      },
    ],
  }),
};
