<template>
    <section id="support">

        <div class="container">

            <ProfileNavbar />
            <router-view />

            <div class="row mt-4">

                <div class="col-12 col-md-6 my-auto" id="contact">

                    <h5 class="mb-3 d-none d-sm-none d-md-block">Technical support</h5>

                    <h6 class="mb-3">Contact us</h6>

                    <p>
                        <img src="@/assets/images/profile/phone-icon.webp" alt="" class="me-2">
                        +9-6653-1577-796
                    </p>

                    <p>
                        <img src="@/assets/images/profile/email-icon.webp" alt="" class="me-2">
                        <a href="mailto:info@Steamademy.com" class="text-reset">info@thaka.sa</a>
                    </p>

                    <p>
                        <img src="@/assets/images/profile/loation-icon.webp" alt="" class="me-2">
                        Saudi Arabia - Egypt - United Arab Emirates
                    </p>

                    <h6 class="mt-3 mb-3">Keep in touch</h6>

                    <a href="https://www.linkedin.com/" class="me-4 text-reset">
                        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                    </a>

                    <a href="https://www.instagram.com/" class="me-4 text-reset">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>

                    <a href="https://twitter.com/" class="me-4 text-reset">
                        <font-awesome-icon :icon="['fab', 'x-twitter']" />
                    </a>

                    <a href="https://www.facebook.com/" class="me-4 text-reset">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>

                </div>

                <div class="col-12 col-md-6 text-center" id="robot_img">
                    <div class="image_wrapper">
                        <img src="@/assets/images/profile/robot-assistant.webp" alt="">
                    </div>
                </div>

            </div>

        </div>

    </section>
</template>

<script>
import ProfileNavbar from '@/components/profile/ProfileNavbar.vue';
export default {
    name: 'Support',
    components: {
        ProfileNavbar,
    },
}
</script>

<style lang="scss" scoped>
#support {
    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;

    .row {

        @include breakpoints(x-small) {
            margin-left: 8px;
            margin-right: 8px;
        }

        #contact {

            color: $white;

            @include breakpoints(x-small) {
                order: 2;
            }

            @include breakpoints(small) {
                order: 2;
            }

            h5 {
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            h6 {
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            p {
                color: $label-color;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;

                img {
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                }
            }

            a {
                svg {
                    width: 20px;
                    height: 20px;
                }
            }

            a:hover {
                svg {
                    color: $orange;
                }
            }

        }

        #robot_img {

            background-color: $primary;
            border-radius: 4px;
            padding: 40px 120px 0px 120px;

            @include breakpoints(x-small) {
                order: 1;
                margin-bottom: 24px;
                padding: 40px 40px 0px 40px;
            }

            @include breakpoints(small) {
                order: 1;
                margin-bottom: 24px;
            }

            @include breakpoints(medium) {
                padding: 40px 40px 0px 40px;
            }

            .image_wrapper {

                // https://imageresizer.com/

                width: 420px;
                height: 316px;

                @include breakpoints(x-small) {
                    width: 100%;
                    height: 100%;
                }

                @include breakpoints(small) {
                    width: 300px;
                    height: 226px;
                }

                @include breakpoints(medium) {
                    width: 280px;
                    height: 211px;
                }

                @include breakpoints(large) {
                    width: 240px;
                    height: 181px;
                    // margin-top: 34px;
                }

                @include breakpoints(x-Large) {
                    width: 330px;
                    height: 249px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

        }

    }

}
</style>