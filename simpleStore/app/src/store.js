import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      links: [
        {
          icon: 'home',
          url: '/',
          title: 'HOME',
          info: ''
        },
        {
          icon: 'add_shopping_cart',
          url: '/cart',
          title: 'CART',
          info: ''
        }
      ],
    products: [
      {
        title: 'samsung',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        price: '200',
        image: 'https://picsum.photos/1024/400/?image=41',

      },
      {
        title: 'samsung',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        price: '300',
        image: 'https://picsum.photos/1024/400/?image=41',

      },      {
        title: 'samsung',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        price: '400',
        image: 'https://picsum.photos/1024/400/?image=41',

      },      {
        title: 'samsung',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        price: '500',
        image: 'https://picsum.photos/1024/400/?image=41',

      },      {
        title: 'samsung',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        price: '600',
        image: 'https://picsum.photos/1024/400/?image=41',

      },
      {
        title: 'samsung',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        price: '700',
        image: 'https://picsum.photos/1024/400/?image=41',

      }
    ],
    cnt: 0,

  },
  mutations: {
    ADD_TO_CART(state) {
      state.cnt++;
    }
  },
  actions: {
      ADD_TO_CART(context) {
        context.commit('ADD_TO_CART')
      }
  },
  getters: {
    cnt(state) {
      return state.cnt
    },
  }
});
