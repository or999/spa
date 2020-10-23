import Vue from 'vue'
import Vuex from 'vuex'
import Product from "../utils/productClass"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        productList: []
    },
    mutations: {
        creatProduct(state) {
            if (state.productList.length == 0) {
                let productLists = []
                for (let i = 0; i < 20; i++) {
                    let type, online, status, product
                    switch (i % 3) {
                        case 1:
                            type = "1"
                            online = false
                            status = true
                            break;
                        case 2:
                            type = "2"
                            online = true
                            status = false
                            break;
                        default:
                            type = "3"
                            online = false
                            status = false
                            break;
                    }
                    product = new Product(i, type, online, status)
                    productLists.push(product)
                }

                console.log(productLists)
                state.productList = productLists

            }
        },


        changeProduct(state, { id, type, online, status }) {
            for (let i = 0; i < state.productList.length; i++) {
                let product = state.productList[i]
                if (product.id === id) {
                    product.type = type
                    product.online = online
                    product.status = status
                    state.productList.splice(i, 1, product)
                }
            }
        }
    },
    actions: {

    }
})
export default store