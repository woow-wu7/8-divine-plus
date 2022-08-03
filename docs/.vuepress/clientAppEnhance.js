import { defineClientAppEnhance } from "@vuepress/client";
import DivinePlus from "../../packages/components/index";
import "../../packages/theme-chalk/index.scss";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(DivinePlus);
});
