import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/components/tabbar/homeTabbar.vue')
const member = () => import('@/components/tabbar/memberTabbar.vue')
const shopcar = () => import('@/components/tabbar/shopcarTabbar.vue')
const search = () => import('@/components/tabbar/searchTabbar.vue')
const newsList = () => import('@/components/news/newslist.vue')
const newsInfo = () => import('@/components/news/newsInfo.vue')
const imgShare = () => import('@/components/imgShare/imgList.vue')
const imgContent = () => import('@/components/imgShare/imgContent.vue')
const goods = () => import('@/components/goods/goods.vue')
const goodsDeal = () => import('@/components/goods/goodsDeal.vue')
const goodsComment = () => import('@/components/goods/goodsComment.vue')
const goodsDesc = () => import('@/components/goods/goodsDesc.vue')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/member',
            name: 'member',
            component: member
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            component: shopcar
        },
        {
            path: '/search',
            name: 'search',
            component: search
        },
        {
            path: '/home/newslist',
            name: 'newsList',
            component: newsList
        },
        {
            path: '/home/newsInfo/:id',
            name: 'newsInfo',
            component: newsInfo
        },
        {
            path: '/home/imgShare',
            name: 'imgShare',
            component: imgShare
        },
        {
            path: '/home/imgContent/:id',
            name: 'imgContent',
            component: imgContent
        },
        {
            path: '/home/goods',
            name: 'goods',
            component: goods
        },
        {
            path: '/home/goodsDeal/:id',
            name: 'goodsDeal',
            component: goodsDeal
        },
        {
            path: '/home/goodsDesc/:id',
            name: 'goodsDesc',
            component: goodsDesc
        },
        {
            path: '/home/goodsComment/:id',
            name: 'goodsComment',
            component: goodsComment
        }
    ],
    linkActiveClass: 'mui-active'
})
