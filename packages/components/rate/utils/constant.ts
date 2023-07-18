export const rateProps = {
  max: {
    type: Number,
    default: 5,
  },
  modelValue: Number,
};

export type TState = {
  currentValue: number | undefined;
  hoverValue: number;
  max: Array<any>;
};
