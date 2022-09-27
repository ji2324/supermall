import BackTop from "components/content/backTop/BackTop";

export const BackToTop = {
    components: {
        BackTop,
    },
    data() {
        return {
            isShowBackTop: false, //回到顶部按钮显示
        }
    },
    methods: {
        //回到顶部
        goBackTop() {
            this.$refs.bsScroll.bs && this.$refs.bsScroll.bs.scrollTo(0, -1, 300);
        },
    }
}