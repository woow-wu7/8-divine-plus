export const rateProps = {
  max: {
    type: Number,
    default: 5,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  texts: {
    type: Array,
    default: [],
  },
  showScore: {
    type: Boolean,
    default: false,
  },
  allowClear: {
    type: Boolean,
    default: false,
  },
  allowHalf: {
    type: Boolean,
    default: false,
  },
  iconName: String,
  eventBoundary: Object,
};

export type TMax = {
  count: number;
  isHover?: boolean;
};

export type TState = {
  max: TMax[];
  hoverIndex: number;
};
