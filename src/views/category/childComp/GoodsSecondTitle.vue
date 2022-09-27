<template>
  <div class="item-list">
    <grid-view :cols="3" :lineSpace="15" :v-margin="20">
      <div class="item" v-for="(item, index) in subcategory" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
          <div>{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/content/gridView/GridView";

export default {
  components: {
    GridView,
  },
  props: {
    subcategory: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.item {
  font-size: 12px;
  text-align: center;
}
.item img {
  width: 80%;
}
.item > a > div {
  margin-top: 15px;
}
</style>