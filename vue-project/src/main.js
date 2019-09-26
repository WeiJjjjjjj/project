// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import vuex from 'vuex'
import MintUI from 'mint-ui'
import http from './utils/http'
import moment from 'moment'
import VuePreview from 'vue-preview'
import store from './store/index'


import 'mint-ui/lib/style.css'
import './libs/mui/css/mui.css'
import './libs/mui/css/icons-extra.css'

// if (process.env.NODE_ENV === 'development') {
//     require('mint-ui/lib/style.css');
//     require('./libs/mui/css/mui.css');
//     require('./libs/mui/css/icons-extra.css');
// }

// Vue.use(vuex)
Vue.use(MintUI)
Vue.use(moment)
Vue.use(VuePreview)
Vue.prototype.$http = http


// 定义全局的过滤器
Vue.filter('dataFormat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(dataStr).format(pattern)
})

// 使路由跳转时，页面固定在最上面
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
