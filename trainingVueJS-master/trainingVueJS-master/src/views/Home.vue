<template>
<v-app>
    <h1 style="text-align: center">OUR GOODS</h1>
    <v-layout row wrap justify-space-around style="margin-bottom: 50px">
        <v-flex xs12 sm6 md3 lg3 ma-1 elevation-8 my-2 v-for="(product,index) in products" :key="index">
            <v-card >
             <router-link :to="'/product/' + product.id">
                 <v-img
                         :src="product.imageSrc"
                         aspect-ratio="2.75"
                 ></v-img>
             </router-link>

                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{product.title}}</h3>
                        <div>{{product.description}}</div>
                        <p class="color">Color: {{product.color}}</p>
                        <p class="price">Price:{{product.price}} $</p>

                    </div>
                </v-card-title>

                <v-card-actions>
                    <router-link :to="'/product/' + product.id"> <v-btn flat class="orange btn white--text">READ MORE</v-btn>          </router-link>
                    <v-spacer></v-spacer>
                    <app-buy-dialog></app-buy-dialog>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    <h2 class="sales">Sales</h2>
    <v-carousel style="margin-bottom: 50px" hide-delimiters height="300" :dark="true">
        <v-carousel-item
                v-for="(product,i) in promoProducts"
                :key="i"
                :src="product.imageSrc"

        > <h1 class="slider">{{product.title}}</h1></v-carousel-item>

    </v-carousel>
</v-app>
</template>

<script>


    export default {
        name: "Home",
        computed: {
            promoProducts() {
                return this.$store.getters.promoProducts
            },
            products() {
                return this.$store.getters.products
            }
        }
    }
</script>

<style scoped lang="less">
    .price {
        font-size: 24px;
        color: red;
        font-weight: bold;
    }

    .color {
        font-size: 18px;
        font-weight: bold;
        padding-top: 10px;
    }

    .sales {
        padding-bottom: 30px;
        text-align: center;
        font-size: 30px;
    }

    .slider {
        color: red;
        font-size: 30px;
    }



</style>
