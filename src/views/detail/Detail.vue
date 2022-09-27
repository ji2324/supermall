<template>
  <div class="detail">
    <!-- 商品详情页导航栏 -->
    <detail-nav-bar
      @navClick="navClick"
      ref="myScroll"
      :current-index="currentIndex"
    />
    <b-scroll
      :probe-type="3"
      class="main-scrollContent"
      @contentScroll="contentScroll"
      ref="bsScroll"
    >
      <!-- <p>{{ $store.state.shopCartList }}</p> -->
      <!-- 商品详情页轮播图 -->
      <detail-swiper :images="styleImage" class="detail-swiper" />
      <!-- 商品基础信息 -->
      <detail-base-info :goods="baseGoods" />
      <!-- 商品所在店铺信息 -->
      <detail-shop-info :shop="shop" />
      <!-- 商品详情展示 -->
      <detail-goods-info :detailInfo="detailInfo" />
      <!-- 商品参数 -->
      <detail-goods-param :paramInfo="goodsParam" ref="params" />
      <!-- 用户评论 -->
      <detail-comment :comment="commentInfo" ref="comment" />
      <!-- 推荐商品 -->
      <goods-list :goodsItem="goodsList" ref="recommend" />
    </b-scroll>
    <!-- 底部购买加入购物车 -->
    <detail-bottom-bar @addToCart="addToCart" />
    <!-- 回到顶部 -->
    <back-top v-show="isShowBackTop" @click.native="goBackTop" />
    <!-- 吐司显示加入购物车 -->
    <toast :message="message" ref="toast" />
  </div>
</template>

<script>
import DetailNavBar from "./childComp/DetailNavBar.vue";
import DetailSwiper from "./childComp/DetailSwiper.vue";
import DetailBaseInfo from "./childComp/DetailBaseInfo.vue";
import DetailShopInfo from "./childComp/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComp/DetailGoodsInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import DetailGoodsParam from "./childComp/DetailGoodsParam.vue";
import DetailComment from "./childComp/DetailComment.vue";
import DetailBottomBar from "./childComp/DetailBottomBar.vue";
import Toast from "components/content/toast/Toast";
//滚动标签
import BScroll from "components/content/scroll/BScroll.vue";

import { getGoodsImages, getGoodsList } from "network/detail.js";
//界面信息传入
import { Goods, Shop, Param } from "common/models.js";
//导入混入的回到顶部图标
import { BackToTop } from "common/mixin";
//清除抖动
import { debounce } from "common/utils";
import { mapActions } from "vuex";

export default {
  //keepAlive赋名排除
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    GoodsList,
    DetailGoodsParam,
    DetailComment,
    BScroll,
    DetailBottomBar,
    Toast,
  },
  data() {
    return {
      styleImage: [],
      baseGoods: {},
      shop: {},
      detailInfo: {},
      goodsList: [],
      goodsParam: {},
      commentInfo: {},
      listenerRefresh: null, //监听刷新
      themeOffSetTopArr: [], //导航栏跳转位置数组
      currentIndex: 0,
      message: "",
    };
  },
  //混入技术
  mixins: [BackToTop],
  created() {
    this.getGoodsImages();
    this.getGoodsList();
    //监听总线事件,刷新高度
    let listener = () => {
      this.$refs.bsScroll && this.$refs.bsScroll.refresh();
      console.log("加载内容");

      //因为会多次执行所以先清空数字值再重新赋值
      //给数组赋值到导航跳转的各个内容位置到顶部的距离
      this.themeOffSetTopArr = [];
      this.themeOffSetTopArr.push(0);
      this.themeOffSetTopArr.push(-this.$refs.params.$el.offsetTop + 44);
      this.themeOffSetTopArr.push(-this.$refs.comment.$el.offsetTop + 44);
      this.themeOffSetTopArr.push(-this.$refs.recommend.$el.offsetTop + 44);
      this.themeOffSetTopArr.push(-Number.MAX_VALUE);
    };
    //监听总线事件
    this.listenerRefresh = debounce(listener, 300);
    this.$bus.$on("itemImgLoad", this.listenerRefresh);
    //console.log("创建");
  },
  methods: {
    ...mapActions({
      addCart: "addToCart",
    }),
    addToCart() {
      //构造商品对象
      let product = {
        iid: this.baseGoods.iid,
        title: this.baseGoods.title,
        desc: this.baseGoods.desc,
        price: this.baseGoods.realPrice,
        img: this.styleImage[0],
      };

      //添加产品到购物车
      // this.$store.dispatch("addToCart", product);
      this.addCart(product).then((res) => {
        //添加成功
        this.message = res;

        this.$refs.toast.close();
      });
    },
    //导航栏点击跳转事件
    navClick(index) {
      let pos = this.themeOffSetTopArr[index];
      this.$refs.bsScroll.bs && this.$refs.bsScroll.bs.scrollTo(0, pos, 300);
    },
    //监听滚动事件
    contentScroll(y) {
      // console.log(y);
      this.isShowBackTop = y <= -1000;

      //导航栏点击滚动效果
      for (let i = 0; i < this.themeOffSetTopArr.length; i++) {
        let star = this.themeOffSetTopArr[i];
        let end = this.themeOffSetTopArr[i + 1];
        if (star >= y && y > end) {
          this.currentIndex = i;
          break;
        }
      }
    },

    //传入商品轮播图片
    getGoodsImages() {
      getGoodsImages(this.$route.query.iid).then((res) => {
        // console.log(res);
        let result = res.result;
        this.styleImage = result.itemInfo.topImages;
        //商品基本信息
        this.baseGoods = new Goods(
          result.itemInfo,
          result.columns,
          result.shopInfo
        );
        //商家信息
        this.shop = new Shop(result.shopInfo);

        this.detailInfo = result.detailInfo;

        this.goodsParam = new Param(
          result.itemParams.info,
          result.itemParams.rule
        );
        //评论信息
        this.commentInfo = result.rate.list[0];
      });
    },
    getGoodsList() {
      getGoodsList().then((res) => {
        this.goodsList = res.data.list;
      });
    },
  },
  //取消监听
  destroyed() {
    // console.log("销毁");
    this.$bus.$off("itemImgLoad", this.listenerRefresh);
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh; /*视口高度：100vh相当于100% */
}
.detail-swiper {
  height: 300px;
}
.main-scrollContent {
  height: calc(100% - 102px);
  overflow: hidden;
}
</style>