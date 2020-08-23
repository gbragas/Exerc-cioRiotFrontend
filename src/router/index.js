import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Item from '../views/Item.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/itens',
    component: Home
  },
  {
    path: '/itens',
    name: 'Item',
    component: Item
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
