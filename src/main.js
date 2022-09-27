import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store'
import VueLazyload from 'vue-lazyload'
import fastClick from "fastclick"

fastClick.attach(document.body)

Vue.config.productionTip = false

//添加事件总线 用于监听总线事件
Vue.prototype.$bus = new Vue();

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("./assets/img/common/error.webp"),
  loading: require("./assets/img/common/loading.webp"),
  attempt: 1
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
