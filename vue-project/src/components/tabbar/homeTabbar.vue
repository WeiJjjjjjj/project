<template>
    <div>
        <swiper :img="img" fullWidth="true"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newslist">
                    <img src="../../libs/img/home/menu1.png" alt />
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/imgShare">
                    <img src="../../libs/img/home/menu2.png" alt />
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goods">
                    <img src="../../libs/img/home/menu3.png" alt />
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img src="../../libs/img/home/menu4.png" alt />
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img src="../../libs/img/home/menu5.png" alt />
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img src="../../libs/img/home/menu6.png" alt />
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
// import http from "@/utils/http";
import swiper from "../comment/swiper.vue";
export default {
    data() {
        return {
            img: [
                {
                    src:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564143158534&di=cfb1b3197c1420bc44dac4211bd80c00&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1712%2F124R5B11-9.jpg"
                },
                {
                    src:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564143158534&di=5f8e77682f68a4c39e8ae685dd82ef38&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1712%2F124R514R-2.jpg"
                },
                {
                    src:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564143158534&di=bad7865c45746efc865d4141f351bfaa&imgtype=0&src=http%3A%2F%2Fbaiducdn.pig66.com%2Fuploadfile%2F2017%2F0511%2F20170511114619713.jpg"
                }
            ]
        };
    },
    created() {
        this.getSwiperImg();
    },
    methods: {
        getSwiperImg() {}
    },
    components: {
        swiper: swiper
    }
};
</script>

<style lang="less" scoped>
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none !important;
}
.mui-table-view-cell {
    border: none !important;
}
.mui-table-view {
    img {
        width: 60px;
        height: 60px;
    }
}
</style>