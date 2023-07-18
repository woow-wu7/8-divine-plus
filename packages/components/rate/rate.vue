<template>
  <section :class="ns.b()">
    <span
      v-for="item in state.max"
      :key="item.count"
      :class="ns.e('item')"
      @mousemove="onMouseMove(item)"
      @mouseleave="onMouseLeave"
      @click="onSelect(item)"
    >
      <dv-icon
        :name="item.isHover ? 'star1' : 'star'"
        :class="[ns.e('icon'), ns.is('hover', item.isHover)]"
      ></dv-icon>
    </span>
  </section>
</template>

<script lang="ts">
export default {
  name: "DvRate",
};
</script>
<script lang="ts" setup>
import { reactive, watch } from "vue";
import { useNamespace } from "@/hooks/useNamespace";
import { rateProps } from "./utils/constant";
import type { TState } from "./utils/constant";

const ns = useNamespace("rate");

const props = defineProps(rateProps);
const emits = defineEmits(["update:modelValue"]);

const state = reactive<TState>({
  max: new Array(props.max).fill(0).map((_, index) => ({ count: index + 1 })),
  currentValue: props.modelValue,
  hoverValue: -1,
});

const setMax = (count: number) => {
  state.max = state.max.map((_item: any) => {
    return {
      ..._item,
      isHover: _item.count <= count,
    };
  });
};

watch(
  () => props.modelValue,
  () => {
    console.log("123", 123);
    console.log("props.modelValue", props.modelValue);
    setMax(props.modelValue as number);
  },
  {
    immediate: true,
  }
);

const onMouseMove = (item: any) => {
  state.currentValue = item.count;
  state.hoverValue = item.count;

  setMax(item.count);
};

const onMouseLeave = () => {
  state.currentValue = props.modelValue;
  state.hoverValue = -1;

  setMax(-1);
};

const onSelect = (item: any) => {
  console.log("item.count", item.count);
  emits("update:modelValue", item.count);
};
</script>
