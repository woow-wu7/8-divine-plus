<template>
  <section
    v-if="disableTransitions"
    :class="classes"
    :style="{ backgroundColor }"
    @click="handleClick"
  >
    <span :class="ns.e('content')">
      <slot></slot>
    </span>
    <component
      v-if="closable"
      :is="Close"
      :class="[ns.e('close'), 'dv-icon-close']"
      @click.stop="handleClose"
    />
  </section>

  <transition v-else :name="`${ns.namespace.value}-zoom-in-center`" appear>
    <section :class="classes" :style="{ backgroundColor }" @click="handleClick">
      <span :class="ns.e('content')">
        <slot />
      </span>
      <component
        v-if="closable"
        :is="Close"
        :class="[ns.e('close'), 'dv-icon-close']"
        @click.stop="handleClose"
      />
    </section>
  </transition>
</template>

<script lang="ts">
export default {
  name: "DvTag",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { Close } from "@element-plus/icons-vue";
import { useNamespace } from "../../hooks/useNamespace";
import { definePropType } from "../../utils/definePropType";

const ns = useNamespace("tag");
const emit = defineEmits(["close", "click"]);

const props = defineProps({
  type: {
    type: definePropType<"success" | "info" | "warning" | "danger">(String),
  },
  closable: {
    type: Boolean,
    default() {
      return false;
    },
  },
  disableTransitions: {
    type: Boolean,
    default() {
      return false;
    },
  },
  backgroundColor: String,
  hit: {
    type: Boolean,
    default() {
      return false;
    },
  },
  size: {
    type: definePropType<"large" | "default" | "small">(String),
    default() {
      return false;
    },
  },
  theme: {
    type: definePropType<"dark" | "light" | "plain">(String),
    default() {
      return false;
    },
  },
});

const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is("hit", props.hit),
  ns.m(props.size),
  ns.m(props.theme),
]);

const handleClose = (event: MouseEvent) => {
  emit("close", event);
};

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>
