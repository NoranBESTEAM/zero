<template>
    <!-- import navbar in main.js file -->
    <Navbar />
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
    },
    created() {
        this.$store.commit("setPage", "change-password");
    },
}
</script>

<style lang="scss" scoped></style>