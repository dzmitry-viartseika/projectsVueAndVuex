<template>
    <div>
      <rocket v-for="(rocket,i) in rockets" :key="i" :rocket="rocket"
      @click="removeRocket"
      >

      </rocket>
    </div>
</template>

<script>

  import Rocket from '../components/Rocket'
  import {mapState } from 'vuex'
  import {mapActions } from 'vuex'


    export default {
        name: "RocketsList",
      components: {
          Rocket
      },
      computed: mapState(['rockets']),
      methods: mapActions(['removeRocket'])
    }
</script>

<style scoped>

</style>
