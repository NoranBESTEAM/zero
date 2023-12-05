<template>
    <!-- import navbar in main.js file -->
    <!-- <Navbar />
    <router-view /> -->
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
    }
}
</script>

<style scoped lang="scss"></style>