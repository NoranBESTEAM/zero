<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <router-view />
    <!-- Start Settings -->
    <Settings />
    <!-- End Settings -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import Settings from '@/components/profile/Settings.vue';
export default {
    name: 'SettingView',
    components: {
        Settings
    }
}
</script>

<style lang="scss" scoped></style>