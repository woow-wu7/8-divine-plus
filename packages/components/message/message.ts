import { createVNode, render } from "vue";
import Message from "./message.vue";

let seed = 1;

const createMessage = (options: any) => {
  if (typeof options === "string") {
    options = {
      message: options,
    };
  }
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;

  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose?.();
      // closeMessage(instance);
    },
    onDestroy: () => {
      render(null, container);
    },
  };
  const vnode = createVNode(Message, props);
  const container = document.createElement("div");
  render(vnode, container);
  document.body.appendChild(container);
};

// DvMessage
const DvMessage = (options: any = {}) => {
  createMessage(options);
};
DvMessage.$name = "$message";
DvMessage._context = null as any;

["success", "warning", "info", "error"].forEach((type) => {
  (DvMessage as any)[type] = (options: any = {}) => {
    if (typeof options === "string") {
      return DvMessage({
        message: options,
        type,
      });
    }

    return DvMessage({
      ...options,
      type,
    });
  };
});

export default DvMessage;

// createVNode
// 1.declare function _createVNode(
//   type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT,
//   props?: (Data & VNodeProps) | null,
//   children?: unknown,
//   patchFlag?: number,
//   dynamicProps?: string[] | null,
//   isBlockNode?: boolean
// ): VNode;

// render
// 1. export declare const render: RootRenderFunction<Element | ShadowRoot>;
// 2. export declare type RootRenderFunction<HostElement = RendererElement> = (
//   vnode: VNode | null,
//   container: HostElement,
//   isSVG?: boolean
// ) => void;
