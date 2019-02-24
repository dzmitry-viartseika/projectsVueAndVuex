<template>
  <v-layout row wrap align-center justify-center>
    <v-flex  xs12 sm3  ma-3    v-for="(product,i) in products" :key="i">
      <v-card class="block">
        <v-img
          :src="product.image"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{product.title}}</div>
            <span class="grey--text">{{product.price}}$</span>
            <p>{{product.description}}</p>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
            <ProductButton></ProductButton>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

  import ProductButton from '../components/ProductButton'

  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'

    export default {
        name: "Card",
      components: {
        ProductButton
      },
      computed: mapState(['products']),
      methods: mapActions(['ADD_TO_CART'])
    }
</script>

<style scoped>
.grey--text {
  font-size: 40px;
}

  .block {
    cursor: pointer;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
  }  

  .block:hover {
    transform: scale(1.1);
  }



</style>
