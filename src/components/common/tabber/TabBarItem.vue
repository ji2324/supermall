<template>
  <div class="tabbar-item" @click="choice">
    <div>
      <slot name="item-normal-img" v-if="!Isactive"></slot>
      <slot name="item-active-img" v-else></slot>
    </div>
    <div :style="Isactive ? { color: activeColor } : {}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    choice() {
      this.$router.push(this.path);
    },
  },
  computed: {
    Isactive() {
      return this.$route.path.indexOf(this.path) >= 0;
    },
  },
};
</script>

<style>
.tabbar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 0px;
}
</style>