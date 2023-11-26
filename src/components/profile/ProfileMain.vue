<template>
    <section id="profile_main">
        <div class="container">

            <ProfileNavbar />
            <router-view />


        </div>
    </section>
</template>

<script>
import ProfileNavbar from '@/components/profile/ProfileNavbar.vue';
export default {
    name:'ProfileMain',
    components: {
        ProfileNavbar
    }
}
</script>

<style lang="scss" scoped>
#profile_main{
    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;
}
</style>