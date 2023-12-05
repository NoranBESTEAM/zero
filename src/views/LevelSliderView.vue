<template>
    <!-- import navbar in main.js file -->
    <!-- <Navbar />
    <router-view /> -->
    <!-- Start Level Slider -->
    <LevelSlider />
    <!-- End Level Slider -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import LevelSlider from '@/components/level_slider/LevelSlider.vue';
export default {
    name: 'LevelSliderView',
    components: {
        LevelSlider
    }
}
</script>

<style scoped lang="scss"></style>