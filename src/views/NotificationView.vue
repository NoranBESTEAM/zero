<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <router-view />
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
    }
}
</script>

<style lang="scss" scoped>

</style>