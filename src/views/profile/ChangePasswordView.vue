<template>
    <!-- import navbar in main.js file -->
    <!-- <Navbar />
    <router-view /> -->
    <!-- Start Change Password -->
    <ChangePassword />
    <!-- End Change Password -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import ChangePassword from '@/components/profile/ChangePassword.vue';
export default {
    name: 'ChangePasswordView',
    components: {
        ChangePassword
    }
}
</script>

<style lang="scss" scoped>

</style>