<template>
  <div class="cart-toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
    },
  },
  data() {
    return {
      isShow: false,
      showTime: 3000,
    };
  },
  methods: {
    close() {
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, this.showTime);
    },
  },
};
</script>

<style scoped>
.cart-toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  border-radius: 5px;
}
</style>