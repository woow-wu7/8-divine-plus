const { path } = require("@vuepress/utils");
const { defaultTheme } = require("vuepress");
const { containerPlugin } = require("@vuepress/plugin-container");
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components"); // 注册组件

// 1
// head
// 注入到当前页面的 HTML <head> 中的标签
const head = [
  [
    "link",
    {
      rel: "icon", // 增加一个自定义的 favicon(网页标签的图标)
      href: "/img/logo.png",
    },
  ],
];

// 2
// 顶部导航
const navbar = [
  {
    text: "主页",
    link: "/",
  },
  {
    text: "组件",
    link: "/components",
  },
];

// 3
// 侧边导航
const sidebar = {
  "/components/": [
    "/components/",
    "/components/divider.md",
    "/components/button.md",
  ],
};

// theme
// 主题配置
const theme = defaultTheme({
  home: "/",
  navbar,
  sidebar,
});

// 4
// plugins
const plugins = [
  [
    backToTopPlugin(),
    containerPlugin({
      type: "tip",
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "../components"),
    }),
  ],
];

module.exports = {
  head,
  theme,
  plugins,
};
