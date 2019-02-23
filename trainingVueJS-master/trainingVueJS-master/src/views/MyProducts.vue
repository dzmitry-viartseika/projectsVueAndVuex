<template>
<v-app>
    <v-container>
        <v-layout class="layout" row>
            <v-flex xs12 sm6 md6 lg6 offset-sm3>
                <h1>My Products Page</h1>
                <v-card class="Elevation-16 mb-2"
                        v-for="(product,index) in products"
                        :key="index"
                >
                    <v-layout>
                        <v-flex xs12 sm6 md6 lg6>
                            <v-card-media
                                    :src="product.imageSrc"
                                    class="img"
                                    height="250px">

                            </v-card-media>
                        </v-flex>
                        <v-flex xs12>
                            <v-card-text>
                                <h2 class="text--primary">{{product.title}}</h2>
                                <p>{{product.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="orange"
                                       :to="'/product/' + product.id"
                                >Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-app>
</template>

<script>


    export default {
        name: "MyProducts",
        computed: {
            products(state) {
                return this.$store.getters.products
            }
        }
        }

</script>

<style scoped>
    @media screen and (max-width: 1000px) {
        .layout {
            flex-direction: column;
            text-align: center;
        }
    }
</style>
