# vue3

# (一) vue3 对比 vue2 做了哪些优化？

```
性能优化

1
proxy 代替 Object.defineProps
- 原理
  - Object.defineProps监听的是对象中的某个属性，如果要监听整个对象，就需要通过循环遍历对象的所有属性来实现，并且对新增删除属性无法监听
- 解决:
  - 对象属性添加，删除无法响应式
  - 数组下标修改值，通过length修改数组长度都无法响应式
- 兼容性:
  - proxy 无法兼容ie
  - Object.defineProps 兼容ie8以上的版本


2
tree-shaking，减少打包体积
- 比如:
  - 内置组件 Transition KeepAlive Teleport Suspense TransitionGroup 在项目中如果没有使用到，就不会打包


3
PatchFlag 和 hoistStatic
- vue2
  - parse -------> 将 template 转成 ast
  - optimize ----> 将 静态节点 和 静态根节点 打上标记，在diff时不做diff算法对比；vue2中template有10个p标签，但只有一个p是动态节点即存在变量，vue2整个模版中的元素都会重渲染
  - generate ----> 将 ast 转成 render 函数
- vue3
  - 动态节点 - PatchFlag
    - 在vue2中如果一个template中有10个p标签，但只有一个p是动态节点即只有一个p标签存在变量
      - vue2 也会整个整个模版中的元素都会渲染，即 ----------------------------- ( vue2的更新是组件级别的 )
      - vue3 则只会更新模版中打上PatchFlag标记的标签，而不会重渲染整个template -- ( vue3的更新是元素级别的 )
  - 静态节点 - hoistStatic
    - hoistStatic静态节点提升，hoist是提升的意思
    - 当使用hoistStatic时，所有 静态的节点都被提升到render方法之外
    - 这意味着，他们只会在应用启动的时候被创建一次，而后随着每次的渲染被不停地复用


4
cacheHandler 事件监听缓存
- 默认情况下 ( @click等事件 ) 会被认为是 ( 动态变量 )，所以每次 ( 视图更新时会去追踪事件的变化 )
- 但是正常情况下，视图渲染前后，事件一般都不会变化的，是不需要去追踪变化的，所以vue3做了 ( 事件缓存优化 )


5
其他
- 更好的代码管理方式: monorepo
- 类型系统: typescript


6
资料
https://juejin.cn/post/6844904199726055437#heading-3
```

# (二) 内置组件

### transition

- 官网 https://cn.vuejs.org/guide/built-ins/transition.html#css-based-transitions

```
transition
- 概念
  - 内置组件
  - 作用是将 ( 进入和开动画 ) 通过默认插槽应用到插槽的 ( 元素或组件 ) 上
- 触发条件
  - v-if 触发的切换
  - v-show 触发的切换
  - component 切换的动态组件
- 属性
  - name 表示过渡效果名称
- 事件
  -  @before-enter @enter @after-enter  @enter-cancelled
  -  @before-leave @leave @after-leave @leave-cancelled
- 注意
  - transition 仅支持单个元素或组件作为其插槽内容，如果是组件则该组件必须只有一个根元素
---

1
css过渡class
- enter
  - v-enter-from
  - v-enter-active
  - v-enter-to
- leave
  - v-leave-from
  - v-leave-active
  - v-leave-to

2
性能
- transform 和 opacity
  - 1. 以上两个属性在动画中 ( 不影响DOM结构 )，不会发生 ( 重排 )，性能优秀
  - 2. transform可以触发 ( GPU硬件加速 )
```
