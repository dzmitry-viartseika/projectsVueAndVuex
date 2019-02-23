<template>
<div class="navbar">
    <v-navigation-drawer app temporary v-model="drawer" >

            <v-list-tile
                    v-for="(link,i) in links" :key="i"
                    :to="link.url"
            >
                <v-list-tile-action>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title v-text="link.title"></v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>

    </v-navigation-drawer>
    <v-toolbar app>
        <v-toolbar-side-icon
                @click="ToggleMenu"
                class="hidden-sm-and-up"
        >
        </v-toolbar-side-icon>
        <v-toolbar-title><router-link tag="a" :to="'/'">VueStore</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" v-for="(link,i) in links" :key="i">
            <v-btn flat :to="link.url"><v-icon left> {{link.icon}}</v-icon>{{link.title}}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-content>

        <router-view></router-view>

    </v-content>

</div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                drawer: false,
                links: [
                    {
                        title: 'Login',
                        icon: 'account_box',
                        url: '/login'
                    },
                    {
                        title: 'Register',
                        icon: 'face',
                        url: '/register'
                    },
                    {
                        title: 'Cart',
                        icon: 'shopping_cart',
                        url: '/cart'
                    },
                    {
                        title: 'My Product',
                        icon: 'list',
                        url: '/list'
                    }
                ]
            }
        },
        methods: {
            ToggleMenu() {
                return this.drawer = !this.drawer
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
