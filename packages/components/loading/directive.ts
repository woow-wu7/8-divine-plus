import { createVNode, render } from "vue";
import Loading from "./loading.vue";
import { processPosition } from "./utils/index";

const createInstance = (el: any, binding: any) => {
  processPosition(el);

  const props = {
    visible: binding.value,
  };
  const vnode = createVNode(Loading, props);

  el.INSTANCE = {
    props,
    instance: vnode,
  };
  render(vnode, el);
};

const LoadingDirective = {
  mounted(el: any, binding: any) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el: any, binding: any) {
    createInstance(el, binding);
  },
  unmounted(el: any) {},
};

export { LoadingDirective };
