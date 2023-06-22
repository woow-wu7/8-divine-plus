<template>
  <div :class="ns.b()">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "DvCollapse",
};
</script>
<script setup lang="ts">
import { provide, reactive } from "vue";
import { useNamespace } from "@/hooks/useNamespace";
import { COLLAPSE } from "./utils";
import type { ICollapseState } from "./utils";

const ns = useNamespace("collapse");

const props = defineProps({
  accordion: Boolean,
  modelValue: {
    type: [Array<string>, String],
    default: [],
  },
});

const state = reactive<ICollapseState>({ activeNames: [...props.modelValue] });

const setExpandNames = (currentActiveNames: string[]) => {
  state.activeNames = currentActiveNames;
  emits("update:modelValue", currentActiveNames);
  emits("change", currentActiveNames);
};

const onClickItem = (name: string) => {
  if (props.accordion) {
  } else {
    const currentActiveNames = [...state.activeNames];
    const index = currentActiveNames.findIndex((value) => value === name);

    if (index > -1) {
      currentActiveNames.splice(index, 1);
    } else {
      currentActiveNames.push(name);
    }

    setExpandNames(currentActiveNames);
  }
};

const emits = defineEmits(["update:modelValue", "change"]);

provide(COLLAPSE, {
  activeNames: state.activeNames,
  onClickItem,
});
</script>
