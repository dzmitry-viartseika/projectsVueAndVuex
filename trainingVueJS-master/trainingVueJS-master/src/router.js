import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Login from './views/Login.vue'
import MyProducts from './views/MyProducts.vue'
import Register from "./views/Register";
import Product from "./views/Product";
import E404 from './views/E404'


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/list',
      component: MyProducts
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: Product,
    },
    {
      path: '*',
      name: 'e404',
      component: E404,
    }
  ],
  mode: 'history'
})
