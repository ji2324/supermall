//基础商品信息传递赋值
export class Goods {
    constructor(itemInfo, columns, shopInfo) {
        this.iid = itemInfo.iid;
        this.desc = itemInfo.desc;
        this.realPrice = itemInfo.lowNowPrice;
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;

        this.columns = columns;

        this.services = shopInfo.services;
    }
}
//商铺信息传递赋值
export class Shop {
    constructor(shopInfo) {
        this.name = shopInfo.name;
        this.logo = shopInfo.shopLogo;
        this.cSells = shopInfo.cSells;
        this.cGoods = shopInfo.cGoods;

        this.score = shopInfo.score;
    }
}
//商品参数信息传递赋值
export class Param {
    constructor(info, rule) {
        this.set = info.set;
        this.table = rule.tables[0];
    }
}