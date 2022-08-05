# Breadcrumb

面包屑

## 基本用法

<Breadcrumb/>

<details>
<summary>查看源代码</summary>

```vue
<DvBreadcrumb :separator-icon="ArrowRight">
  <DvBreadcrumbItem :to="{ path: '/home' }">主页</DvBreadcrumbItem>
  <DvBreadcrumbItem><a href="/">列表</a></DvBreadcrumbItem>
  <DvBreadcrumbItem>详情</DvBreadcrumbItem>
</DvBreadcrumb>

<DvBreadcrumb>
  <DvBreadcrumbItem :to="{ path: '/home' }">主页</DvBreadcrumbItem>
  <DvBreadcrumbItem><a href="/">列表</a></DvBreadcrumbItem>
  <DvBreadcrumbItem>详情</DvBreadcrumbItem>
</DvBreadcrumb>
```

</details>

## Breadcrumb 组件属性

| 属性           | 描述           | 类型               | 可选值 | 默认值 |
| -------------- | -------------- | ------------------ | ------ | ------ |
| separator      | 分隔符         | string             | --     | ---    |
| separator-icon | 设置分隔符样式 | string / Component | --     | --     |

## Breadcrumb-item 组件属性

| 属性 | 描述                                   | 类型          | 可选值 | 默认值 |
| ---- | -------------------------------------- | ------------- | ------ | ------ |
| to   | 路由跳转目标，同 vue-router 的 to 属性 | string/object | --     | ---    |
