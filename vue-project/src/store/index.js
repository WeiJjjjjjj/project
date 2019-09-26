import Vue from 'vue'
import vuex from 'vuex'
import goods from './goods/index'

Vue.use(vuex)

export default new vuex.Store({
    modules: {
        goods
    }

})


