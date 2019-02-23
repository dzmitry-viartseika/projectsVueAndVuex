<template>
  <div class="product-list-two">
    <h2>ProductListTwo</h2>
    <ul>
      <li v-for="(product,i) in products" :key="i">
        <span>{{product.name}} </span>
        <span> {{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "ProductListTwo",
    computed: mapState(['products'])
  }
</script>

<style scoped>

</style>
