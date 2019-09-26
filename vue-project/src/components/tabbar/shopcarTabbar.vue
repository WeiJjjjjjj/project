<template>
    <div class="shopcar">
        <div class="mui-card">
            <div class="mui-card-content">
                <div v-for="item in getCar" :key="item.id">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="getCarSelect[item.id]" @change="change(item.id)"></mt-switch>
                        <img alt :src="item.src" />
                        <div class="right">
                            <div class="header2">
                                <h1>{{item.content}}</h1>
                            </div>
                            <span class="price">单价：￥{{item.newPrice}}</span>
                            <div class="footer1">
                                <showNumBox
                                    @getCount="getCount"
                                    :num="item.selectedCount"
                                    :id="item.id"
                                ></showNumBox>
                                <a class="del" @click="delOne(item.id)">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div>
                        <p>总计（不含运费）</p>
                        <p>
                            已勾选商品
                            <span class="span">{{getallCount}}</span>件，
                            总价：
                            <span class="span">￥{{getAllMoney}}</span>
                        </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import showNumBox from "../comment/shopcarNumberBox.vue";
import { createNamespacedHelpers } from "vuex";
const goods = createNamespacedHelpers("goods");
export default {
    data() {
        return {};
    },
    methods: {
        getCount(count) {
            this.getCar.forEach(item => {
                if (item.id === count.id) {
                    item.selectedCount = parseInt(count.count);
                }
            });
            // console.log(this.getCar);
            // console.log(count);
            localStorage.setItem("car", JSON.stringify(this.getCar));
        },
        change(id) {
            // console.log(this.getCar);
            // console.log(this.getCarSelect);
            // console.log(this.getCarSelect[1]);
            // console.log(this.getCarSelect[2]);
            // console.log(this.getCarSelect[3]);
            this.CHANGE_SELECT(this.getCarSelect);
            // this.CHANGE_SELECT(id);
            // console.log(v);
        },
        delOne(id) {
            console.log(localStorage.getItem("car"));
            console.log(this.getCar);
            console.log(id);
            this.DELETE_ONE(id)
        },
        ...goods.mapActions(["CHANGE_SELECT", "DELETE_ONE"])
    },
    created() {
        // console.log(this.getCar);
        this.getCar.forEach(item => {
            // console.log(item.selectedCount, item.newPrice);
            // console.log(item.newPrice);
        });
    },
    components: {
        showNumBox: showNumBox
    },
    computed: {
        ...goods.mapGetters([
            "getCar",
            "getAllMoney",
            "getallCount",
            "getCarSelect"
        ])
    },
    watch: {
        getCar(v) {
            localStorage.setItem("car", JSON.stringify(v));
            console.log(v);
        }
    }
};
</script>

<style lang="less" scoped>
.shopcar {
    background-color: #ccc;
    overflow: hidden;
    padding-bottom: 60px;
    .mui-card-content-inner {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 140px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        img {
            width: 90px;
            height: 90px;
        }
        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            h1 {
                font-size: 17px;
                font-weight: bold;
            }
            .price {
                font-size: 15px;
                font-weight: bold;
                color: red;
            }
            .footer1 {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .del {
                    color: #58c0e3;
                    cursor: pointer;
                }
                span {
                    margin-left: 10px;
                }
            }
        }
    }
    .span {
        font-weight: bold;
        font-size: 15px;
        color: red;
    }
}
</style>
