<template>
    <div id="app">
        <mt-header fixed title="移动端小项目" class="header">
            <span slot="left" v-if="status">
                <mt-button icon="back" @click="goback">返回</mt-button>
            </span>
        </mt-header>
        <nav class="mui-bar mui-bar-tab footer">
            <router-link to="/home" class="mui-tab-item1" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/member" class="mui-tab-item1" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-contact mui-icon-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link to="/shopcar" class="mui-tab-item1" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">{{getallCount}}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link to="/search" class="mui-tab-item1" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
        <transition>
            <router-view />
        </transition>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const goods = createNamespacedHelpers("goods");
export default {
    name: "App",
    data() {
        return {
            status: false
        };
    },
    methods: {
        goback() {
            this.$router.go(-1);
        }
    },
    computed: {
        ...goods.mapGetters(["getallCount"])
    },
    created() {
        // this.status = this.$route.path === "/home" ? false : true;
        if (this.$route.path === "/home") {
            this.status = false;
        } else {
            this.status = true;
        }
        // console.log(this.getCount)
    },
    watch: {
        "$route.path"(v, o) {
            if (v === "/home") {
                this.status = false;
            } else {
                this.status = true;
            }
        }
    }
};
</script>

<style lang='less'>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 40px;
    background-color: #fff;
    overflow-x: hidden;
    .header {
        z-index: 99;
    }
    nav {
        z-index: 99;
    }
}
html {
    background-color: #fff;
}
.v-enter {
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
