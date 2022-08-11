import { defineClientConfig } from "@vuepress/client";

import DivinePlus from "../../packages/components/index";
import "../../packages/theme-chalk/index.scss";

// hightlight.js
// @highlightjs/vue-plugin
import "highlight.js/styles/atom-one-dark-reasonable.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("javascript", javascript);

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(DivinePlus);
    app.use(hljsVuePlugin);
  },
});
