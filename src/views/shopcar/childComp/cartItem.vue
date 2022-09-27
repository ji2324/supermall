<template>
  <div class="shop-cart-info">
    <div class="shop-select">
      <cart-select @unchecked="unchecked" :is-checked="produce.checked" />
    </div>
    <div class="shop-img">
      <img :src="produce.img" />
    </div>
    <div class="shop-item">
      <div class="item-title">{{ produce.title }}</div>
      <div class="item-desc">{{ produce.desc }}</div>
      <div class="item-info">
        <div class="price left">￥{{ produce.price }}</div>
        <div class="count right">x{{ produce.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import cartSelect from "./cartSelect";
export default {
  props: {
    produce: {
      type: Object,
    },
  },
  components: {
    cartSelect,
  },
  methods: {
    unchecked() {
      this.produce.checked = !this.produce.checked;
      console.log(this.produce.checked);
    },
  },
};
</script>

<style scoped>
.shop-cart-info {
  padding: 5px;
  border-bottom: 1px solid #ccc;
  display: flex;
  width: 100%;
}
.shop-select {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
}
.shop-img {
  padding: 5px;
}
.shop-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.shop-item {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-title,
.item-desc {
  /* 超过宽度自动裁剪 */
  overflow: hidden;
  /* 多余部分使用省略号 */
  text-overflow: ellipsis;
  /* 文字不换行 */
  white-space: nowrap;
}
.item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666;
}
.item-info {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
}
.count {
  text-align: right;
}
</style>