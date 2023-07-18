<template>
  <section :class="ns.b()">
    <span
      v-for="(item, index) in state.max"
      :key="item.count"
      ref="RefStars"
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
    <span :class="ns.e('text')">{{ texts[state.hoverIndex] }}</span>
  </section>
</template>

<script lang="ts">
export default {
  name: "DvRate",
};
</script>
<script lang="ts" setup>
import { reactive, watch, ref, onMounted } from "vue";
import { useNamespace, useClickAway } from "@/hooks";
import { rateProps } from "./utils/constant";
import type { TState } from "./utils/constant";

const ns = useNamespace("rate");

const props = defineProps(rateProps);
const emits = defineEmits(["update:modelValue", "clickOutside", "change"]);

const RefStars = ref();

const state = reactive<TState>({
  max: new Array(props.max).fill(0).map((_, index) => ({ count: index + 1 })),
  hoverIndex: props.modelValue,
});

onMounted(() => {
  useClickAway(
    () => {
      if (props.readonly) return;
      emits("clickOutside");
    },
    RefStars.value,
    {
      root: (props.eventBoundary as HTMLElement) || document,
    }
  );
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
    state.hoverIndex = props.modelValue - 1;
    setMax(props.modelValue as number);
  },
  {
    immediate: true,
  }
);

const onMouseMove = (item: any) => {
  if (props.readonly) return;

  state.hoverIndex = item.count - 1;
  setMax(item.count);
};

const onMouseLeave = () => {
  if (props.readonly) return;

  state.hoverIndex = props.modelValue - 1;
  setMax(props.modelValue as number);
};

const onSelect = (item: any) => {
  if (props.readonly) return;

  emits("update:modelValue", item.count);
};
</script>
