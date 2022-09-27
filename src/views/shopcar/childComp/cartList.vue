<template>
  <div class="cart-list">
    <cart-item v-for="(item, index) in cartList" :key="index" :produce="item" />
  </div>
</template>

<script>
import cartItem from "./cartItem";
export default {
  components: {
    cartItem,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>