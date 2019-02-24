<template>
  <v-toolbar app>
    <v-toolbar-title>Online Store</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-for="(link,i) in links" :key="i">

     <v-btn>
       <router-link :to="link.url">
         <v-icon left>{{link.icon}}</v-icon>{{ link.title }}
       </router-link>
     </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

  import { mapState } from 'vuex'

    export default {
        name: "Toolbar",
      computed: mapState(['links'])
    }
</script>

<style scoped>

</style>
