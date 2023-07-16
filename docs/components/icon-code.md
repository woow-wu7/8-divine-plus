```
<template>
  <section>
    <h3>dv-icon 测试</h3>

    <i class="dv-icon-star" style="color: red; font-size: 30px"></i> &nbsp;
    <i class="dv-icon-loading loading-animate"></i> &nbsp;

    <dv-icon name="star" /> &nbsp;
    <dv-icon name="search" />
  </section>
</template>

<style lang="scss" scoped>
@keyframes round {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading-animate {
  color: blueviolet;
  font-size: 30px;
  animation: round 1s ease-in-out 0s infinite;
}
</style>
```
