<template>
  <div class="goods-desc" v-if="Object.keys(detailInfo).length !== 0">
    <div class="goods-intro">
      <div class="start"></div>
      <div class="content">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="goods-show">
      <div class="key">{{ detailInfo.detailImage[0].key }}</div>
      <img
        :src="item"
        @load="imgLoad"
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImgLoad");
    },
  },
};
</script>

<style scoped>
.goods-desc {
  padding: 20px 0px;
  border-bottom: 5px solid #f2f5f8;
}
.goods-intro {
  padding: 0px 15px;
}
.goods-intro .content {
  padding: 15px 0px;
  font-size: 14px;
}

.goods-intro .start,
.goods-intro .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.goods-intro .start::before,
.goods-intro .end::after {
  content: "";
  width: 5px;
  height: 5px;
  background-color: #333;
  position: absolute;
  bottom: 0px;
}
.goods-intro .end {
  float: right;
}
.goods-intro .end::after {
  position: absolute;
  right: 0px;
}
.goods-show .key {
  margin: 10px 0px 10px 15px;
  font-size: 15px;
  color: #333;
}
.goods-show img {
  width: 100%;
}
</style>