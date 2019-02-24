<template>
    <div id="product-button">
      <v-btn class="btn warning" v-if=""  @click="ADD_TO_CART" flat>Add to Cart</v-btn>
      <v-btn class="btn warning" v-else  @click="ADD_TO_CART" flat>Remove from Cart</v-btn>
    </div>
</template>

<script>
    export default {
        name: "ProductButton"
    }
</script>

<style scoped>

</style>
