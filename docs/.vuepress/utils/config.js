// vuepress2
const { defaultTheme } = require("vuepress");
const { path } = require("@vuepress/utils");
const { containerPlugin } = require("@vuepress/plugin-container");
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");
const { docsearchPlugin } = require("@vuepress/plugin-docsearch");
const { gitPlugin } = require("@vuepress/plugin-git");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components"); // 注册组件

// vite
const { viteBundler } = require("@vuepress/bundler-vite");
const mdPlugin = require("vite-plugin-markdown");
const hljs = require("highlight.js/lib/core");
hljs.registerLanguage("xml", require("highlight.js/lib/languages/xml"));

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

const navbar = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "组件",
    link: "/components",
  },
  {
    text: "GitHub",
    link: "https://github.com/woow-wu7/8-divine-plus",
  },
  {
    text: "博客",
    children: [
      { text: "掘金", link: "https://juejin.cn/user/1063982989065799/posts" },
      { text: "简书", link: "https://www.jianshu.com/u/70c8a3b8bb44" },
    ],
  },
];

const sidebar = {
  "/components/": [
    "/components/",
    "/components/container.md",
    "/components/layout.md",
    "/components/breadcrumb.md",
    "/components/badge.md",
    "/components/tag.md",
    "/components/divider.md",
    "/components/backtop.md",
  ],
};

const theme = defaultTheme({
  home: "/",
  navbar,
  sidebar,
});

const plugins = [
  [
    backToTopPlugin(),
    containerPlugin({
      type: "tip", // tip是提示的意思
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "../components"),
      components: {
        ComponentWrap: path.resolve(__dirname, "../theme/ComponentWrap.vue"),
      },
    }),
    docsearchPlugin({
      apiKey: "<API_KEY>",
      indexName: "<INDEX_NAME>",
    }),
    gitPlugin({
      contributors: true,
    }),
  ],
];

const bundler = viteBundler({
  viteOptions: {
    plugins: [
      mdPlugin.plugin({
        mode: ["html"],
        markdownIt: {
          highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return hljs.highlight(str, { language: "xml" }).value;
              } catch (__) {}
            }

            return hljs.highlight(str, { language: "xml" }).value;
          },
        },
      }),
    ],
    // resolve: {
    //   alias: {
    //     "@": "../../../packages/components",
    //   },
    // },
  },
  vuePluginOptions: {},
});

module.exports = {
  head,
  theme,
  plugins,
  bundler,
};
