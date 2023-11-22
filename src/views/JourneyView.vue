<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <router-view />
    <!-- Start Journey -->
    <Journey />
    <!-- End Journey -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import Journey from '@/components/journey/Journey.vue';
export default {
    name: 'JourneyView',
    components: {
        Journey
    }
}
</script>

<style scoped lang="scss"></style>