<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <!-- Logo -->
            <router-link to="/" class="navbar-brand">
                <img src="@/assets/images/navbar/logo1.png" alt="ZEROLogo" />
            </router-link>
            <!-- Toggle Button -->
            <!-- shadow-none border-0 -->
            <button class="navbar-toggler rounded-3" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <img src="@/assets/images/navbar/gg_menu-right.svg" alt="Toggler Icon">
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
                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <font-awesome-icon :icon="['fas', 'fa-xmark']" />
                    </button>
                </div>
                <!-- Sidebar Body -->
                <!-- d-flex flex-column flex-lg-row -->
                <div class="offcanvas-body">
                    <!-- fs-5 -->
                    <!-- justify-content-center align-items-center pe-3-->
                    <ul class="navbar-nav justify-content-start flex-grow-1 ">
                        <li class="nav-item mx-xxl-4 mx-xl-2">
                            <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page"
                                exact>Home</router-link>
                        </li>
                        <li class="nav-item mx-xxl-4 mx-xl-2">
                            <router-link :to="{ name: 'tracks' }" class="nav-link">Tracks</router-link>
                        </li>
                        <li class="nav-item mx-xxl-4 mx-xl-2">
                            <router-link :to="{ name: 'competitions' }" class="nav-link">Competitions</router-link>
                        </li>
                        <li class="nav-item mx-xxl-4 mx-xl-2">
                            <router-link :to="{ name: 'our-platforms' }" class="nav-link">Our platforms</router-link>
                        </li>
                        <li class="nav-item mx-xxl-4 mx-xl-2">
                            <router-link :to="{ name: 'readable-content' }" class="nav-link">Readable content</router-link>
                        </li>
                    </ul>

                    <div class="d-flex flex-lg-row d-none d-sm-none d-md-none d-lg-block d-xl-block">
                        <button class="btn rounded-3 me-3 d-lg-none d-xl-inline-block" id="time">
                            <img src="@/assets/images/navbar/time.png" alt="">
                            2.45.00
                        </button>
                        <button class="btn rounded-3 me-3 d-lg-none d-xl-inline-block" id="certificate">
                            <img src="@/assets/images/navbar/certificate.png" alt="">
                            250 XP
                        </button>
                        <!-- https://freefrontend.com/css-notifications/ -->
                        <!-- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_notification -->
                        <router-link :to="{ name: 'notification' }" class="btn me-3 text-reset" id="alert">
                            <img src="@/assets/images/navbar/notification.svg" alt="" class="position-relative">
                            <font-awesome-icon :icon="['fas', 'fa-circle']" />
                            <!-- https://getbootstrap.com/docs/5.3/components/badge/ -->
                            <!-- <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span> -->
                        </router-link>
                        <router-link :to="{ name: 'profile' }" class="btn" id="user">
                            <!-- <img src="@/assets/images/navbar/user.png" alt=""> -->
                            <img src="@/assets/images/profile/profile-pic-square.png" alt="">
                        </router-link>
                    </div>

                </div>
            </div>

            <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <router-link :to="{ name: 'notification' }" class="btn me-3 text-reset" id="alert">
                    <img src="@/assets/images/navbar/notification.svg" alt="">
                    <font-awesome-icon :icon="['fas', 'fa-circle']" />
                </router-link>
                <router-link :to="{ name: 'profile' }" class="btn" id="user">
                    <img src="@/assets/images/profile/profile-pic-square.png" alt="">
                </router-link>
            </div>

        </div>
    </nav>
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

            img {
                width: 119.614px;
                height: 40px;
            }

        }

        .navbar-toggler {

            border: 1px solid $pink;
            // box-shadow: none;

            img {
                width: 31px;
                height: 31px;
            }

        }

        .navbar-toggler:focus {
            box-shadow: none;
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

                padding-top: 0;

                ul {

                    li {

                        @include breakpoints(x-small) {
                            margin: 0 !important;
                        }

                        @include breakpoints(small) {
                            margin: 0 !important;
                        }

                        @include breakpoints(medium) {
                            margin: 0 !important;
                        }

                        a {

                            color: $white;

                            @include breakpoints(x-small) {
                                padding-top: 12px;
                                padding-bottom: 12px;
                                box-shadow: 0px 4px 4px 0px $box-shadow;
                            }

                            @include breakpoints(small) {
                                padding-top: 12px;
                                padding-bottom: 12px;
                                box-shadow: 0px 4px 4px 0px $box-shadow;
                            }

                            @include breakpoints(medium) {
                                padding-top: 12px;
                                padding-bottom: 12px;
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

                // First Div

                div {

                    button {

                        background: $linear-blue;
                        background-clip: padding-box;
                        -webkit-background-clip: padding-box;
                        -webkit-text-fill-color: $white;

                        img {
                            width: 24px;
                            height: 24px;
                        }

                    }

                }
            }

        }

        // Second Div

        div {

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

        }

        /* #alert:hover,
        #alert.router-link-exact-active {
            border: 1px solid $pink;
        } */

        #user:hover,
        #user.router-link-exact-active {
            border: 1px solid $pink;
        }


    }

}
</style>
