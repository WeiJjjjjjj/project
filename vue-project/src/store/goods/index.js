var car = JSON.parse(localStorage.getItem('car')) || []
export default {
    namespaced: true,
    state: {
        car: car
    },
    getters: {
        getallCount(state) {
            var c = 0
            state.car.forEach(item => {
                if (item.select === true) {
                    c += item.selectedCount
                }
            });
            return c
        },
        getCar(state) {
            return state.car
        },
        getAllMoney(state) {
            let m = 0
            state.car.forEach(item => {
                if (item.select === true) {
                    m += item.selectedCount * parseInt(item.newPrice)
                }
            })
            return m
        },
        getCarSelect(state) {
            let o = {}
            state.car.forEach(item => {
                o[item.id] = item.select
            })
            return o
        }
    },
    mutations: {
        addTocar(state, data) {
            console.log(state.car)
            console.log(data)
            let flag = false
            state.car.some(item => {
                if (item.id === parseInt(data.id)) {
                    item.selectedCount += data.selectedCount
                    console.log(flag)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(data)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
            console.log(state.car)
        },
        changeSelect(state, data) {
            state.car.forEach(item => {
                item.select = data[item.id]
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        deleteOne(state, data) {
            state.car = state.car.filter(item => {
                return item.id !== data
            })
            // console.log(state.car.filter(item =>
            //     item.id === 3
            // ))
            // console.log(state.car.filter(item => {
            //     return item.id === 3
            // }))
        }
    },
    actions: {
        ADD_TOCAR({ commit }, data) {
            console.log(data)
            commit('addTocar', data)
        },
        CHANGE_SELECT({ commit }, data) {
            commit('changeSelect', data)
            console.log(data)
        },
        DELETE_ONE({ commit }, data) {
            // console.log(data)
            commit('deleteOne', data)
        }
    }
}