<template>
    <!-- import navbar in main.js file -->
    <!-- <Navbar />
    <router-view /> -->
    <!-- Start Main Profile -->
    <ProfileMain />
    <!-- End Main Profile -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>
<script>
import ProfileMain from '@/components/profile/ProfileMain.vue';
export default {
    name: 'ProfileView',
    components: {
        ProfileMain
    }
}
</script>

<style lang="scss" scoped></style>