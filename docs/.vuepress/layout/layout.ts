// 1
// head
// 注入到当前页面的 HTML <head> 中的标签
export const head = [
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
export const navbar = [
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
export const sidebar = {
  // "/document/": [
  //   {
  //     text: "JS问题",
  //     children: ["/document/js/README.md", "/document/js/Object.md"],
  //   },
  //   {
  //     text: "vue2",
  //     children: ["/document/vue2/vue.md", "/document/vue2/COMPONENTS.md"],
  //   },
  // ],
};
