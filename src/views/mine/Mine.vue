<template>
  <div class="mine">
    <!-- 标题导航栏 -->
    <nav-bar class="mine-navbar">
      <span slot="center">我的档案</span>
    </nav-bar>
    <mine-info />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar.vue";
import MineInfo from "./childComp/MineInfo";
export default {
  components: {
    NavBar,
    MineInfo,
  },
};
</script>

<style scoped>
.mine-navbar {
  background-color: var(--color-high-text);
  color: white;
  font-weight: 700;
}
</style>