# Rate

评分组件

## 基本用法

## 组件属性

| 属性       | 描述                                        | 类型    | 可选值 | 默认值 |
| ---------- | ------------------------------------------- | ------- | ------ | ------ |
| v-model    | 评分数据                                    | number  | -      | -      |
| max        | 评分的上限，即星星的个数                    | number  | -      | 5      |
| readonly   | 只读                                        | boolean | -      | false  |
| allowClear | 选中后，再次点击可以取消选择                | boolean | -      | false  |
| allowHalf  | 是否允许半星                                | boolean | -      | false  |
| texts      | 尾部的文字说明，                            | array   | -      | []     |
| showScore  | 尾部显示分数，texts 和 showScore 只能二选一 | boolean | -      | false  |
| iconName   | 图标名，设置不同的图标，必须使用本库图标    | string  | -      | -      |

## 组件事件

| 事件         | 描述           | 类型                         | 可选值 | 默认值 |
| ------------ | -------------- | ---------------------------- | ------ | ------ |
| clickOutside | 星星外点击事件 | function                     | -      | -      |
| change       | 星星变化后触发 | function(stars: number):void | -      | -      |
