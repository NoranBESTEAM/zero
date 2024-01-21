<template>
    <!-- https://mdbootstrap.com/docs/standard/navigation/navbar/ -->

    <!-- Navbar -->

    <nav class="navbar navbar-expand-xl fixed-top">

        <!-- Container wrapper -->

        <div class="container">

            <!-- Logo -->
            <router-link to="/" class="navbar-brand">
                <img src="@/assets/images/navbar/logo1.webp" alt="ZEROLogo" />
            </router-link>

            <!-- Toggle Button -->
            <button class="navbar-toggler rounded-3 shadow-none" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <img src="@/assets/images/navbar/gg_menu-right.webp" alt="Toggler Icon">
            </button>

            <!-- Sidebar -->

            <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">

                <!-- Sidebar Header -->

                <div class="offcanvas-header">
                    <!-- <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                        <img src="@/assets/images/navbar/logo1.png" alt="ZEROLogo" />
                    </h5> -->
                    <!-- class="btn-close" -->
                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" class="shadow-none">
                        <font-awesome-icon :icon="['fas', 'fa-xmark']" />
                    </button>
                </div>

                <!-- Sidebar Body -->

                <div class="offcanvas-body">

                    <ul class="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page"
                                exact>Home</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'tracks' }" class="nav-link" :class="{
                                'router-link-exact-active':
                                    this.$store.getters.getPage === 'tracks' ||
                                    this.$store.getters.getPage === 'lessons' ||
                                    this.$store.getters.getPage === 'levels' ||
                                    this.$store.getters.getPage === 'level_slider' ||
                                    this.$store.getters.getPage === 'mission_slider' 
                            }">Tracks</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'competitions' }" class="nav-link" :class="{
                                'router-link-exact-active':
                                    this.$store.getters.getPage === 'competitions' ||
                                    this.$store.getters.getPage === 'journey'
                            }">Competitions</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'our-platforms' }" class="nav-link">Our platforms</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'readable-content' }" class="nav-link">Readable content</router-link>
                        </li>
                    </ul>

                    <div class="d-none d-xl-flex justify-content-center align-items-center gap-2">

                        <button class="btn rounded-3 d-xl-none d-xxl-inline-flex" id="time">
                            <img src="@/assets/images/navbar/time.webp" alt="">
                            2.45.00
                        </button>

                        <button class="btn rounded-3 d-xl-none d-xxl-inline-flex" id="certificate">
                            <img src="@/assets/images/navbar/certificate.webp" alt="">
                            250 XP
                        </button>

                        <!-- https://freefrontend.com/css-notifications/ -->
                        <!-- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_notification -->
                        <router-link :to="{ name: 'notification' }" class="btn" id="alert">
                            <img src="@/assets/images/navbar/notification.webp" alt="" class="position-relative">
                            <font-awesome-icon :icon="['fas', 'fa-circle']" />
                            <!-- https://getbootstrap.com/docs/5.3/components/badge/ -->
                            <!-- <span
                                class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span> -->
                        </router-link>

                        <router-link :to="{ name: 'profile' }" class="btn" id="user">
                            <!-- <img src="@/assets/images/navbar/user.png" alt=""> -->
                            <img src="@/assets/images/profile/profile-pic-square.webp" alt="">
                        </router-link>

                    </div>

                </div>

            </div>

            <div class="d-flex d-xl-none justify-content-end align-items-center gap-3" id="responsive">

                <!-- https://freefrontend.com/css-notifications/ -->
                <!-- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_notification -->
                <router-link :to="{ name: 'notification' }" class="btn" id="alert">
                    <img src="@/assets/images/navbar/notification.webp" alt="" class="position-relative">
                    <font-awesome-icon :icon="['fas', 'fa-circle']" />
                    <!-- https://getbootstrap.com/docs/5.3/components/badge/ -->
                    <!-- <span
                        class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                    </span> -->
                </router-link>

                <router-link :to="{ name: 'profile' }" class="btn" id="user">
                    <!-- <img src="@/assets/images/navbar/user.png" alt=""> -->
                    <img src="@/assets/images/profile/profile-pic-square.webp" alt="">
                </router-link>

            </div>

        </div>

        <!-- Container wrapper -->

    </nav>

    <!-- Navbar -->
