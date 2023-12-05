<template>
    <!-- Start Navbar -->
    <!-- import navbar in main.js file -->
    <!-- <Navbar />
    <router-view /> -->
    <!-- End Navbar -->
    <!-- Start Tracks -->
    <Tracks />
    <!-- End Tracks -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>

import Tracks from '@/components/tracks/Tracks.vue';

export default {
    name: 'TracksView',
    components: {
        Tracks
    }
}
</script>

<style scoped lang="scss"></style>