<template>
  <div class="main">
    <!-- 导航栏 -->
    <nav-bar class="main-navbar">
      <span slot="center">小码哥商城</span>
    </nav-bar>

    <!-- 风格选择 -->
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @changeGoodsType="changeGoods"
      v-show="isShowStyleTitle"
      ref="topTab"
    />
    <!-- 滑动 -->
    <b-scroll
      :probe-type="3"
      :pull-up-load="true"
      class="main-scrollContent"
      @pullingUp="loadMore"
      @contentScroll="contentScroll"
      ref="bsScroll"
    >
      <!-- 轮播图 -->
      <main-swiper
        :banners="banners"
        class="main-swiper"
        @loadImage="imageLoaded"
      />
      <!-- 主页推荐 -->
      <main-recommends :recommends="recommends" />
      <!-- 流行风格 -->
      <main-feature />
      <!-- 风格选择 -->
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @changeGoodsType="changeGoods"
        v-show="!isShowStyleTitle"
        ref="contentTab"
      />
      <!-- 商品展示 -->
      <goods-list :goodsItem="getGoodsList" />
    </b-scroll>
    <!-- 回到顶部 -->
    <back-top v-show="isShowBackTop" @click.native="goBackTop" />
  </div>
</template>

<script>
//子功能导入包
import NavBar from "components/common/navbar/Navbar.vue";
import MainSwiper from "./childComp/MainSwiper.vue";
import MainRecommends from "./childComp/MainRecommends.vue";
import MainFeature from "./childComp/MainFeature.vue";
import GoodsList from "components/content/goods/GoodsList";
//导入
import TabControl from "components/content/tabControl/TabControl";

import BScroll from "components/content/scroll/BScroll";

//导入首页数据处理
import { getMainMultiData, getMainGoodList } from "network/main";

//导入混入的回到顶部图标
import { BackToTop } from "common/mixin";
//清除抖动
import { debounce } from "common/utils";

export default {
  components: {
    NavBar,
    MainSwiper,
    MainRecommends,
    MainFeature,
    TabControl,
    GoodsList,
    BScroll,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: "pop",
      isShowStyleTitle: false, //风格标题显示
      heightToTop: 0, //风格导航栏到顶部的距离
      listenerRefresh: null, //监听刷新
    };
  },
  //混入技术
  mixins: [BackToTop],
  created() {
    this.getMainMultiDataList();

    this.getMainGoodsByType("pop");
    this.getMainGoodsByType("new");
    this.getMainGoodsByType("sell");
  },
  methods: {
    getMainMultiDataList() {
      getMainMultiData().then((res) => {
        // console.log(res);
        //轮播图数据
        this.banners = res.data.banner.list;
        // console.log(this.banners);
        //推荐数据
        this.recommends = res.data.recommend.list;
      });
    },
    //根据类别加载商品数据
    getMainGoodsByType(type) {
      //获取页码
      let pageNum = this.goods[type].page;
      //根据类别和页码进行网络请求
      getMainGoodList(type, pageNum).then((res) => {
        //获取数据后 修改对应类别商品数据
        //添加数据
        this.goods[type].list.push(...res.data.list);
        //下一次请求 页码加一
        this.goods[type].page++;
      });
    },
    //改变风格类型衣服列表
    changeGoods(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.contentTab.currentindex = index;
      this.$refs.topTab.currentindex = index;
    },
    loadMore() {
      this.getMainGoodsByType(this.currentType);

      this.$refs.bsScroll.finishPullUp();
    },
    //监听滚动事件
    contentScroll(y) {
      this.isShowBackTop = y <= -1000;
      // console.log(heightToTop);
      if (this.heightToTop - 44 <= -y) {
        this.isShowStyleTitle = true;
      } else {
        this.isShowStyleTitle = false;
      }
    },
    imageLoaded() {
      //风格导航栏到顶部的距离
      this.heightToTop = this.$refs.contentTab.$el.offsetTop;
    },
  },
  computed: {
    getGoodsList() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    let listener = () => {
      this.$refs.bsScroll && this.$refs.bsScroll.refresh();
      console.log("加载更多");
    };
    //监听总线事件
    this.listenerRefresh = debounce(listener, 300);
    this.$bus.$on("itemImgLoad", this.listenerRefresh);
  },
  //移除监听
  deactivated() {
    this.$bus.$off("itemImgLoad", this.listenerRefresh);
  },
};
</script>

<style>
.main {
  position: relative;
  height: 100vh; /*视口高度：100vh相当于100% */
}
.main-navbar {
  background-color: var(--color-tint);
  color: white;
}
/* .main-swiper {
  margin-top: 44px;
} */

/* 没有bsroll插件时的粘性定位才有效果 */
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */

/* 方法1 */
/* .main-scrollContent {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
} */

/* 方法2 */
.main-scrollContent {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>