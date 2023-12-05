<template>
    <!-- Start Navbar -->
    <!-- import navbar in main.js file -->
    <!-- <Navbar />
    <router-view /> -->
    <!-- End Navbar -->
    <!-- Start Competitions -->
    <Competitions />
    <!-- End Competitions -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>

import Competitions from '@/components/competitions/Competitions.vue';

export default {
    name: 'CompetitionsView',
    components: {
        Competitions
    }
}
</script>

<style scoped lang="scss">

</style>