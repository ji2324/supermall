<template>
  <div class="mine">
    <!-- 标题导航栏 -->
    <nav-bar class="mine-navbar">
      <span slot="center">我的</span>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.mine-navbar {
  background-color: #ff5777;
  color: white;
}
</style>