<template>
<!-- import navbar in main.js file -->
    <Navbar />
    <router-view />
    <!-- Start Time -->
    <Time />
    <!-- End Time -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import Time from '@/components/profile/Time.vue';
export default {
    name: 'ProfileTimeView',
    components: {
        Time
    }
}
</script>

<style lang="scss" scoped>

</style>