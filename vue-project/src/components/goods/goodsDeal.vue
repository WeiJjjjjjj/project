<template>
    <div class="goodsDeal">
        <div class="mui-card">
            <div class="mui-card-content">
                <swiper :img="img" :fullWidth="false"></swiper>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">
                <h1>{{imgMsg[0].content}}</h1>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <span>市场价:￥</span>
                    <del style="color:#ccc;">{{imgMsg[0].oldPrice}}</del>
                    <span style="marginLeft:10px;color:red;">销售价：￥{{imgMsg[0].newPrice}}</span>
                    <br />
                    <div class="number">
                        <span>购买数量：</span>
                        <numBox @getCount="getCount" :max="imgMsg[0].piece"></numBox>
                    </div>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="ballShow">加入购物车</mt-button>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">
                <h1>商品参数</h1>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{imgMsg[0].picNumber}}</p>
                    <p>商品库存：{{imgMsg[0].piece}}</p>
                    <p>上架时间：{{imgMsg[0].getTime}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="intro">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="comment">商品评论</mt-button>
            </div>
        </div>
        <transition>
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
    </div>
</template>

<script>
import swiper from "../comment/swiper.vue";
import numBox from "../comment/numBox.vue";
import { createNamespacedHelpers } from "vuex";
const goods = createNamespacedHelpers("goods");
export default {
    data() {
        return {
            imgContent: [
                {
                    id: 1,
                    content: "小米 红米Redmi Note7 幻彩渐变AI双摄 4GB+64GB",
                    src:
                        "https://m.360buyimg.com/babel/jfs/t11266/172/3136897597/311385/898550cb/5ce41430N7bb10f75.jpg!q70.jpg",
                    newPrice: "1199",
                    oldPrice: "1399",
                    piece: 350,
                    picNumber: "SD2932214404",
                    getTime: "2018-9-10 22:21:10"
                },
                {
                    id: 2,
                    content: "荣耀V20 游戏手机 麒麟980芯片 魅眼全视屏",
                    src:
                        "https://m.360buyimg.com/babel/jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg!q70.jpg",
                    newPrice: "2399",
                    oldPrice: "2599",
                    piece: 300,
                    picNumber: "SD2932214404",
                    getTime: "2018-9-10 22:21:10"
                },
                {
                    id: 3,
                    content: "荣耀20 4800万超广角AI四摄 3200W美颜自拍",
                    src:
                        "https://m.360buyimg.com/babel/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg!q70.jpg",
                    newPrice: "2699",
                    oldPrice: "2899",
                    piece: 400,
                    picNumber: "SD2932214404",
                    getTime: "2018-9-10 22:21:10"
                },
                {
                    id: 4,
                    content: "ROG电竞游戏手机 8GB+128GB 黑色 骁龙845",
                    src:
                        "https://m.360buyimg.com/babel/jfs/t1/1282/31/575/220450/5b91f82aE751fb7cd/ee4ad730a6db5faa.jpg!q70.jpg",
                    newPrice: "5999",
                    oldPrice: "6599",
                    piece: 450,
                    picNumber: "SD2932214404",
                    getTime: "2018-9-10 22:21:10"
                },
                {
                    id: 5,
                    content: "小米9 4800万超广角三摄 6GB+128GB全息幻彩蓝",
                    src:
                        "https://m.360buyimg.com/babel/jfs/t1/20934/9/14668/305219/5caac06cEb41f2374/a57323b77d9c53e5.jpg!q70.jpg",
                    newPrice: "2799",
                    oldPrice: "2999",
                    piece: 200,
                    picNumber: "SD2932214404",
                    getTime: "2018-9-10 22:21:10"
                }
            ],
            imgList: [
                {
                    id: 1,
                    img: [
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t11266/172/3136897597/311385/898550cb/5ce41430N7bb10f75.jpg!q70.jpg"
                        },
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t11266/172/3136897597/311385/898550cb/5ce41430N7bb10f75.jpg!q70.jpg"
                        },
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t11266/172/3136897597/311385/898550cb/5ce41430N7bb10f75.jpg!q70.jpg"
                        }
                    ]
                },
                {
                    id: 2,
                    img: [
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg!q70.jpg"
                        },
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg!q70.jpg"
                        },
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg!q70.jpg"
                        }
                    ]
                },
                {
                    id: 3,
                    img: [
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg!q70.jpg"
                        },
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg!q70.jpg"
                        },
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg!q70.jpg"
                        }
                    ]
                },
                {
                    id: 4,
                    img: [
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/1282/31/575/220450/5b91f82aE751fb7cd/ee4ad730a6db5faa.jpg!q70.jpg"
                        },
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/1282/31/575/220450/5b91f82aE751fb7cd/ee4ad730a6db5faa.jpg!q70.jpg"
                        },
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/1282/31/575/220450/5b91f82aE751fb7cd/ee4ad730a6db5faa.jpg!q70.jpg"
                        }
                    ]
                },
                {
                    id: 5,
                    img: [
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/20934/9/14668/305219/5caac06cEb41f2374/a57323b77d9c53e5.jpg!q70.jpg"
                        },
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/20934/9/14668/305219/5caac06cEb41f2374/a57323b77d9c53e5.jpg!q70.jpg"
                        },
                        {
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/20934/9/14668/305219/5caac06cEb41f2374/a57323b77d9c53e5.jpg!q70.jpg"
                        }
                    ]
                }
            ],
            img: [],
            imgMsg: [],
            id: this.$route.params.id,
            autoWidth: true,
            ballFlag: false,
            selectedCount: 1
        };
    },
    methods: {
        getimg() {
            this.img = this.imgList.filter(
                item => item.id === Number(this.id)
            )[0].img;
        },
        getImgMsg() {
            this.imgMsg = this.imgContent.filter(
                item => item.id === Number(this.id)
            );
        },
        intro() {
            this.$router.push({
                name: "goodsDesc",
                params: {
                    id: this.id
                }
            });
        },
        comment() {
            this.$router.push({
                name: "goodsComment",
                params: {
                    id: this.id
                }
            });
        },
        getCount(count) {
            this.selectedCount = count;
            // console.log(this.selectedCount);
        },
        ballShow() {
            this.ballFlag = !this.ballFlag;
            // 要传过去的数据
            // src,content,id,newPrice,数量
            let goodsInfo = {
                content: this.imgMsg[0].content,
                src: this.imgMsg[0].src,
                id: this.imgMsg[0].id,
                newPrice: this.imgMsg[0].newPrice,
                selectedCount: this.selectedCount,
                select: true
            };
            this.ADD_TOCAR(goodsInfo);
            console.log(this.getallCount);
        },
        ...goods.mapActions(["ADD_TOCAR"]),
        ballRun() {
            // beforeEnter(el) {
            //     el.style.transform = "translate(0, 0)";
            // },
            // enter(el, done) {
            //     el.offsetWidth;
            //     // 小球动画优化思路：
            //     // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
            //     // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
            //     // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
            //     // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
            //     // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()
            //     // 获取小球的 在页面中的位置
            //     const ballPosition = this.$refs.ball.getBoundingClientRect();
            //     // 获取 徽标 在页面中的位置
            //     const badgePosition = document
            //         .getElementById("badge")
            //         .getBoundingClientRect();
            //     const xDist = badgePosition.left - ballPosition.left;
            //     const yDist = badgePosition.top - ballPosition.top;
            //     el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            //     el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
            //     done();
            // },
            // afterEnter(el) {
            //     this.ballFlag = !this.ballFlag;
            // }
        }
    },
    created() {
        this.getimg();
        this.getImgMsg();
        this.getCount();
        console.log(this.imgMsg);
    },
    components: {
        swiper,
        numBox
    },
    computed: {
        ...goods.mapGetters(["getallCount"])
    }
};
</script>

<style lang="less" scoped>
.goodsDeal {
    background-color: #ccc;
    overflow: hidden;
    padding-bottom: 50px;
    position: relative;
    .ball {
        position: absolute;
        top: 326px;
        left: 148px;
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        z-index: 100;
    }
    h1 {
        font-size: 16px;
        color: red;
    }
}
.mui-card-content-inner {
    span {
        color: #777;
        font-weight: 600;
    }
    .number {
        margin: 15px 0;
        display: flex;
        align-items: center;
    }
}
.mui-card-footer {
    flex: none;
    display: block;
    button {
        margin: 10px 0;
    }
}
</style>