</template>

<script>

export default {
    name: 'Navbar',
};

</script>

<style scoped lang="scss">
nav {

    background: $mov;
    box-shadow: 0px 4px 4px 0px $box-shadow;

    width: 100%;
    height: 64px;

    .container {

        .navbar-brand {

            @include breakpoints(x-small) {
                display: none;
            }

            @include breakpoints(small) {
                display: none;
            }

            @include breakpoints(medium) {
                display: none;
            }

            @include breakpoints(large) {
                display: none;
            }

            img {
                width: 119.614px;
                height: 40px;
            }

        }

        .navbar-toggler {

            border: 1px solid $pink;

            img {
                width: 31px;
                height: 31px;
            }

        }

        .offcanvas {

            background: $dark-mov;

            .offcanvas-header {

                padding-top: 57px;

                button {
                    background: $linear-pink;
                    border: none;
                    width: 21px;
                    height: 21px;
                    border-radius: 50%;
                }

            }

            .offcanvas-body {

                ul {

                    li {

                        @include breakpoints(x-small) {
                            width: 100%;
                        }

                        @include breakpoints(small) {
                            width: 100%;
                        }

                        @include breakpoints(medium) {
                            width: 100%;
                        }

                        @include breakpoints(large) {
                            width: 100%;
                        }

                        a {

                            color: $white;
                            font-size: 18px;
                            line-height: normal;

                            @include breakpoints(x-small) {
                                text-align: center;
                                padding-top: 14px;
                                padding-bottom: 14px;
                                box-shadow: 0px 4px 4px 0px $box-shadow;
                            }

                            @include breakpoints(small) {
                                text-align: center;
                                padding-top: 14px;
                                padding-bottom: 14px;
                                box-shadow: 0px 4px 4px 0px $box-shadow;
                            }

                            @include breakpoints(medium) {
                                text-align: center;
                                padding-top: 14px;
                                padding-bottom: 14px;
                                box-shadow: 0px 4px 4px 0px $box-shadow;
                            }

                            @include breakpoints(large) {
                                text-align: center;
                                padding-top: 14px;
                                padding-bottom: 14px;
                                box-shadow: 0px 4px 4px 0px $box-shadow;
                            }

                        }

                        a:hover,
                        a.router-link-exact-active {
                            background: $linear-pink;
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }

                    }

                }

                div {

                    button {

                        padding: 4px 8px;

                        font-size: 18px;
                        line-height: normal;

                        background: $linear-blue;
                        background-clip: padding-box;
                        -webkit-background-clip: padding-box;
                        -webkit-text-fill-color: $white;

                        img {
                            width: 24px;
                            height: 24px;
                            margin-right: 8px;
                        }

                    }

                    #alert {
                        padding: 0;
                        position: relative;

                        img {
                            width: 40px;
                            height: 40px;
                        }

                        svg {
                            color: green;
                            font-size: 8px;
                            position: absolute;
                            top: 10px;
                            right: 12px;
                            // border: 1px solid #fff;
                            // border-radius: 50%;
                        }

                    }

                    #user {
                        padding: 0;

                        img {
                            width: 40px;
                            height: 40px;
                            border-radius: 8px;
                            object-fit: cover;
                        }
                    }

                    #user:hover,
                    #user.router-link-exact-active {
                        border: 1px solid $pink;
                    }

                }

            }

        }

        div#responsive {

            #alert {
                padding: 0;
                position: relative;

                img {
                    width: 40px;
                    height: 40px;
                }

                svg {
                    color: green;
                    font-size: 8px;
                    position: absolute;
                    top: 10px;
                    right: 12px;
                    // border: 1px solid #fff;
                    // border-radius: 50%;
                }

            }

            #user {
                padding: 0;

                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    object-fit: cover;
                }
            }

            #user:hover,
            #user.router-link-exact-active {
                border: 1px solid $pink;
            }

        }

    }

}
</style>
