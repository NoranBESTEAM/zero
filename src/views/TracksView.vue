<template>
    <!-- Start Navbar -->
    <!-- import navbar in main.js file -->
    <Navbar />
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
    },
    created() {
        this.$store.commit("setPage", "tracks");
    },
}
</script>

<style scoped lang="scss"></style>