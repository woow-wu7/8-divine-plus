import { createVNode, render } from "vue";
import Fullscreen from "./fullscreen.vue";
import { DV_FULLSCREEN } from "./utils/constant";
import type { TDirective } from "@/directives/utils";

export const vDvFullscreen: TDirective = {
  name: DV_FULLSCREEN,
  options: {
    mounted(el) {
      el.style.position = "relative";
      const fullscreen = createVNode(Fullscreen, {});
      render(fullscreen, el);
    },
    unmounted(el) {
      render(null, el);
    },
  },
};
