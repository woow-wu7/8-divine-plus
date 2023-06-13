import Loading from "./loading.vue";
import { createVNode, render } from "vue";
import type { LoadingOptions } from "./utils/type";

const createInstance = (options: LoadingOptions) => {
  const body = document.body;

  const props = {
    ...options,
    visible: true,
    fullscreen: true,
    onDestroy: () => {
      render(null, body);
    },
  };

  const vnode = createVNode(Loading, props);
  render(vnode, body);

  const vm = vnode.component!.proxy as any;
  const handler = {
    close: vm.close,
    visible: vm.visible,
  };

  const instance = {
    vnode,
    vm,
    handler,
  };

  return instance;
};

const LoadingService = (options: LoadingOptions) => {
  const instance = createInstance(options);
  return instance.handler;
};

export { LoadingService };
