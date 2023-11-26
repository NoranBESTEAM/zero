<template>
    <!-- https://getbootstrap.com/docs/5.3/components/navs-tabs/ -->

    <!-- nav-pills nav-justified -->
    <nav class="nav nav-pills justify-content-center">

        <li class="nav-item">
            <!-- active -->
            <router-link :to="{ name: 'profile' }" class="nav-link" aria-current="page" exact>
                Edit Profile
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'profile-score' }" class="nav-link">
                High scores
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'profile-team' }" class="nav-link">
                Add team
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'profile-events' }" class="nav-link">
                Events
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'profile-time' }" class="nav-link">
                Time on site
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'profile-wallet' }" class="nav-link">
                My wallet
            </router-link>
        </li>

    </nav>
</template>

<script>
export default {
    name: 'ProfileNavbar',
}
</script>

<style lang="scss" scoped>
nav {
    gap: 16px;

    a {
        border-radius: 8px;
        border: 1px solid $pink;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 166px;
        // padding: 8px;

        font-size: 18px;

        background: $linear-pink;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    a:hover,
    a.router-link-exact-active {
        background: $linear-pink;
        background-clip: padding-box;
        -webkit-background-clip: padding-box;
        -webkit-text-fill-color: $white;
    }
}
</style>