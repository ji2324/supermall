import { requestaxios } from "network/request";

export function getGoodsImages(iid) {
    return requestaxios({
        url: "/detail",
        method: "get",
        params: {
            iid
        }
    })
}
export function getGoodsList() {
    return requestaxios({
        url: "/recommend",
        method: "get",
    })
}