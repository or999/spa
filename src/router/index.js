import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home'
import detail from '../view/detail'
import edit from '../view/edit'
Vue.use(Router)
const router = new Router({
    mode:'hash',
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home,
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: edit
        },


    ]
})
export default router