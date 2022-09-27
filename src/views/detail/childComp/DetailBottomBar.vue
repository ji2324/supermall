<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>
        <i class="icon service"></i>
        <span class="txt">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="txt">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="txt">收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="car" @click="addGoodsToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addGoodsToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 58px;
  text-align: center;
  background-color: #fff;
  display: flex;
  z-index: 1000;
}
.bar-left {
  flex: 1;
  display: flex;
  justify-content: space-around;
  font-size: 13px;
}
.icon {
  margin-top: 10px;
  display: block;
  width: 22px;
  height: 22px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  position: relative;
  left: 2px;
}
.service {
  background-position: 0px -52px;
}
.shop {
  background-position: 0px -98px;
}
.bar-right {
  flex: 1;
  display: flex;
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}
.car {
  background-color: yellow;
  color: #333;
  flex: 1;
}
.buy {
  background-color: #f69;
  flex: 1;
}
</style>