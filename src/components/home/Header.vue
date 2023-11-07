<template>
    <div class="header">
        <!-- https://www.browserstack.com/guide/position-text-over-image-using-css -->
        <!-- https://www.w3schools.com/howto/howto_css_image_text.asp -->
        <figure>
            <!-- For Large Screen -->
            <img src="@/assets/images/header/header.jpg" alt="Header Large Background"
                class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <!-- For Mobile Screen -->
            <img src="@/assets/images/header/header_mobile.jpg" alt="Header Small Background"
                class="d-block d-sm-block d-md-block d-lg-none d-xl-none">
            <div class="container">
                <figcaption>
                    <h1 class="mb-4 text-justify">Be a professional programmer</h1>
                    <h3 class="mb-4 text-justify">Create solutions for world issues</h3>
                    <p class="mb-4 text-justify">Digital Skills provides you with a funny and integrated content makes you
                        learn
                        programming easier.</p>
                    <div class="mb-4">
                        <router-link :to="{ name: 'sign-up' }" class="btn rounded-3 me-3">Register and
                            start</router-link>
                        <router-link :to="{ name: '' }" class="btn rounded-3">
                            <!-- <i class="fa-solid fa-circle-chevron-right"></i> -->
                            <font-awesome-icon :icon="['fas', 'fa-circle-chevron-right']" />
                            Watch the video
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="{ name: '' }" class="btn rounded-3 me-3">
                            <img src="@/assets/images/header/app_store.jpg" alt="" class="rounded-3">
                        </router-link>
                        <router-link :to="{ name: '' }" class="btn rounded-3 me-3">
                            <img src="@/assets/images/header/google_play.jpg" alt="" class="rounded-3">
                        </router-link>
                        <router-link :to="{ name: '' }" class="btn rounded-3 me-3 ">
                            <img src="@/assets/images/header/windows_store.jpg" alt="" class="rounded-3">
                        </router-link>
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {

    margin-top: 64px;

    figure {

        margin-bottom: 0;
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        figcaption {

            position: absolute;
            top: 15%;

            @include breakpoints(x-small) {
                top: 0;
            }

            @include breakpoints(small) {
                top: 5%;
            }

            @include breakpoints(medium) {
                top: 5%;
            }

            @include breakpoints(large) {
                top: 5%;
            }

            @include breakpoints(x-Large) {
                top: 5%;
            }

            h1 {
                color: $white;
                font-size: 40px;

                @include breakpoints(x-small) {
                    font-size: revert;
                }

                @include breakpoints(small) {
                    // font-size: 24px; 
                    font-size: revert;
                }

                @include breakpoints(large) {
                    font-size: revert;
                }
            }

            h3 {
                color: $white;
                font-size: 32px;

                @include breakpoints(x-small) {
                    font-size: revert;
                }

                @include breakpoints(small) {
                    // font-size: 18px;
                    font-size: revert;
                }

                @include breakpoints(large) {
                    font-size: revert;
                }
            }

            p {
                width: 455px;
                color: $white;
                font-size: 18px;

                @include breakpoints(x-small) {
                    font-size: revert;
                }

                @include breakpoints(small) {
                    // font-size: 14px;
                    font-size: revert;
                }

                @include breakpoints(large) {
                    font-size: revert;
                }
            }

            div:nth-of-type(1) a {
                border: 1px solid $pink;
                background: $linear-pink;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

                display: inline-flex;
                justify-content: center;
                align-items: center;

                @include breakpoints(x-small) {
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.875rem;
                    --bs-btn-border-radius: var(--bs-border-radius-sm);
                }

                @include breakpoints(small) {
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.875rem;
                    --bs-btn-border-radius: var(--bs-border-radius-sm);
                }

                svg {
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                    color: $pink;

                    @include breakpoints(x-small) {
                        width: 16px;
                        height: 16px;
                    }

                    @include breakpoints(small) {
                        width: 16px;
                        height: 16px;
                    }

                    @include breakpoints(medium) {
                        width: 16px;
                        height: 16px;
                    }
                }
            }

            div:nth-of-type(1) a:hover,
            div:nth-of-type(1) a.router-link-exact-active {
                background: $linear-pink;
                background-clip: padding-box;
                -webkit-background-clip: padding-box;
                -webkit-text-fill-color: $white;

                svg {
                    color: $white;
                }
            }

            div:nth-of-type(2) a {
                width: 130px;
                height: 40px;
                border: 0.5px solid #FFF;
                padding: 0;

                @include breakpoints(x-small) {
                    width: 104px;
                    height: 32px;
                }

                @include breakpoints(small) {
                    width: 104px;
                    height: 32px;
                }
                
            }

            div:nth-of-type(2) a img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }

    }

}
</style>