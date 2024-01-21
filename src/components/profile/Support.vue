<template>
    <section id="support">

        <div class="container">

            <!-- <ProfileNavbar />
            <router-view /> -->

            <!-- mt-4 -->
            <div class="row">

                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto" id="contact">

                    <h5 class="mb-3 d-none d-sm-none d-md-block">Technical support</h5>

                    <h6 class="mb-3">Contact us</h6>

                    <p>
                        <img src="@/assets/images/profile/phone-icon.webp" alt="" class="me-2">
                        +966531577796
                    </p>

                    <p>
                        <img src="@/assets/images/profile/email-icon.webp" alt="" class="me-2">
                        info@thaka.sa
                    </p>

                    <p>
                        <img src="@/assets/images/profile/loation-icon.webp" alt="" class="me-2">
                        Saudi Arabia - Egypt - United Arab Emirates
                    </p>

                    <h6 class="mt-3 mb-3">Keep in touch</h6>

                    <a href="https://www.facebook.com/" class="me-4 text-reset">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>

                    <a href="https://twitter.com/" class="me-4 text-reset">
                        <font-awesome-icon :icon="['fab', 'x-twitter']" />
                    </a>

                    <a href="https://www.instagram.com/" class="me-4 text-reset">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>

                    <a href="https://www.linkedin.com/" class="me-4 text-reset">
                        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                    </a>

                </div>

                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center" id="robot_img">
                    <img src="@/assets/images/profile/robot-assistant.webp" alt="">
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
                // color: $orange;
            }

            h6 {
                font-size: 16px;
                // color: $orange;
            }

            p {
                font-size: 16px;
                color: $label-color;

                img {
                    width: 24px;
                    height: 24px;
                    object-fit: cover;
                }
            }

        }

        #robot_img {

            background-color: $primary;
            border-radius: 4px;
            padding-top: 40px;

            @include breakpoints(x-small) {
                order: 1;
                margin-top: 26px;
                margin-bottom: 26px;
            }

            @include breakpoints(small) {
                order: 1;
                margin-top: 26px;
                margin-bottom: 26px;
            }

            img {
                width: 353px;
                height: 266px;

                @include breakpoints(x-small) {
                    width: 311px;
                    height: 234px;
                }
            }
        }

    }

}
</style>