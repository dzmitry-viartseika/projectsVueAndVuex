<template>
    <div class="product-list-one">
      <h2>ProductListOne</h2>
      <ul>
        <li v-for="(product,i) in saleProducts" :key="i">
          <span>{{product.name}} </span>
          <span> {{product.price}}</span>
        </li>
      </ul>
      <button @click="reducePrice">Reduce Price</button>
    </div>
</template>

<script>

  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

    export default {
        name: "ProductListOne",
        computed: {
          ...mapState(['products']),
          ...mapGetters(['saleProducts'])
        },
      methods: mapActions(['reducePrice'])

    }
</script>

<style scoped>

</style>
