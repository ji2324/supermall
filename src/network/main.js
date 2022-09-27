import { requestaxios } from "network/request";

export function getMainMultiData() {
    return requestaxios({
        url: "/home/multidata",
        method: "get",
    })
}

export function getMainGoodList(type, page) {
    return requestaxios({
        url: "/home/data",
        method: "get",
        params: {
            type, page
        }
    })
}