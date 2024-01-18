<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <!-- Start Lessons -->
    <Lessons />
    <!-- End Lessons -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import Lessons from '@/components/lessons/Lessons.vue';
export default {
    name: 'LessonsView',
    components: {
        Lessons
    },
    created() {
        this.$store.commit("setPage", "lessons");
    },
}
</script>

<style scoped lang="scss"></style>