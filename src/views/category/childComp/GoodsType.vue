<template>
  <div class="goods-type">
    <b-scroll class="category-scroll" ref="bsScroll">
      <div
        class="type-menu"
        v-for="(item, index) in category"
        :key="index"
        @click="choice(index)"
        :class="{ active: curIndex == index }"
      >
        {{ item.title }}
      </div>
    </b-scroll>
  </div>
</template>

<script>
import BScroll from "components/content/scroll/BScroll.vue";
export default {
  components: {
    BScroll,
  },
  data() {
    return {
      curIndex: 0,
    };
  },
  props: {
    category: {
      type: Array,
    },
  },
  updated() {
    this.$refs.bsScroll && this.$refs.bsScroll.refresh();
  },
  methods: {
    choice(i) {
      this.curIndex = i;
      this.$emit("chiocedTitle", i);
    },
  },
};
</script>

<style scoped>
.goods-type {
  height: 100vh;
  position: relative;
  width: 100px;
}
.type-menu {
  line-height: 45px;
  height: 45px;
  text-align: center;
}
.active {
  background-color: #fff;
  font-weight: 700;
  color: var(--color-high-text);
  border-left: 3px solid var(--color-high-text);
}
.category-scroll {
  height: calc(100%);
  overflow: hidden;
}
</style>