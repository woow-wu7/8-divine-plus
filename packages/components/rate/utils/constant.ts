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
    default: ["terrible", "bad", "normal", "good", "wonderful"],
  },
  eventBoundary: Object,
};

export type TState = {
  max: Array<any>;
  hoverIndex: number;
};
