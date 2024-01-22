<template>
<!-- import navbar in main.js file -->
    <Navbar />
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
    },
    created() {
        this.$store.commit("setPage", "profile-time");
    },
}
</script>

<style lang="scss" scoped>

</style>