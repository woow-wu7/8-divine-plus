<template>
  <section :class="ns.b()" :style="scrollbarStyle">
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
import { computed, ref, provide, onMounted, reactive, nextTick } from "vue";
import { useNamespace } from "@/hooks/useNamespace";
import { scrollbarProps } from "./utils/constant";
import { processUnit } from "@/utils";
import Bar from "./components/Bar.vue";

const ns = useNamespace("scrollbar");
const props = defineProps(scrollbarProps);

const refBar = ref();
const refWrap = ref<HTMLDivElement>();
provide("refWrap", refWrap);

const state = reactive({ ratio: { ratioX: 0, ratioY: 0 } });

onMounted(async () => {
  await nextTick();
  processRatio();
});

const processRatio = () => {
  if (!refWrap.value) return;

  const ratioY =
    (refWrap?.value.scrollHeight! - refWrap?.value.offsetHeight!) /
    (refWrap?.value.offsetHeight! -
      refBar.value.refVThumb.refThumbVertical.offsetHeight!);

  const ratioX =
    (refWrap?.value.scrollWidth! - refWrap?.value.offsetWidth!) /
    (refWrap?.value.offsetWidth! -
      refBar.value?.refHThumb?.refThumbHorizontal.offsetWidth);

  state.ratio = {
    ratioX,
    ratioY,
  };
};

const scrollbarStyle = computed(() => [
  {
    height: processUnit(props.height),
    maxHeight: processUnit(props.maxHeight),
  },
  props.wrapStyle,
]);

const onScroll = () => {
  const top = refWrap?.value?.scrollTop! / state.ratio.ratioY;
  refBar.value.refVThumb.refThumbVertical.style.transform = `translateY(${top}px)`;
};
</script>
