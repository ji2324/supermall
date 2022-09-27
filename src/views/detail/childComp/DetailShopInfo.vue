<template>
  <div class="shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="info-title">
      <img :src="shop.logo" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="info-middle">
      <div class="info-left">
        <div class="left-sales">
          <p>{{ shop.cSells | sellsgoods }}</p>
          <p>销量</p>
        </div>
        <div class="left-goods">
          <p>{{ shop.cGoods }}</p>
          <p>宝贝数量</p>
        </div>
      </div>
      <div class="info-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td :class="['score', item.isBetter ? 'score-better' : '']">
              {{ item.score }}
            </td>
            <td>
              <span :class="['level', item.isBetter ? 'level-better' : '']">
                {{ item.isBetter ? "高" : "低" }}
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-into">
      <div class="into">进入店铺</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellsgoods(n) {
      if (n < 10000) {
        return n;
      } else {
        let sell = n / 10000;
        return sell.toFixed(1) + "万";
      }
    },
  },
};
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  line-height: 45px;
  display: flex;
  align-items: center;
}
.info-title img {
  height: 45px;
  width: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-right: 10px;
}
.info-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.info-middle > .info-left,
.info-right {
  flex: 1;
}
.info-middle > .info-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 12px;
  margin-top: 10px;
}
.info-middle > .info-right > table {
  width: 130px;
  margin-left: 30px;
}
.shop-into {
  margin-top: 15px;
  text-align: center;
}
.shop-into .into {
  width: 150px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
  font-size: 14px;
  background-color: #f2f5f8;
  margin: 0 auto;
}
.score {
  color: rgb(49, 202, 49);
}
.score-better {
  color: rgb(226, 46, 46);
}
.level {
  background-color: rgb(49, 202, 49);
  color: white;
  text-align: center;
}
.level-better {
  background-color: rgb(226, 46, 46);
  color: white;
  text-align: center;
}
</style>