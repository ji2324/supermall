import * as types from "./mutations-types"
const actions = {
    addToCart(content, product) {
        return new Promise((resolve, reject) => {
            //判断商品是否存在
            let pro = content.state.shopCartList.find(p => p.iid == product.iid)
            //当商品已存在时
            if (pro) {
                //判断加入购物车的商品在购物车商品数组中的位置
                let index = content.state.shopCartList.indexOf(pro)
                content.commit(types.INCREADE_COUNT, index)
                resolve('当前商品数量+1')
            }
            else {
                //当商品不存在时，添加新的商品
                //商品数量
                product.count = 1;
                //商品选中
                product.checked = true;

                content.commit(types.ADD_NEW_PRODUCT, product)
                resolve('该商品成功加入购物车')
            }
        })
    }
}
export default actions