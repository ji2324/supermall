const getters = {
    cartLength(state) {
        return state.shopCartList.length;
    },
    cartList(state) {
        return state.shopCartList;
    }
}
export default getters;