```
<template>
    <dv-rate
      :max="5"
      v-model="stars"
      iconName="search"
      :iconStyle="iconStyle"
    />
</template>

<script setup>
import { ref } from "vue";

const stars = ref(3);

const iconStyle = {
  fontSize: "24px !important",
};
</script>
```
