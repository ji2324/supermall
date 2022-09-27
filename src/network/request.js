import axios from 'axios'

//3、promise传值
export function requestaxios(config) {
    return new Promise((resolve, reject) => {
        const axios1 = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/hy66',
            timeout: 2000,
        })

        //拦截请求
        axios1.interceptors.request.use(config => {
            // console.log("对于请求的拦截");
            return config
        })
        //拦截响应
        axios1.interceptors.response.use(res => {
            // console.log("对于响应的拦截过滤");
            return res.data
        })

        axios1(config).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err)
        })
    })
}