<template>
    <v-container>
        <section class="product mt-3 eleavation-10">
            <v-layout class="row wrap">
                <v-flex class="xs12 sm6 lg6">
                    <img  :src="product.imageSrc" alt="" class="product__img">
                </v-flex>
                <v-flex class="xs12 sm6 lg6">
                    <div class="product__info">
                        <h5 class="product__title display-1 mb-3 mt-3">{{product.title}}</h5>
                        <p>Vendor: {{product.vendor}}</p>
                        <p>Price: {{product.price}} $</p>
                        <p>Color: <span>{{product.color}}</span></p>
                        <p>Description: {{product.description}}</p>
                       <router-link :to="'/'"> <v-btn>Return</v-btn></router-link>
                        <app-buy-dialog></app-buy-dialog>
                    </div>
                </v-flex>
            </v-layout>
        </section>
    </v-container>
</template>

<script>
    export default {
        name: "Product",
        props: ['id'],
        computed: {
            product() {
                const id = this.id;
                return this.$store.getters.productById(id)
            }
        }
    }
</script>

<style scoped>
    .product {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        border: 1px solid black;
        padding: 30px;
        margin-bottom: 100px;
    }

    .product__img {
        height: 100%;
        max-width: 300px;
        display: block;
        margin: 0 auto;
    }

    .product__info {
        margin-left: 50px;
    }

    .product__title {
        font-size: 1.6rem;
        font-weight: bold;
    }

    .color {
        background: grey;
        width: 20px;
        height: 20px;
        display: block;
        margin: 0 auto;
    }





</style>
