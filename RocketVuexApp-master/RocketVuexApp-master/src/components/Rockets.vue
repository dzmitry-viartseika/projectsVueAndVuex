<template>
    <div class="rockets">
      <section>
        <NewRocketForm></NewRocketForm>
        <RocketsList
        @click="removeRocket"
        ></RocketsList>
      </section>
    </div>
</template>

<script>

import NewRocketForm from '../components/NewRocketForm'
import RocketsList from '../components/RocketsList'
import {mapActions } from 'vuex'



    export default {
        name: "Rockets",
      components: {
          NewRocketForm,
          RocketsList
      },
      methods: mapActions(['removeRocket'])
    }
</script>

<style scoped>

</style>
