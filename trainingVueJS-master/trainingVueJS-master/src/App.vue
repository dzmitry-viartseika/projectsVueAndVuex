<template>
    <v-app>
        <navbar></navbar>
        <footer-app></footer-app>
    </v-app>
</template>

<script>
    import Navbar from './components/Navbar'
    import FooterApp from './components/FooterApp'

    export default {
        components: {
            Navbar,
            FooterApp
        }
    }


</script>

<style lang="less">

</style>
