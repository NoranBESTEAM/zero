<template>
    <!-- import navbar in main.js file -->
    <Navbar />
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
    },
    created() {
        this.$store.commit("setPage", "team-members");
    },
}
</script>

<style lang="scss" scoped>

</style>