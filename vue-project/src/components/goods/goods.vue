<template>
    <div>
        <div class="weap">
            <div
                class="goodsItem"
                v-for="(item,index) in showList"
                :key="index"
                @click="mobileDeal(item.id)"
            >
                <img v-lazy="item.src" alt />
                <div class="prise">
                    <h1>{{item.content}}</h1>
                    <div class="main">
                        <div class="header1">
                            <span>￥{{item.newPrice}}</span>
                            <span>￥{{item.oldPrice}}</span>
                        </div>
                        <div class="footer">
                            <span>热卖中</span>
                            <span>剩余{{item.piece}}件</span>
                        </div>
                    </div>
                </div>
            </div>
            <mt-button class="button" type="danger" size="large" @click="loadMore">加载更多</mt-button>
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data() {
        return {
            list: [
                {
                    page: 1,
                    msg: [
                        {
                            id: 1,
                            content:
                                "小米 红米Redmi Note7 幻彩渐变AI双摄 4GB+64GB",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t11266/172/3136897597/311385/898550cb/5ce41430N7bb10f75.jpg!q70.jpg",
                            newPrice: "1199",
                            oldPrice: "1399",
                            piece: 350
                        },
                        {
                            id: 2,
                            content: "荣耀V20 游戏手机 麒麟980芯片 魅眼全视屏",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg!q70.jpg",
                            newPrice: "2399",
                            oldPrice: "2599",
                            piece: 300
                        },
                        {
                            id: 3,
                            content: "荣耀20 4800万超广角AI四摄 3200W美颜自拍",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg!q70.jpg",
                            newPrice: "2699",
                            oldPrice: "2899",
                            piece: 400
                        },
                        {
                            id: 4,
                            content: "ROG电竞游戏手机 8GB+128GB 黑色 骁龙845",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/1282/31/575/220450/5b91f82aE751fb7cd/ee4ad730a6db5faa.jpg!q70.jpg",
                            newPrice: "5999",
                            oldPrice: "6599",
                            piece: 450
                        }
                    ]
                },
                {
                    page: 2,
                    msg: [
                        {
                            id: 2,
                            content: "荣耀V20 游戏手机 麒麟980芯片 魅眼全视屏",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg!q70.jpg",
                            newPrice: "2399",
                            oldPrice: "2599",
                            piece: 300
                        },
                        {
                            id: 3,
                            content: "荣耀20 4800万超广角AI四摄 3200W美颜自拍",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg!q70.jpg",
                            newPrice: "2699",
                            oldPrice: "2899",
                            piece: 400
                        },
                        {
                            id: 4,
                            content: "ROG电竞游戏手机 8GB+128GB 黑色 骁龙845",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/1282/31/575/220450/5b91f82aE751fb7cd/ee4ad730a6db5faa.jpg!q70.jpg",
                            newPrice: "5999",
                            oldPrice: "6599",
                            piece: 450
                        },
                        {
                            id: 5,
                            content:
                                "小米9 4800万超广角三摄 6GB+128GB全息幻彩蓝",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/20934/9/14668/305219/5caac06cEb41f2374/a57323b77d9c53e5.jpg!q70.jpg",
                            newPrice: "2799",
                            oldPrice: "2999",
                            piece: 200
                        }
                    ]
                },
                {
                    page: 3,
                    msg: [
                        {
                            id: 1,
                            content:
                                "小米 红米Redmi Note7 幻彩渐变AI双摄 4GB+64GB",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t11266/172/3136897597/311385/898550cb/5ce41430N7bb10f75.jpg!q70.jpg",
                            newPrice: "1199",
                            oldPrice: "1399",
                            piece: 350
                        },
                        {
                            id: 2,
                            content: "荣耀V20 游戏手机 麒麟980芯片 魅眼全视屏",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg!q70.jpg",
                            newPrice: "2399",
                            oldPrice: "2599",
                            piece: 300
                        },
                        {
                            id: 3,
                            content: "荣耀20 4800万超广角AI四摄 3200W美颜自拍",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg!q70.jpg",
                            newPrice: "2699",
                            oldPrice: "2899",
                            piece: 400
                        },
                        {
                            id: 4,
                            content: "ROG电竞游戏手机 8GB+128GB 黑色 骁龙845",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/1282/31/575/220450/5b91f82aE751fb7cd/ee4ad730a6db5faa.jpg!q70.jpg",
                            newPrice: "5999",
                            oldPrice: "6599",
                            piece: 450
                        }
                    ]
                },
                {
                    page: 4,
                    msg: [
                        {
                            id: 2,
                            content: "荣耀V20 游戏手机 麒麟980芯片 魅眼全视屏",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg!q70.jpg",
                            newPrice: "2399",
                            oldPrice: "2599",
                            piece: 300
                        },
                        {
                            id: 3,
                            content: "荣耀20 4800万超广角AI四摄 3200W美颜自拍",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg!q70.jpg",
                            newPrice: "2699",
                            oldPrice: "2899",
                            piece: 400
                        },
                        {
                            id: 4,
                            content: "ROG电竞游戏手机 8GB+128GB 黑色 骁龙845",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/1282/31/575/220450/5b91f82aE751fb7cd/ee4ad730a6db5faa.jpg!q70.jpg",
                            newPrice: "5999",
                            oldPrice: "6599",
                            piece: 450
                        },
                        {
                            id: 5,
                            content:
                                "小米9 4800万超广角三摄 6GB+128GB全息幻彩蓝",
                            src:
                                "https://m.360buyimg.com/babel/jfs/t1/20934/9/14668/305219/5caac06cEb41f2374/a57323b77d9c53e5.jpg!q70.jpg",
                            newPrice: "2799",
                            oldPrice: "2999",
                            piece: 200
                        }
                    ]
                }
            ],
            showList: [],
            page: 1
        };
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.showList = this.list.filter(
                item => item.page === this.page
            )[0].msg;
        },
        loadMore() {
            this.page++;
            if (this.page > this.list.length) {
                Toast("没有更多了");
            } else {
                this.showList = this.showList.concat(
                    this.list.filter(item => item.page === this.page)[0].msg
                );
            }
        },
        mobileDeal(id) {
            // console.log(id);
            this.$router.push({
                name: "goodsDeal",
                params: { id: id }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.weap {
    padding: 10px 10px 50px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 283px;
    z-index: -1;
    .button {
        margin: 20px 0;
    }
    .goodsItem {
        width: 49%;
        // border: 1px solid black;
        box-shadow: 0 0 8px #ccc;
        margin: 10px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
            width: 100%;
        }
        image[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .prise {
            h1 {
                font-size: 16px;
                font-weight: bold;
                padding: 5px 0;
            }
            .main {
                background-color: #eae8eb;
                height: 45px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                // margin: 2px;
                .header1 {
                    padding: 0 5px;
                    span:nth-child(1) {
                        color: red;
                        font-weight: 600;
                    }
                    span:nth-child(2) {
                        color: #aaa;
                        font-weight: 400;
                        margin-left: 10px;
                        text-decoration: line-through;
                    }
                }
                .footer {
                    padding: 0 7px;
                    display: flex;
                    justify-content: space-between;
                    span {
                        font-size: 14px;
                        color: #aaa;
                    }
                }
            }
        }
    }
}
</style>