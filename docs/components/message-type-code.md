```
<template>
  <section class="block">
    <button @click="showMessage">基本用法</button> &nbsp;
    <button @click="showMessageCustom">不会消失，需要手动关系</button> &nbsp;
  </section>
</template>

<script setup>

const showSuccess = () => {
  DvMessage({
    message: "this is a string options",
    type: "success",
    showClose: true,
    onClose: () => {
      console.log("close");
    },
  });
};

const showWarning = () => {
  DvMessage({
    message: "this is a string options",
    type: "warning",
    showClose: true,
    onClose: () => {
      console.log("close");
    },
  });
};

const showError = () => {
  DvMessage({
    message: "this is a string options",
    type: "error",
    showClose: true,
    onClose: () => {
      console.log("close");
    },
  });
};

const showInfo = () => {
  DvMessage({
    message: "this is a string options",
    type: "showInfo",
    showClose: true,
    onClose: () => {
      console.log("close");
    },
  });
};
</script>
```
