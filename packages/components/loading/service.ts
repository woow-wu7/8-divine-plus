import Loading from "./loading.vue";
import { createVNode, render } from "vue";

const createInstance = (options: any) => {
  const body = document.body;

  const props = {
    ...options,
    visible: true,
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

const LoadingService = (options: any) => {
  const instance = createInstance(options);
  return instance.handler;
};

export { LoadingService };
