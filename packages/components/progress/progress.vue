<template>
  <div
    :class="[
      ns.b(),
      ns.e(type),
      ns.is(status),
      {
        [ns.m('without-text')]: !showText,
        [ns.m('text-inside')]: textInside,
      },
    ]"
  >
    <!-- 1. line -->
    <div :class="ns.b('bar')" v-if="isLineType">
      <div
        :class="ns.be('bar', 'outer')"
        :style="{ height: strokeWidth + 'px' }"
      >
        <div :class="ns.be('bar', 'inner')" :style="barStyle">
          <div :class="ns.be('bar', 'innerText')" v-if="showText && textInside">
            {{ content }}
          </div>
        </div>
      </div>
    </div>

    <!-- 1. line 末尾 text -->
    <div
      :class="ns.e('text')"
      v-if="showText && !textInside"
      :style="{ fontSize: progressTextSize + 'px' }"
    >
      <span>{{ content }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DvProgress",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { useNamespace } from "@/hooks/useNamespace";
import { isArray } from "./utils";
import type { TColor, TColorArray, TStatus, TType } from "./utils";

const ns = useNamespace("progress");

const props = defineProps({
  type: {
    type: String,
    default: "line",
    validator: (type: TType) => ["line", "circle", "dashboard"].includes(type),
  },
  percent: {
    type: [Number],
    default: 0,
    required: true,
    validator: (val: number | string) => Number(val) >= 0 && Number(val) <= 100,
  },
  strokeWidth: {
    type: Number,
    default: 6,
  },
  status: {
    type: String,
    default: "",
    validator: (status: TStatus) =>
      ["success", "error", "warning"].includes(status),
  },
  color: {
    type: [String, Array, Function],
    default: "",
  },
  showText: {
    type: Boolean,
    default: true,
  },
  textInside: {
    type: Boolean,
    default: false,
  },
  format: Function,
});

const isLineType = computed(() => props.type === "line");

const barStyle = computed(() => {
  const style: any = {};
  style.width = props.percent + "%";
  style.backgroundColor = getCurrentColor(props.percent);
  return style;
});

const content = computed(() => {
  if (typeof props.format === "function") {
    return props.format(props.percent) || "";
  } else {
    return `${props.percent}%`;
  }
});

const progressTextSize = computed(() => {
  return props.type === "line"
    ? 12 + props.strokeWidth * 0.4
    : 1 * 0.111111 + 2;
});

const getCurrentColor = (percent: any) => {
  if (typeof props.color === "function") {
    return props.color(percent);
  } else if (typeof props.color === "string") {
    return props.color;
  } else if (isArray(props.color)) {
    return getLevelColor(percent);
  } else {
    return "";
  }
};

const getLevelColor = (percent: any) => {
  const colorArray = getColorArray().sort(
    (a: TColor, b: TColor) => a.percent - b.percent
  );

  for (let i = 0; i < colorArray.length; i++) {
    if (colorArray[i].percent > percent) {
      return colorArray[i].color;
    }
  }

  return colorArray[colorArray.length - 1].color;
};

const getColorArray = () => {
  const color = props.color as TColorArray;
  const span = 100 / color.length;
  return color.map((currentColor: TColor, index: number) => {
    if (typeof currentColor === "string") {
      return {
        color: currentColor,
        percent: (index + 1) * span,
      };
    }
    return currentColor;
  });
};
</script>
