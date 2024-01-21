<template>
    <!-- Start Navbar -->
    <!-- import navbar in main.js file -->
    <Navbar />
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
    },
    created() {
        this.$store.commit("setPage", "competitions");
    },
}
</script>

<style scoped lang="scss">

</style>