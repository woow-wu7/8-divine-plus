# 内置组件

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
