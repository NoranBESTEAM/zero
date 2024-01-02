<template>
    <!-- https://www.youtube.com/watch?v=zOtxP7ahi4M -->

    <!-- Navbar -->

    <nav class="navbar navbar-expand-xl fixed-top">

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
                            <router-link :to="{ name: 'tracks' }" class="nav-link">Tracks</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'competitions' }" class="nav-link">Competitions</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'our-platforms' }" class="nav-link">Our platforms</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'readable-content' }" class="nav-link">Readable content</router-link>
                        </li>
                    </ul>

                    <!-- Login / Sign up -->
                    <div class="d-none d-xl-flex justify-content-center align-items-center gap-3">
                        <!-- me-3 -->
                        <router-link :to="{ name: 'login' }" class="btn rounded-3">
                            Login
                        </router-link>
                        <router-link :to="{ name: 'sign-up' }" class="btn rounded-3">
                            Sign Up
                        </router-link>
                        <router-link :to="{ name: '' }" class="btn rounded-3">
                            <font-awesome-icon :icon="['fas', 'fa-earth-americas']" /> Ar
                            <!-- <img src="@/assets/images/navbar/navbar_icon.svg" alt="Lang Icon">Ar -->
                        </router-link>
                    </div>

                </div>

            </div>

            <div class="d-flex d-xl-none justify-content-end align-items-center gap-3" id="responsive">
                <router-link :to="{ name: 'login' }" class="btn rounded-3">
                    Start
                </router-link>
                <router-link :to="{ name: '' }" class="btn rounded-3">
                    <font-awesome-icon :icon="['fas', 'fa-earth-americas']" /> Ar
                    <!-- <img src="@/assets/images/navbar/navbar_icon.svg" alt="Lang Icon">Ar -->
                </router-link>
            </div>


        </div>

    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
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

                    a {

                        padding: 8px 16px;

                        font-size: 18px;

                        line-height: 24px;

                        border: 1px solid $pink;

                        background: $linear-pink;
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;

                        svg {
                            width: 16px;
                            height: 16px;
                            margin-right: 8px;
                            color: $pink;
                        }

                    }

                    a:hover,
                    a.router-link-exact-active {

                        background: $linear-pink;
                        background-clip: padding-box;
                        -webkit-background-clip: padding-box;
                        -webkit-text-fill-color: $white;

                        svg {
                            color: $white;
                        }

                    }

                }

            }

        }

        div#responsive {

            a {

                padding: 8px 16px;

                font-size: 18px;

                line-height: 24px;

                border: 1px solid $pink;

                background: $linear-pink;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

                svg {
                    width: 16px;
                    height: 16px;
                    margin-right: 8px;
                    color: $pink;
                }
            }

            a:hover,
            a.router-link-exact-active {

                background: $linear-pink;
                background-clip: padding-box;
                -webkit-background-clip: padding-box;
                -webkit-text-fill-color: $white;

                svg {
                    color: $white;
                }

            }

        }

    }

}
</style>