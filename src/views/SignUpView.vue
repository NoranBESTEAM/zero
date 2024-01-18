<template>
    <!-- Start Signup -->
    <SignUp />
    <!-- End Signup -->
</template>

<script>
import SignUp from '@/components/signup/SignUp.vue';
export default {
    name: 'SignUpView',
    components: {
        SignUp,
    },
    created() {
        this.$store.commit("setPage", "sign-up");
    },
}
</script>

<style scoped lang="scss"></style>