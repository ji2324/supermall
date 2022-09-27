<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.price }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="promotion">{{ goods.discount }}</span>
    </div>
    <div class="info-market">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-other">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.base-info {
  margin-top: 15px;
  padding: 0px 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.info-price .o-price {
  padding: 0px 5px;
  font-size: 13px;
  text-decoration: line-through;
}

.info-price .promotion {
  font-size: 12px;
  background-color: var(--color-high-text);
  color: white;
  position: relative;
  top: -5px;
  border-radius: 8px;
  padding: 2px 5px;
}

.info-market {
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  line-height: 30px;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-other {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  font-size: 13px;
  color: #333;
  height: 60px;
}

.info-other img {
  height: 14px;
  width: 14px;
  position: relative;
  top: 2px;
}
</style>