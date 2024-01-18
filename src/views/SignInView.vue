<template>
    <!-- Start SignIn -->
    <SignIn/>
    <!-- End SignIn -->
</template>

<script>
import SignIn from '@/components/signin/SignIn.vue'
export default {
    name: 'SignInView',
    components: {
        SignIn,
    },
    created() {
        this.$store.commit("setPage", "login");
    },
}
</script>

<style scoped lang="scss"></style>