<template>
    <!-- https://getbootstrap.com/docs/5.3/components/navs-tabs/ -->

    <!-- nav-pills nav-justified -->
    <nav class="nav nav-pills justify-content-center">

        <li class="nav-item">
            <!-- active -->
            <router-link :to="{ name: 'profile' }" class="nav-link" aria-current="page" exact :class="{
                'router-link-exact-active':
                    this.$store.getters.getPage === 'profile' ||
                    this.$store.getters.getPage === 'change-password' ||
                    this.$store.getters.getPage === 'support' ||
                    this.$store.getters.getPage === 'settings'
            }">
                Edit Profile
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'profile-score' }" class="nav-link" :class="{
                'router-link-exact-active':
                    this.$store.getters.getPage === 'profile-score'
            }">
                High scores
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'profile-team' }" class="nav-link" :class="{
                'router-link-exact-active':
                    this.$store.getters.getPage === 'profile-team' ||
                    this.$store.getters.getPage === 'team-members'
            }">
                Add team
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'profile-events' }" class="nav-link" :class="{
                'router-link-exact-active':
                    this.$store.getters.getPage === 'profile-events'
            }">
                Events
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'profile-time' }" class="nav-link" :class="{
                'router-link-exact-active':
                    this.$store.getters.getPage === 'profile-time'
            }">
                Time on site
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'profile-wallet' }" class="nav-link" :class="{
                'router-link-exact-active':
                    this.$store.getters.getPage === 'profile-wallet'
            }">
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
        border-radius: 4px !important;
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