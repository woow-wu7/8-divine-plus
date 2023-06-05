import { definePropType } from "@/utils/definePropType";

export const scrollbarProps = {
  height: {
    type: [Number, String],
    default: "",
  },
  maxHeight: {
    type: [Number, String],
    default: "",
  },
  wrapStyle: {
    type: [String, Object],
    default: "",
  },
  native: {
    type: Boolean,
    default: false,
  },
};

export const thumbProps = {
  direction: {
    type: definePropType<"horizontal" | "vertical">(String),
    default: "vertical",
  },
};
