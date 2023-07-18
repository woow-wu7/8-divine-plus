<template>
  <section :class="ns.b()">
    <span
      v-for="item in state.max"
      :key="item.count"
      ref="RefStars"
      :class="ns.e('item')"
      @mousemove="onMouseMove(item, $event)"
      @mouseleave="onMouseLeave"
      @click="onSelect(item)"
    >
      <dv-icon
        :name="iconNames(item)"
        :class="[ns.e('icon'), ns.is('hover', item.isHover)]"
        data-icon-father
        :style="{ width: item.isHalf ? '46%' : '100%', overflow: 'hidden' }"
      >
      </dv-icon>
    </span>

    <span v-if="showTail" :class="ns.e('text')">{{ getText }}</span>
  </section>
</template>

<script lang="ts">
export default {
  name: "DvRate",
};
</script>
<script lang="ts" setup>
import { reactive, watch, ref, onMounted, computed } from "vue";
import { useNamespace, useClickAway } from "@/hooks";
import { rateProps } from "./utils/constant";
import type { TState, TMax } from "./utils/constant";

const ns = useNamespace("rate");

const props = defineProps(rateProps);
const emits = defineEmits(["update:modelValue", "clickOutside", "change"]);

const RefStars = ref();

const state = reactive<TState>({
  max: new Array(props.max)
    .fill(0)
    .map((_, index) => ({ count: index + 1, isHalf: false })),
  hoverIndex: props.modelValue,
  isHalf: false,
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

const iconNames = computed(() => (item: TMax) => {
  if (props.iconName) return props.iconName;
  else {
    return item.isHover ? "star1" : "star";
  }
});

const showTail = computed(() => props.showScore || props.texts.length);

const getText = computed(() => {
  if (props.showScore) return props.modelValue;
  if (props.texts.length) {
    return props.texts[state.hoverIndex];
  }
});

const setMax = (count: number, isHalf: boolean) => {
  state.max = state.max.map((_item) => {
    return {
      ..._item,
      isHover: _item.count <= count,
      isHalf: _item.count === count && isHalf,
    };
  });
};

watch(
  () => props.modelValue,
  () => {
    state.hoverIndex = props.modelValue - 1;
    setMax(props.modelValue as number, false);
  },
  {
    immediate: true,
  }
);

const onMouseMove = (item: TState["max"][number], event: MouseEvent) => {
  if (props.readonly) return;

  const target = event.target as any;
  let isHalf = false;
  console.log(
    'target?.hasAttribute("data-icon-child")',
    target?.hasAttribute("data-icon-child")
  );

  if (props.allowHalf) {
    if (target?.hasAttribute("data-icon-child")) {
      console.log("半星");
    }
    if (target?.hasAttribute("data-icon-father")) {
      console.log("全星");

      isHalf = event.offsetX * 2 <= target.clientWidth;
    }
  } else {
    isHalf = false;
    state.hoverIndex = item.count - 1;
  }

  setMax(item.count, isHalf);
};

const onMouseLeave = () => {
  if (props.readonly) return;

  state.hoverIndex = props.modelValue - 1;
  setMax(props.modelValue as number, false);
};

const onSelect = (item: TMax) => {
  if (props.readonly) return;

  if (props.allowClear) {
    if (props.modelValue !== 0 && props.modelValue === item.count) {
      emits("update:modelValue", 0);
      return;
    }
  }

  emits("update:modelValue", item.count);
};
</script>
