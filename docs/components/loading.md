# Loading

加载数据时显示的动画

## loading 指令方式调用

- v-loading
- dv-loading-text: loading 的文字
- dv-loading-background-color: loading 的背景颜色

<LoadingBase/>

## loading 服务方式调用

<LoadingServer/>

## Loading 配置属性

| 属性      | 描述                                          | 类型         | 可选值                             | 默认值 |
| --------- | --------------------------------------------- | ------------ | ---------------------------------- | ------ |
| message   | 消息文字                                      | string/VNode | -                                  | -      |
| type      | 主题类型                                      | string       | 'success'/'warning'/'error'/'info' | info   |
| duration  | 显示时间, 毫秒。设为 0 则不会自动关闭         | number       | 3000                               |
| showClose | 是否显示关闭按钮                              | boolean      | -                                  | false  |
| offset    | Message 距离窗口顶部的偏移量                  | number       | -                                  | 20     |
| onClose   | 关闭时的回调函数, 参数为被关闭的 message 实例 | function     | -                                  | -      |
