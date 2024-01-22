<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <!-- Start Events -->
    <Events />
    <!-- End Events -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import Events from '@/components/profile/Events.vue';
export default {
    name: 'ProfileEventsView',
    components: {
        Events
    },
    created() {
        this.$store.commit("setPage", "profile-events");
    },
}
</script>

<style lang="scss" scoped></style>