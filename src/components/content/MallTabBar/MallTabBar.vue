<template>
  <tab-bar>
    <tab-bar-item path="/main">
      <img slot="item-normal-img" src="~assets/img/tabbar/home.svg" />
      <img slot="item-active-img" src="~assets/img/tabbar/home_active.svg" />
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-normal-img" src="~assets/img/tabbar/profile.svg" />
      <img slot="item-active-img" src="~assets/img/tabbar/profile_active.svg" />
      <span slot="item-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/shopcar">
      <img slot="item-normal-img" src="~assets/img/tabbar/home.svg" />
      <img slot="item-active-img" src="~assets/img/tabbar/home_active.svg" />
      <span slot="item-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img slot="item-normal-img" src="~assets/img/tabbar/profile.svg" />
      <img slot="item-active-img" src="~assets/img/tabbar/profile_active.svg" />
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabber/TabBar.vue";
import TabBarItem from "components/common/tabber/TabBarItem.vue";
export default {
  components: {
    TabBarItem,
    TabBar,
  },
};
</script>

<style>
</style>