import { defineClientConfig } from "@vuepress/client";

import DivinePlus from "../../packages/components/index";
import "../../packages/theme-chalk/index.scss";

import Markdown from "vue3-markdown-it";
import "highlight.js/styles/monokai.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(DivinePlus);
    app.use(Markdown);
  },
});
