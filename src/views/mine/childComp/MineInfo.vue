<template>
  <div class="mine-info">
    <div class="info-head">
      <div class="head-left">
        <img src="~assets/img/profile/avatar.svg" />
      </div>
      <div class="head-cneter">
        <div class="center-enter">登录/注册</div>
        <div class="center-phone">
          <img src="~assets/img/profile/phone.svg" />
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="head-right">></div>
    </div>
    <div class="info-record">
      <div class="record-money">
        <div><span class="num">0.00</span>元</div>
        <div>我的余额</div>
      </div>
      <div class="record-discounts">
        <div><span class="num">0</span>个</div>
        <div>我的优惠</div>
      </div>
      <div class="record-grade">
        <div><span class="num">0</span>分</div>
        <div>我的积分</div>
      </div>
    </div>
    <div class="info-content">
      <div class="content-message">
        <img src="~assets/img/profile/message.svg" />
        <span>我的消息</span>
      </div>
      <div class="content-grade-shopping">
        <img src="~assets/img/profile/pointer.svg" />
        <span>积分商城</span>
      </div>
      <div class="content-menber">
        <img src="~assets/img/profile/vip.svg" />
        <span>会员卡</span>
      </div>
    </div>
    <div class="info-shop">
      <div class="shop-mycart">
        <img src="~assets/img/profile/cart.svg" />
        <span>我的购物车</span>
      </div>
      <div class="shop-loading">
        <img src="~assets/img/profile/shopping.svg" />
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.info-head {
  background-color: var(--color-high-text);
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 8px 15px;
  color: white;
  font-size: 16px;
}
.head-left > img {
  width: 70px;
  height: 70px;
  margin-right: 12px;
}
.center-enter {
  padding-left: 4px;
}
.center-phone {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.center-phone > img {
  width: 25px;
  height: 30px;
  text-align: left;
}
.head-right {
  position: absolute;
  right: 15px;
}
.info-record {
  padding: 20px 20px;
  text-align: center;
  font-size: 14px;
  color: #9c8e8f;
  border-bottom: 12px solid #f2f2f2;
  display: flex;
  justify-content: space-around;
}
.num {
  color: #ff5f4c;
  font-size: 24px;
  font-weight: 700;
}
.info-content {
  border-bottom: 12px solid #f2f2f2;
}
.info-content > div,
.info-shop > div {
  color: #494d4b;
  display: flex;
  align-items: center;
}
.info-content img,
.info-shop img {
  width: 25px;
  height: 25px;
  margin-left: 15px;
}
.info-content > div > span,
.info-shop > div > span {
  border-bottom: 1px solid #f5f5f5;
  display: inline-block;
  width: 100%;
  margin-left: 10px;
  height: 40px;
  line-height: 40px;
}
</style>