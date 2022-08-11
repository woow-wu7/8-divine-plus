<template>
  <section :class="[ns.b()]">
    <slot></slot>
    <transition name="dv-zoom-in-center">
      <sup
        v-text="content"
        v-show="!hidden && (content || isDot)"
        :class="[
          ns.e('content'),
          ns.em('content', type), // eg: dv-badge__content--primary
          ns.is('fixed', !!slots.default),
          ns.is('dot', isDot),
        ]"
      />
    </transition>
  </section>
</template>
<script lang="ts">
export default {
  name: "DvBadge",
};
</script>

<script setup lang="ts">
import { computed, PropType, useSlots } from "vue";
import { useNamespace } from "../../hooks/useNamespace";

const ns = useNamespace("badge");

const props = defineProps({
  value: {
    type: [String, Number],
  },
  max: {
    type: Number,
    default() {
      return 99;
    },
  },
  isDot: {
    type: Boolean,
    default() {
      return false;
    },
  },
  type: {
    type: String as PropType<
      "primary" | "success" | "warning" | "danger" | "info"
    >,
    default() {
      return "danger";
    },
  },
  hidden: {
    type: Boolean,
    default() {
      return false;
    },
  },
});

// content - 这里 elementPlus 比 element 做的好，因为这里限制成了string，而不是string和number不确定的类型
const content = computed<string>(() => {
  // isDot
  if (props.isDot) return "";

  // number
  if (Number(props.value) && Number(props.max)) {
    return props.value! < props.max! ? `${props.value}` : `${props.max}+`;
  }

  // string
  return `${props.value}`;
});

const slots = useSlots();

// defineExpose 供 父组件中通过 ref 来访问 content
defineExpose({
  content,
});

// sup 上标
// sub 下标
</script>
