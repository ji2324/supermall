<template>
  <div class="category">
    <!-- 标题导航栏 -->
    <nav-bar class="category-navbar">
      <span slot="center">商品分类</span>
    </nav-bar>

    <!-- 页面内容 -->
    <div class="category-content">
      <!-- 左侧标题导航栏 -->
      <goods-type
        :category="categories"
        class="category-type"
        @chiocedTitle="chiocedTitle"
      />
      <!-- 右侧商品导航列表 -->
      <b-scroll class="category-scroll" ref="bsScroll">
        <goods-second-title :subcategory="subcategory" />
        <div class="list">
          <tab-control
            :titles="['流行', '新款', '销量']"
            @changeGoodsType="changeGoods"
          />
          <goods-list :goodsItem="getGoodsList" />
        </div>
      </b-scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar.vue";
import BScroll from "components/content/scroll/BScroll.vue";
import GoodsType from "./childComp/GoodsType";
import GoodsSecondTitle from "./childComp/GoodsSecondTitle";
import GoodsList from "components/content/goods/GoodsList";

import TabControl from "components/content/tabControl/TabControl";
// 导入商品标题及商品列表
import {
  getAllCategory,
  getSubcategory,
  getGoodsByCategory,
} from "network/category";
export default {
  components: {
    NavBar,
    BScroll,
    GoodsType,
    GoodsSecondTitle,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      categories: [], //商品标题
      subcategory: [], //商品列表
      goods: {
        pop: [],
        new: [],
        sell: [],
      },
      currentType: "pop",
    };
  },
  computed: {
    getGoodsList() {
      return this.goods[this.currentType];
    },
  },
  created() {
    this.getAllCategoryList();
  },
  methods: {
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
    },
    getAllCategoryList() {
      getAllCategory().then((res) => {
        //传入分类界面的数据
        this.categories = res.data.category.list;
        //console.log(this.categories);
        // 给商品列表赋初始值
        this.chiocedTitle(0);
      });
    },
    // 根据点击商品标题切换商品列表
    chiocedTitle(i) {
      let key = this.categories[i].maitKey;
      console.log(this.categories[i]);
      let minikey = this.categories[i].miniWallkey;
      console.log(this.minikey);

      getSubcategory(key).then((res) => {
        this.subcategory = res.data.list;
        console.log(this.subcategory);
      });
      this.getGoodsByCategory(minikey, "pop");
      this.getGoodsByCategory(minikey, "new");
      this.getGoodsByCategory(minikey, "sell");
    },
    //根据类别加载商品数据
    getGoodsByCategory(minikey, type) {
      //根据类别和页码进行网络请求
      getGoodsByCategory(minikey, type).then((res) => {
        this.goods[type] = res;
      });
    },
  },
  updated() {
    this.$refs.bsScroll && this.$refs.bsScroll.refresh();
  },
};
</script>

<style scoped>
.category-navbar {
  background-color: var(--color-high-text);
  color: white;
  font-weight: 700;
  z-index: 9;
}
.category-content {
  position: absolute;
  right: 0px;
  left: 0px;
  top: 44px;
  bottom: 49px;
  display: flex;
  overflow: hidden;
}
.category-type {
  width: 100px;
  height: 100%;
  background-color: #f6f6f6;
  box-sizing: border-box;
}
.category-scroll {
  height: calc(100% -49px);
  overflow: hidden;
  flex: 1;
}
</style>