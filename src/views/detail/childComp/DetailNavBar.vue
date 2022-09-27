<template>
  <nav-bar class="nav-top">
    <img slot="left" @click="goBack" src="~assets/img/common/back.svg" />
    <div slot="center" class="shopcar-navbar-center">
      <div
        v-for="(item, index) in titles"
        :key="index"
        :class="{ active: currentIndex == index }"
        @click="choicetype(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/Navbar.vue";
export default {
  components: {
    NavBar,
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  methods: {
    choicetype(i) {
      this.currentIndex = i;
      this.$emit("navClick", i);
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style>
.nav-top {
  background-color: #fff;
}
.nav-top img {
  position: relative;
  top: 5px;
}
.shopcar-navbar-center {
  display: flex;
  margin-top: 0px;
  padding-left: 0px;
}
.shopcar-navbar-center > div {
  flex: 1;
  list-style: none;
}
.active {
  color: var(--color-high-text);
}
</style>