<template>
    <!-- import navbar in main.js file -->
    <!-- <Navbar />
    <router-view /> -->
    <!-- Start Technical Support -->
    <Support />
    <!-- End Technical Support -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import Support from '@/components/profile/Support.vue';
export default {
    name: 'SupportView',
    components: {
        Support
    }
}
</script>

<style lang="scss" scoped>

</style>