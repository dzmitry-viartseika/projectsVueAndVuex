<template>
  <div id="app">
      <h1>{{titleText}}</h1>
    <form action="" @submit.prevent="ADD_TASK">
      <label for="task">
        ADD TASK
      </label>
      <input type="text"
             v-model="newToDo"
      >
      <button>Add</button>
    </form>
      <ul>
          <li
                  v-for="(todo,i) in todos"
                  :key="i">
            <input type="checkbox"
                   v-model="todo.done"
            ><span :class="{done: todo.done}">
              {{todo.title}}
          </span>
          </li>
      </ul>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapGetters } from 'vuex'
import {mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  computed: {
      newToDo: {
          get() {
              return this.$store.state.newToDo
          },
          set(value) {
              this.$store.commit('SET_TO_DO',value)
          }
      },
      ...mapGetters(['todos','titleText'])
  },
    methods: {
        ...mapActions(['SET_TO_DO','ADD_TASK']),
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .done {
    text-decoration: line-through;
  }

</style>
