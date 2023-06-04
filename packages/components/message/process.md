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

    案例
    const props = {
        ...options,
        id,
        zIndex: zIndex++,
        onClose: () => {},
        onDestroy: () => {}
    };
    const vnode = createVNode(Message//组件, props//组件的props);

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

    案例
    const vnode = createVNode(Message, props);
    const container = document.createElement("div");
    render(vnode, container);

<!---->

    3
    vue2全局属性设置: Vue.prototype.xxx
    vue2全局属性获取: this.xxx

    vue3全局属性设置: createApp().config.globalProperties.xxx = xxx
    vue3全局属性获取: getCurrentInstance().appContext.globalProperties.xxx

<!---->

    4
    vue2 和 vue3 在 message 组件实现上的差异
    ---

    vue2
    - let MessageConstructor = Vue.extend(Message);
    - instance = new MessageConstructor({ data: options });
    - instance.$mount()
    - document.body.appendChild(instance.$el)

    vue3
    - const vnode = createVNode(Message, props);
    - const container = document.createElement("div");
    - render(vnode, container);
    - document.body.appendChild(container?.firstElementChild!);

<!---->

    5
    vue 中动态渲染组件的根标签的方式？
    ---

    render 函数
    - const view = h( tag, { class, style, ref }, slots.default );

    component 内置组件
    - <component :is="tag" />

# 资料

- https://github.com/ecaps1038/yike-design/blob/master/components/message/Message.ts
