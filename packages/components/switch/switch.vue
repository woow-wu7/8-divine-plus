<template>
  <div
    :class="[
      ns.b(),
      ns.is('checked', isChecked),
      ns.is('disabled', props.disabled as boolean),
    ]"
    @click="onInvert"
  >
    <input type="checkbox" :class="ns.e('input')" />

    <span
      :class="[
        ns.e('label'),
        ns.em('label', 'left'),
        ns.is('active', !isChecked),
      ]"
      v-if="props.inactiveText"
    >
      <span v-if="inactiveText" :aria-hidden="isChecked">{{
        props.inactiveText
      }}</span>
    </span>

    <span :class="ns.e('pointer')" ref="pointer"> </span>

    <span
      :class="[
        ns.e('label'),
        ns.em('label', 'right'),
        ns.is('active', isChecked),
      ]"
      v-if="activeText"
    >
      <span v-if="activeText" :aria-hidden="!isChecked">{{ activeText }}</span>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "DvSwitch",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { useNamespace } from "../../hooks/useNamespace";

const ns = useNamespace("switch");
const props = defineProps({
  modelValue: {
    type: [Number, String, Boolean],
    default: false,
  },
  activeValue: {
    type: [Number, String, Boolean],
    default: true,
  },
  inactiveValue: {
    type: [Number, String, Boolean],
    default: false,
  },
  disabled: {
    type: [Boolean, String, Boolean],
    default: false,
  },

  activeText: {
    type: String,
    default: "",
  },
  inactiveText: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["update:modelValue", "change"]);

const isChecked = computed(() => {
  return props.modelValue === props.activeValue;
});

const onInvert = () => {
  if (props.disabled) return;

  const val = isChecked.value ? props.inactiveValue : props.activeValue;
  emits("update:modelValue", val);
  emits("change", val);
};
</script>
