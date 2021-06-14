import Vue from 'vue'
import VueRouter from 'vue-router'
import Myphotos from './views/Myphotos.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/myphotos',
        name: 'Myphotos',
        component: Myphotos
    }
]

const router = new VueRouter({
    routes
})

export default router