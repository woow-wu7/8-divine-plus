# Loading

加载数据时显示的动画

## loading 指令方式调用

- v-loading
- dv-loading-text: loading 的文字
- dv-loading-background-color: loading 的背景颜色

<LoadingBase/>

## loading 服务方式调用

- 通过函数调用，默认全屏

<LoadingService />

## Loading 配置属性

| 属性                        | 描述                                    | 类型    | 可选值 | 默认值 |
| --------------------------- | --------------------------------------- | ------- | ------ | ------ |
| text                        | 显示在加载图标下方的加载文案            | string  | -      | -      |
| fullscreen                  | 同 v-loading 指令中的 fullscreen 修饰符 | boolean | -      | -      |
| background                  | 遮罩背景色                              | string  | -      | -      |
| v-loading                   | 是否显示动画                            | boolean | -      | -      |
| dv-loading-text             | 显示在加载图标下方的加载文案            | string  | -      | -      |
| dv-loading-background-color | 遮罩背景色                              | string  | -      | -      |
