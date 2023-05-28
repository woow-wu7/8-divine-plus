# Message

- element-ui message 源码分析
  - https://github.com/woow-wu7/7-element-source-code-analysis/blob/main/packages/message/src/main.js
- divine-ui message 源码
  - https://github.com/woow-wu7/8-divine-plus/blob/main/packages/components/message/message.ts

# 需要用到的 vue3 api

    1
    createVNode
    createVNode(type, props, children, patchFlag, dynamicProps, isBlockNode)
    作用: 用来创建一个 VNode
    --

    签名
    declare function _createVNode(
      type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT,
      props?: (Data & VNodeProps) | null,
      children?: unknown,
      patchFlag?: number,
      dynamicProps?: string[] | null,
      isBlockNode?: boolean
    ): VNode;

<!---->

    2
    render
    render(vnode, container, isSVG)
    ---

    签名
    1.export declare const render: RootRenderFunction<Element | ShadowRoot>;
    2.export declare type RootRenderFunction<HostElement = RendererElement> = (
      vnode: VNode | null,
      container: HostElement,
      isSVG?: boolean
    ) => void;

<!---->

    3
    vue2全局属性设置: Vue.prototype.xxx
    vue2全局属性获取: this.xxx

    vue3全局属性设置: createApp().config.globalProperties.xxx = xxx
    vue3全局属性获取: getCurrentInstance().appContext.globalProperties.xxx

# 资料

- https://github.com/ecaps1038/yike-design/blob/master/components/message/Message.ts
