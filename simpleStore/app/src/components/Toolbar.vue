<template>
  <v-toolbar app>
      <router-link tag="a"  :to="'/'">
        <v-icon left>home</v-icon>Home
      </router-link>
    <v-spacer></v-spacer>
       <router-link tag="a" :to="'/cart'">
         <v-icon left>add_shopping_cart</v-icon> Cart({{cnt}})
       </router-link>

  </v-toolbar>
</template>

<script>

  import { mapState } from 'vuex'

    export default {
        name: "Toolbar",
      computed: mapState(['cnt'])
    }
</script>

<style scoped>
 a {
   display: block;
   padding: 20px;
   border: 1px solid black;
   text-decoration: none;
   color: black;
   -webkit-transition: all .5s ease;
   -moz-transition: all .5s ease;
   -ms-transition: all .5s ease;
   -o-transition: all .5s ease;
   transition: all .5s ease;
 }

 a:hover {
   background: orange;
   color: white;
 }
  
</style>
