<template>
  <div class="shop-cart">
    <!-- 导航栏 -->
    <nav-bar class="shop-car-navbar">
      <span slot="center">购物车({{ cartLength }})</span>
    </nav-bar>

    <b-scroll :probe-type="3" class="cart-scrollContent" ref="bsScroll">
      <!-- 购物车内商品 -->
      <cart-list :cartList="cartList" />
    </b-scroll>

    <!-- 结账支付 -->
    <cart-pay />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar.vue";
import cartList from "./childComp/cartList";
import cartPay from "./childComp/cartPay";
//滚动标签
import BScroll from "components/content/scroll/BScroll.vue";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      listenerRefresh: null, //刷新监听
    };
  },
  components: {
    NavBar,
    cartList,
    cartPay,
    BScroll,
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
  //重新计算高度
  activated() {
    this.$refs.bsScroll && this.$refs.bsScroll.refresh();
  },
};
</script>

<style scoped>
.shop-cart {
  position: relative;
  height: 100vh; /*视口高度：100vh相当于100% */
}
.shop-car-navbar {
  background-color: var(--color-high-text);
  color: white;
}
.cart-scrollContent {
  height: calc(100% - 137px);
  overflow: hidden;
}
</style>