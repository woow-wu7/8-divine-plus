<template>
  <section
    :class="ns.b()"
    :style="scrollbarStyle"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div :class="ns.e('wrap-out')" v-if="!native">
      <div :class="ns.e('wrap-in')" ref="refWrap" @scroll="onScroll">
        <slot></slot>
      </div>
      <Bar ref="refBar"></Bar>
    </div>

    <div :class="ns.e('native')" v-if="native">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "DvScrollbar",
};
</script>

<script setup lang="ts">
import Bar from "./components/Bar.vue";
import { computed, ref, provide, onMounted, reactive, nextTick } from "vue";
import { scrollbarProps } from "./utils/constant";
import { useNamespace } from "@/hooks/useNamespace";
import { processUnit } from "@/utils";

const ns = useNamespace("scrollbar");
const props = defineProps(scrollbarProps);

const state = reactive({
  ratio: { ratioX: 0, ratioY: 0 },
  prevY: 0,
  isGoDown: false,
});

const refBar = ref();
const refWrap = ref<HTMLDivElement>();
provide("refWrap", refWrap);
provide(
  "ratio",
  computed(() => state.ratio)
);

onMounted(async () => {
  await nextTick();
  getRatio();
});

const scrollbarStyle = computed(() => [
  {
    height: processUnit(props.height),
    maxHeight: processUnit(props.maxHeight),
  },
  props.wrapStyle,
]);

const getRatio = () => {
  if (!refWrap.value || !refBar.value) return;

  const ratioY =
    (refWrap.value.scrollHeight - refWrap.value.offsetHeight) /
    (refWrap.value.offsetHeight -
      refBar.value.refVThumb.refVThumbRoot.offsetHeight);

  const ratioX =
    (refWrap.value.scrollWidth - refWrap.value.offsetWidth) /
    (refWrap.value.offsetWidth -
      refBar.value.refHThumb.refHThumbRoot.offsetWidth);

  state.ratio = {
    ratioX,
    ratioY,
  };
};

// scroll 和 mousewheel 事件的选择？
// - mousewheel 触发频率低，导致滚动条闪动，效果差
// - scroll 满足需求
const onScroll = () => {
  if (!refWrap.value) return;

  const scrollTopWrap = refWrap.value.scrollTop!;

  getScrollDirection(scrollTopWrap);

  const isBottomWrap =
    scrollTopWrap >=
    refWrap.value.scrollHeight - refWrap.value.offsetHeight - 5;

  if (state.isGoDown && isBottomWrap) return;
  if (!state.isGoDown && scrollTopWrap <= 2) return;
  setScrollbarPosition();
};

const getScrollDirection = (scrollTopWrap: number) => {
  if (scrollTopWrap > state.prevY) {
    state.isGoDown = true;
  } else {
    state.isGoDown = false;
  }
  state.prevY = scrollTopWrap;
};

const setScrollbarPosition = () => {
  const top = refWrap?.value?.scrollTop! / state.ratio.ratioY;
  refBar.value.refVThumb.refVThumbRoot.style.transform = `translateY(${top}px)`;
};

const onMouseEnter = () => {
  refBar.value.refVThumb.refVThumbRoot.style.visibility = "visible";
};

const onMouseLeave = () => {
  refBar.value.refVThumb.refVThumbRoot.style.visibility = "hidden";
};
</script>
