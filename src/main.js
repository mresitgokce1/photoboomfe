import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'
import Myphotos from './components/Myphotos.vue'
import Home from './components/Home.vue'
import Addphoto from './components/Addphoto.vue'
import Detailphoto from './components/Detailphoto.vue'

const router = new VueRouter({
  routes: [
    { path: '/myphotos', component: Myphotos},
    { path: '/', component: Home},
    { path: '/addphoto', component: Addphoto},
    { path: '/detailphoto/:id', component: Detailphoto}
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
