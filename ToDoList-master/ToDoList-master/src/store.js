import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      titleText: 'Hello Vuex',
      todos: [
        {
          title: 'Learn Javascript',
          done: false
        },
        {
          title: 'Learn EcmaScript',
          done: false
        },
        {
          title: 'Learn VueJS',
          done: false
        },
        {
          title: 'Learning VUEX NOW',
          done: false
        },
      ],
    newToDo: ''
  },
  mutations: {
      SET_TO_DO(state,value) {
        state.newToDo = value
      },
      ADD_TASK(state) {
        state.todos.push({
          title: state.newToDo,
          done: false
        })
      }
  },
  actions: {
    SET_TO_DO(context) {
      context.commit('SET_TO_DO')
    },
    ADD_TASK(context) {
      context.commit('ADD_TASK')
      context.commit('SET_TO_DO','')
    }
  },
  getters: {
    titleText(state) {
      return   state.titleText
    },
    todos(state) {
   return   state.todos
    }
  }
})
