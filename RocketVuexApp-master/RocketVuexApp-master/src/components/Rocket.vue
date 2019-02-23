<template>
   <div class="flex">
     <div  class="block">
       <img :src="rocket.image" class="card-img-top" :alt="rocket.name">
       <div class="card-body">
         <h5 class="card-title">{{ rocket.name }}</h5>
         <p class="card-text">{{ rocket.description }}</p>
         <a href="#" @click="removeRocket(rocket)" class="btn btn-primary">DELETE</a>
       </div>
     </div>
   </div>
</template>

<script>

import {mapActions} from 'vuex'

    export default {
        name: "Rocket",
      props: ['rocket'],
      methods: mapActions(['removeRocket'])
    }
</script>

<style scoped>
  .flex {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    color: white;
  }

  .block {
    flex: 1 1;
    padding: 10px;
    max-width: 300px;
  }

  .card-img-top {
    max-width: 100px;
    display: block;
    margin: 0 auto;
  }

</style>
