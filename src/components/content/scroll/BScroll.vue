<template>
  <div id="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bs: null,
    };
  },
  mounted() {
    this.initNewBScroll();
  },
  methods: {
    refresh() {
      this.bs && this.bs.refresh();
      // console.log("刷新");
    },
    finishPullUp() {
      this.bs.finishPullUp() || this.bs;
    },
    initNewBScroll() {
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true,
      });
      if (this.probeType >= 2) {
        this.bs.on("scroll", (ps) => {
          // console.log(ps);
          //监听组件并传值
          this.$emit("contentScroll", ps.y);
        });
      }
      if (this.pullUpLoad == true) {
        this.bs.on("pullingUp", () => {
          //方便重复多次执行上拉刷新
          this.$emit("pullingUp");
        });
      }
    },
  },
};
</script>

<style>
</style>