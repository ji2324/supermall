<template>
  <div class="goods-item">
    <img v-lazy="loadImg" @load="imgLoad" @click="getGoodsiid(goodsInfo.iid)" />
    <!-- :src="goodsInfo.show ? goodsInfo.show.img : goodsInfo.image" -->
    <div class="goods-info">
      <p class="title">{{ goodsInfo.title }}</p>
      <span class="price">{{ goodsInfo.price }}</span>
      <span class="collect">{{ goodsInfo.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    loadImg() {
      return (
        this.goodsInfo.img || this.goodsInfo.image || this.goodsInfo.show.img
      );
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImgLoad");
    },
    getGoodsiid(iid) {
      this.$router.push({
        path: "/detail",
        query: {
          iid,
        },
      });
    },
  },
};
</script>

<style scoped>
.goods-item {
  position: relative;
  padding-bottom: 40px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  /* 超过宽度自动裁剪 */
  overflow: hidden;
  /* 多余部分使用省略号 */
  text-overflow: ellipsis;
  /* 文字不换行 */
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
/* 票数标签的第一个伪子元素 */
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /* 0 0/14px 表示   background-position/background-size的形式 */
  background: url("~assets/img/common/collect.svg") 0 0/14px;
}
</style>