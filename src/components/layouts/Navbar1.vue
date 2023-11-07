<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <!-- Logo -->
            <router-link to="/" class="navbar-brand">
                <img src="@/assets/images/navbar/logo1.png" alt="ZEROLogo" />
            </router-link>
            <!-- Toggle Button -->
            <button class="navbar-toggler rounded-3" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <img src="@/assets/images/navbar/gg_menu-right.svg" alt="Toggler Icon">
            </button>
            <!-- Sidebar -->
            <div class="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
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
                        <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                            <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li> -->
                    </ul>
                    <!-- <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> -->
                    <!-- Login / Sign up -->
                    <div class="d-flex flex-column flex-lg-row justify-content-start align-items-start gap-3">
                        <router-link :to="{ name: 'login' }" class="btn rounded-3">Login</router-link>
                        <router-link :to="{ name: 'sign-up' }" class="btn rounded-3">Sign Up</router-link>
                    </div>
                </div>
            </div>
            <router-link :to="{ name: '' }" class="btn rounded-3 lang">
                <font-awesome-icon :icon="['fas', 'fa-earth-americas']" /> Ar
                <!-- <img src="@/assets/images/navbar/navbar_icon.svg" alt="Lang Icon">Ar -->
            </router-link>
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
    box-shadow: 0px 4px 4px 0px rgba(87, 87, 87, 0.25);

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

            .offcanvas-header {

                @include breakpoints(x-small) {
                    background: $dark-mov;
                }

                @include breakpoints(small) {
                    background: $dark-mov;
                }

                @include breakpoints(medium) {
                    background: $dark-mov;
                }

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

                @include breakpoints(x-small) {
                    background: $dark-mov;
                }

                @include breakpoints(small) {
                    background: $dark-mov;
                }

                @include breakpoints(medium) {
                    background: $dark-mov;
                }

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
                                box-shadow: 0px 4px 4px 0px rgba(87, 87, 87, 0.25);
                            }

                            @include breakpoints(small) {
                                padding-top: 12px;
                                padding-bottom: 12px;
                                box-shadow: 0px 4px 4px 0px rgba(87, 87, 87, 0.25);
                            }

                            @include breakpoints(medium) {
                                padding-top: 12px;
                                padding-bottom: 12px;
                                box-shadow: 0px 4px 4px 0px rgba(87, 87, 87, 0.25);
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

                    @include breakpoints(x-small) {
                        gap: 0 !important;
                    }

                    @include breakpoints(small) {
                        gap: 0 !important;
                    }

                    @include breakpoints(medium) {
                        gap: 0 !important;
                    }

                    a {

                        border: 1px solid $pink;

                        background: $linear-pink;
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;

                        @include breakpoints(x-small) {
                            margin-top: 12px;
                            margin-bottom: 12px;
                            // box-shadow: 0px 4px 4px 0px rgba(87, 87, 87, 0.25);
                        }

                        @include breakpoints(small) {
                            margin-top: 12px;
                            margin-bottom: 12px;
                            // box-shadow: 0px 4px 4px 0px rgba(87, 87, 87, 0.25);
                        }

                        @include breakpoints(medium) {
                            margin-top: 12px;
                            margin-bottom: 12px;
                            // box-shadow: 0px 4px 4px 0px rgba(87, 87, 87, 0.25);
                        }

                    }

                    a:hover,
                    a.router-link-exact-active {

                        background: $linear-pink;
                        background-clip: padding-box;
                        -webkit-background-clip: padding-box;
                        -webkit-text-fill-color: $white;

                    }

                }

            }

        }

        a.lang {

            border: 1px solid $pink;

            background: $linear-pink;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            margin-left: 1rem !important;

            @include breakpoints(x-small) {
                margin-left: 0 !important;
            }

            @include breakpoints(small) {
                margin-left: 0 !important;
            }

            @include breakpoints(medium) {
                margin-left: 0 !important;
            }

            svg {
                width: 16px;
                height: 16px;
                margin-right: 8px;
                color: $pink;
            }

        }

        a.lang:hover,
        a.lang.router-link-exact-active {

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
</style>
