<template>
    <!-- import navbar in main.js file -->
    <!-- <Navbar />
    <router-view /> -->
    <!-- Start Mission Slider -->
    <MissionSlider />
    <!-- End Mission Slider -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import MissionSlider from '@/components/mission_slider/MissionSlider.vue';
export default {
    name: 'MissionSliderView',
    components: {
        MissionSlider
    }
}
</script>

<style scoped lang="scss"></style>