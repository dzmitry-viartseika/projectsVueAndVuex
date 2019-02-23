<template>
  <div class="new">
    <button class="btn btn-danger" @click="onShowForm">Show form</button>
    <form action="" v-if="showForm"
      @submit.prevent="onAddRocket">
      <label for="name">Name
      <input type="text" v-model="rocket.name" class="form-control container" name="name" aria-describedby="basic-addon1"></label>
      <br>
        <label for="country">Country
        <input type="text" v-model="rocket.country" class="form-control container" name="country" aria-describedby="basic-addon1"></label>
      <br>
      <label for="desc">Description
        <input type="text" v-model="rocket.description" class="form-control container" name="desc" aria-describedby="basic-addon1"></label>
      <br>
      <label for="image">Image
        <input type="text" v-model="rocket.image" class="form-control container" name="image" aria-describedby="basic-addon1"></label>
      <br>
      <button class="btn btn-success">Add Rocket</button>
    </form>
  </div>
</template>

<script>

  function getEmptyRocket() {
    return {
      name: '',
      description: '',
      country: '',
      image: '',
    }
  }

  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'

    export default {
        name: "NewRocketForm",
      data() {
          return {
            rocket: getEmptyRocket()
          }
      },
      computed: mapState(['showForm']),
      methods: {
        ...mapMutations(['onShowForm','getNewRocket','addRocket']),
        onAddRocket() {
          this.addRocket(this.rocket);
          this.rocket = getEmptyRocket()
        }
      }
    }
</script>

<style scoped>

</style>
