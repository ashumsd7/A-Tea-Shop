import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from "../views/Cart.vue";
import store from '../store/Modules/CartData/index'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    // beforeEnter: (to, from, next) => {
    //   if (store.getters.getCartData.length) {
    //     next();
    //   }
    //   else {
    //     next('/');
    //   }
    // }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
