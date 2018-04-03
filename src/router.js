import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Page from './views/Page.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/page', component: Page }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
