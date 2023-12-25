<template>
    <section id="header">
        <!-- https://www.browserstack.com/guide/position-text-over-image-using-css -->
        <!-- https://www.w3schools.com/howto/howto_css_image_text.asp -->
        <figure>
            <!-- For Large Screen -->
            <img src="@/assets/images/header/header.jpg" alt="Header Large Background"
                class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <!-- For Mobile Screen -->
            <img src="@/assets/images/header/header_mobile.jpg" alt="Header Small Background"
                class="d-none d-sm-block d-md-block d-lg-none d-xl-none">
            <div class="container">
                <!-- class="figure-caption" -->
                <figcaption>
                    <h1 class="mb-4">Be a professional programmer</h1>
                    <h3 class="mb-4">Create solutions for world issues</h3>
                    <p class="mb-4">
                        Digital Skills provides you with a funny and integrated content makes you learn programming easier.
                    </p>
                    <div>
                        <router-link :to="{ name: 'tracks' }" class="btn rounded-3 me-3">
                            Start Your Journey
                        </router-link>
                        <router-link :to="{ name: '' }" class="btn rounded-3">
                            <!-- <i class="fa-solid fa-circle-chevron-right"></i> -->
                            <!-- <font-awesome-icon :icon="['fas', 'fa-circle-chevron-right']" /> -->
                            <img src="@/assets/images/header/Play_icon.svg" alt="" class="me-2">
                            Watch the video
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="{ name: '' }" class="btn rounded-3 me-3 mb-3 mb-sm-0">
                            <img src="@/assets/images/header/app_store.jpg" alt="" class="rounded-3">
                        </router-link>
                        <router-link :to="{ name: '' }" class="btn rounded-3 me-3 mb-3 mb-sm-0">
                            <img src="@/assets/images/header/google_play.jpg" alt="" class="rounded-3">
                        </router-link>
                        <router-link :to="{ name: '' }" class="btn rounded-3 me-3 mb-3 mb-sm-0">
                            <img src="@/assets/images/header/windows_store.jpg" alt="" class="rounded-3">
                        </router-link>
                    </div>
                </figcaption>
            </div>
        </figure>
    </section>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>
#header {

    margin-top: 64px;
    color: $white;
    // height: 676px; // In Large Screen
    // height: 534px; // In Small Screen

    @include breakpoints(x-small) {
        background-color: $dark-mov;
        padding-top: 40px;
        // padding-bottom: 40px;
    }

    figure {

        img {
            width: 100%;
            height: 100%;
        }

        margin-bottom: 0;

        position: relative;

        @include breakpoints(x-small) {
            position: initial;
        }

        figcaption {

            position: absolute;

            top: 130px;

            @include breakpoints(x-small) {
                position: initial;
            }

            @include breakpoints(small) {
                top: 0;
            }

            @include breakpoints(medium) {
                top: 0;
            }

            @include breakpoints(large) {
                top: 0;
            }

            @include breakpoints(x-Large) {
                top: 0;
            }

            h1 {
                font-size: 40px;
                line-height: normal;
                // margin-bottom: 24px;

                @include breakpoints(x-small) {
                    font-size: 32px;
                    margin-top: 0;
                }

                @include breakpoints(small) {
                    // font-size: 24px;
                    font-size: 32px;
                }

                @include breakpoints(large) {
                    font-size: 32px;
                }

            }

            h3 {
                font-size: 32px;
                line-height: normal; 
                // margin-bottom: 24px;

                @include breakpoints(x-small) {
                    font-size: 28px;
                }

                @include breakpoints(small) {
                    // width: 262px;
                    // font-size: 18px;
                    font-size: 28px;
                }

                @include breakpoints(large) {
                    font-size: 28px;
                }
            }

            p {
                width: 455px;
                font-size: 18px;
                // line-height: 24px;
                text-align: justify;
                // margin-bottom: 24px;

                @include breakpoints(x-small) {
                    font-size: 16px;
                    width: initial;
                }

                @include breakpoints(small) {
                    // width: 256px;
                    // font-size: 14px;
                    font-size: 16px;
                }

                @include breakpoints(large) {
                    font-size: 16px;
                }
            }

            div:nth-of-type(1) {

                margin-bottom: 40px;

                @include breakpoints(small) {
                    margin-bottom: 24px;
                }

                @include breakpoints(large) {
                    margin-bottom: 24px;
                }

                a {
                    border: 1px solid $pink;
                    background: $linear-pink;
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;

                    @include breakpoints(x-small) {
                        display: block;
                        margin-bottom: 8px;
                        margin-right: 0 !important;
                    }

                    img {
                        width: 24px;
                        height: 24px;
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

            div:nth-of-type(2) {

                @include breakpoints(x-small) {
                    text-align: center;
                }

                a {
                    width: 130px;
                    height: 40px;
                    border: 0.5px solid $white;
                    padding: 0;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;

                    }
                }

            }

        }
    }

}
</style>