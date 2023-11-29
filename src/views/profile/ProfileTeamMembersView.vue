<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <router-view />
    <!-- Start Team Members -->
    <TeamMembers />
    <!-- End Team Members -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import TeamMembers from '@/components/profile/TeamMembers.vue';
export default {
    name: 'ProfileTeamMembersView',
    components: {
        TeamMembers
    }
}
</script>

<style lang="scss" scoped>

</style>