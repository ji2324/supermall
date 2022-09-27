<template>
  <div id="bigbox">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#bigbox {
  display: flex;
  background-color: #f5f4f5;
  /* 绝对定位 */
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 9;

  box-shadow: 0px -2px 2px #dfdfe0;
}
</style>