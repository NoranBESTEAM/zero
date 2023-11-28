<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <router-view />
    <!-- Start Score -->
    <Score />
    <!-- End Score -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import Score from '@/components/profile/Score.vue';
export default {
    name: 'ProfileScoreView',
    components: {
        Score
    }
}
</script>

<style lang="scss" scoped></style>