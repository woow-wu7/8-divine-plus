```
<template>
  <section class="block">
    <button @click="showSuccess">成功</button> &nbsp;
    <button @click="showWarning">警告</button> &nbsp;
    <button @click="showError">错误</button> &nbsp;
    <button @click="showInfo">消息</button> &nbsp;
  </section>
</template>

<script setup>
const showMessage = () => {
  DvMessage({
    message: "this is a string options",
    showClose: true,
    type: "success",
    duration: 1000,
    onClose: () => {
      console.log("close");
    },
  });
};

const showMessageCustom = () => {
  DvMessage({
    message: "this is a string options",
    showClose: true,
    type: "success",
    duration: 0,
    onClose: () => {
      console.log("close");
    },
  });
};
</script>
```
