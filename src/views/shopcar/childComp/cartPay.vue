<template>
  <div class="shop-cart-pay">
    <div class="all-select">
      <cart-select
        class="checked-button"
        :is-checked="checkedAll"
        @unchecked="allChecked"
      />
      <div>全选</div>
    </div>
    <div class="all-goods-price">合计:￥{{ totalPay }}</div>
    <div class="goods-pay">去计算（{{ shopCount }}）</div>
  </div>
</template>

<script>
import cartSelect from "./cartSelect";

import { mapGetters } from "vuex";
export default {
  components: {
    cartSelect,
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
    totalPay() {
      let totalPrice = this.cartList
        .filter((m) => m.checked)
        .reduce((total, now) => {
          return total + now.price * now.count;
        }, 0)
        .toFixed(2);

      return totalPrice;
    },
    checkedAll: {
      get() {
        return this.cartList.find((c) => c.checked == false) == undefined;
      },
      set() {},
    },
    shopCount() {
      let sCount = this.cartList
        .filter((m) => m.checked)
        .reduce((total, now) => {
          return total + now.count;
        }, 0);
      return sCount;
    },
  },
  methods: {
    //全选按钮事件
    allChecked() {
      if (!this.cartList.find((c) => c.checked == false)) {
        this.checkedAll = false;
        this.cartList.forEach((m) => {
          m.checked = false;
        });
      } else {
        this.checkedAll = true;
        this.cartList.forEach((m) => {
          m.checked = true;
        });
      }
    },
  },
};
</script>

<style scoped>
.shop-cart-pay {
  width: 100%;
  height: 44px;
  line-height: 44px;
  position: fixed;
  bottom: 49px;
  left: 0px;
  right: 0px;
  background-color: #eee;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  color: #888;
  font-size: 14px;
  display: flex;
}
.checked-button {
  margin-right: 5px;
}
.all-select {
  display: flex;
  align-items: center;
  padding: 10px;
}
.all-goods-price {
  color: #666;
  font-size: 16px;
  margin-left: 15px;
}
.goods-pay {
  color: #fff;
  width: 100px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: orangered;
  position: absolute;
  right: 0px;
}
</style>