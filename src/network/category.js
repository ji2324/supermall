import { requestaxios } from "network/request";

export function getAllCategory() {
    return requestaxios({
        url: "/category",
        method: "get",
    })
}

export function getSubcategory(maitKey) {
    return requestaxios({
        url: "/subcategory",
        params: {
            maitKey
        }
    })
}

export function getGoodsByCategory(miniWallkey, type) {
    return requestaxios({
        url: "/subcategory/detail",
        params: {
            miniWallkey, type
        }
    })
}