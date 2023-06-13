import Loading from "./loading.vue";
import { createVNode, render } from "vue";

const createInstance = (options: any) => {
  const props = {
    ...options,
    visible: true,
  };
  console.log("props===", props);
  const vnode = createVNode(Loading, props);

  console.log("22222===", 22222);
  render(vnode, document.body);

  const vm = vnode.component!.proxy as any;
  const handler = {
    close: vm.close,
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
