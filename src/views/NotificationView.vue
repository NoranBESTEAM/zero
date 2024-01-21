<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <!-- Start Journey -->
    <Notification />
    <!-- End Journey -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import Notification from '@/components/notification/Notification.vue';
export default {
    name:'NotificationView',
    components: {
        Notification
    },
    created() {
        this.$store.commit("setPage", "notification");
    },
}
</script>

<style lang="scss" scoped>

</style>