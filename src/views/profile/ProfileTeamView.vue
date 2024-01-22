<template>
    <!-- import navbar in main.js file -->
    <Navbar />
    <!-- Start Add Team -->
    <AddTeam />
    <!-- End Add Team -->
    <!-- Start Footer -->
    <!-- import Footer in main.js file -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import AddTeam from '@/components/profile/AddTeam.vue';
export default {
    name: 'ProfileTeamView',
    components: {
        AddTeam
    },
    created() {
        this.$store.commit("setPage", "profile-team");
    },
}
</script>

<style lang="scss" scoped></style>