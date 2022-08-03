# divider2

区隔内容的分割线

## 基本用法

对不同段落的文本进行分割

<Divider />

<details>
<summary>查看源代码</summary>

```vue
<template>
  <div class="divider">
    <DvDivider direction="horizontal">
      <template v-slot:default>center</template>
    </DvDivider>
    <DvDivider
      direction="horizontal"
      contentPosition="left"
      borderStyle="dashed"
    >
      <template v-slot:default>left</template>
    </DvDivider>
    <DvDivider direction="horizontal" contentPosition="right">
      <template v-slot:default>right</template>
    </DvDivider>
  </div>
</template>
```

</details>

## Divider 组件属性

| 属性             | 描述                   | 类型   | 可选值                                                                            | 默认值     |
| ---------------- | ---------------------- | ------ | --------------------------------------------------------------------------------- | ---------- |
| direction        | 设置分割线方向         | string | horizontal / vertical                                                             | horizontal |
| border-style     | 设置分隔符样式         | string | [CSS/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | solid      |
| content-position | 自定义分隔线内容的位置 | string | left / right / center                                                             | center     |
