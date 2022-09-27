//导入路由对象
import Vue from "vue";
import VueRouter from "vue-router";


//调用
Vue.use(VueRouter)

const Category = () => import('../views/category/Category.vue');
const Main = () => import('../views/main/Main.vue');
const Mine = () => import('../views/mine/Mine.vue');
const Shopcar = () => import('../views/shopcar/ShopCar.vue');
const Detail = () => import('../views/detail/Detail.vue')

const routes = [
    { path: '/', redirect: '/main' },
    { path: '/category', component: Category },
    { path: '/main', component: Main },
    { path: '/mine', component: Mine },
    { path: '/shopcar', component: Shopcar },
    { path: '/detail', component: Detail }
]

const router = new VueRouter({
    //设置路由映射
    routes,
    //设置导航模式为h5中的history
    mode: 'history',
})


export default router