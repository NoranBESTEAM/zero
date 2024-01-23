<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <!-- Start Wallet -->
    <Wallet />
    <!-- End Wallet -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import Wallet from '@/components/profile/Wallet.vue';
export default {
    name: 'ProfileWalletView',
    components: {
        Wallet
    },
    created() {
        this.$store.commit("setPage", "profile-wallet");
    },
}
</script>

<style lang="scss" scoped></style>