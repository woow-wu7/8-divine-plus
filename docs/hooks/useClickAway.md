# useClickAway 监听元素外点击

- 用于监听元素外的鼠标点击事件

### 函数签名

- `useClickAway(onClickAway, targets, events) => void`
- 参数
  - onClickAway: 监听的元素外点击时触发的事件
  - targets: Ref 绑定的 DOM，或者多个绑定的 Ref 的 DOM 组成的数组
  - events: 默认是'click'事件，支持所有鼠标点击事件，也支持数组表示不同事件

```typescript
type TTarget = Ref<HTMLElement> | HTMLElement;
type TDocumentEventKey = keyof DocumentEventMap;

type UseClickAway = (
  onClickAway: (e: MouseEvent) => void,
  targets: TTarget | TTarget[],
  events: TDocumentEventKey | TDocumentEventKey[]
) => void;
```

### 基本用法

- 默认是触发 `click` 事件

<UseClickAway />

### 进阶用法

- 支持`多个 DOM 元素`的外的点击监听
- 支持`不同的事件`触发

<UseClickAwayMultiple />
