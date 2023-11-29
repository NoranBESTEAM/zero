<template>
    <section id="events">

        <div class="container">

            <ProfileNavbar />
            <router-view />

            <h5 class="mt-4">All events</h5>

            <p class="mt-3">No events</p>

        </div>

    </section>
</template>

<script>
import ProfileNavbar from '@/components/profile/ProfileNavbar.vue';
export default {
    name: 'Events',
    components: {
        ProfileNavbar,
    },
}
</script>

<style lang="scss" scoped>
#events {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;

    h5 {
        font-size: 18px;
        color: $white;
    }

    p {
        font-size: 16px;
        color: $label-color;
    }
}
</style>