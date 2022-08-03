const { defaultTheme } = require("vuepress");
const { path } = require("@vuepress/utils");
const { containerPlugin } = require("@vuepress/plugin-container"); // 容器提示
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top"); // 回到顶部
const { docsearchPlugin } = require("@vuepress/plugin-docsearch"); // 搜索
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
    docsearchPlugin({
      apiKey: "<API_KEY>",
      indexName: "<INDEX_NAME>",
    }),
  ],
];

module.exports = {
  head,
  theme,
  plugins,
};
