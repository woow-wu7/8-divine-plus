import { defineClientConfig } from "@vuepress/client";

import DivinePlus from "../../packages/components/index";
import "../../packages/theme-chalk/index.scss";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(DivinePlus);
  },
});
