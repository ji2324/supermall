module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'views': '@/views',
                'network': "@/network",
                'router': "@/router",
                'store': "@/store",
                'assets': "@/assets",
                'common': "@/common",
                'components': "@/components",
            }
        }
    }
}