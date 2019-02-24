import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      links: [
        {
          icon: 'home',
          url: '/',
          title: 'HOME'
        },
        {
          icon: 'add_shopping_cart',
          url: '/add',
          title: 'CART'
        }
      ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
});
