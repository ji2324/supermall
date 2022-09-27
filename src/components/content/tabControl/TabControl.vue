<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(title, index) in titles"
      :key="index"
      :class="{ active: currentindex == index }"
      @click="choicetype(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentindex: 0,
    };
  },
  methods: {
    choicetype(i) {
      this.currentindex = i;
      this.$emit("changeGoodsType", i);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.active {
  color: var(--color-tint);
}

.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-high-text);
}

.tab-control-item {
  flex: 1;
}
</style>