# Collapse 折叠面板

## 前置知识

### (1) 一些单词

```
collapse 折叠
```

### (2) Transition 内置组件

- 官网 https://cn.vuejs.org/guide/built-ins/transition.html

```
Transition
---

1
Transition 触发的条件
- v-if 和 v-show
- <component> 内置组件的切换
- 改变特殊的 key 属性


2
两个阶段 和 三种状态
- 两个阶段: Enter  Leave
- 三种状态: from  active  to
- 具体
  - v-enter-from  v-enter-active  v-enter-to
  - v-leave-from  v-leave-active  v-leave-to
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}


3
事件
<Transition
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @enter-cancelled="onEnterCancelled"
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
  @leave-cancelled="onLeaveCancelled"
></Transition>
--
实战如下
 <transition
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @leave="onLeave"
></Transition>
const onBeforeEnter = (el: RendererElement) => {
  el.style.height = "0px";
};
const onEnter = (el: RendererElement) => {
  el.style.transition = "none";
  el.style.height = "auto";
  const height = el.offsetHeight;

  el.style.height = "0px";
  el.offsetHeight;
  el.style.height = height + "px";
  el.style.transition = "all 0.2s";
};
const onLeave = (el: RendererElement) => {
  el.style.height = "0px";
};
```
