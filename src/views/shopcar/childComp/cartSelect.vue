<template>
  <div
    class="icon-selector"
    :class="{ 'select-active': isChecked }"
    @click="unchecked"
  >
    <img src="~assets/img/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    unchecked() {
      this.$emit("unchecked");
    },
  },
};
</script>

<style scoped>
.icon-selector {
  position: relative;
  margin: 0px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}
.select-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>