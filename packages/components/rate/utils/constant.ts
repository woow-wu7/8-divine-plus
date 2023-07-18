export const rateProps = {
  max: {
    type: Number,
    default: 5,
  },
  modelValue: Number,
  eventBoundary: Object,
};

export type TState = {
  max: Array<any>;
};
