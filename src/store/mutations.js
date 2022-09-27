import * as types from "./mutations-types"

const mutations = {
    [types.ADD_NEW_PRODUCT](state, product) {
        //添加新的商品到购物车
        state.shopCartList.push(product);
    },
    [types.INCREADE_COUNT](state, index) {
        //根据序号获取商品，增加数量
        state.shopCartList[index].count++;
    }
}
export default mutations;