<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <!-- Start Levels -->
    <Levels />
    <!-- End Levels -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import Levels from '@/components/levels/Levels.vue';
export default {
    name: 'LevelsView',
    components: {
        Levels
    },
    created() {
        this.$store.commit("setPage", "levels");
    },
}
</script>

<style scoped lang="scss"></style>