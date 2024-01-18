<template>

    <!-- https://mdbootstrap.com/docs/standard/navigation/footer/ -->

    <footer>

        <div class="container">

            <!-- Grid row -->

            <div class="row pb-2">

                <!-- Grid column -->

                <div class="col-12 col-sm-6 col-xl-3 mx-auto" id="about-us">
                    <img src="@/assets/images/navbar/logo1.webp" alt="Footer Logo" id="logoImg">
                    <!-- mb-0 -->
                    <p class="mt-2">Digital Skills provides you with a funny and integrated content makes
                        you learn programming easier.</p>
                </div>

                <!-- Grid column -->

                <div class="col-12 col-sm-6 col-xl-2 mx-auto">
                    <h6 class="fw-bold mb-2">Fast links</h6>
                    <p>Home</p>
                    <p>Tracks</p>
                    <p>Our platforms</p>
                    <p>Readable content</p>
                </div>

                <!-- Grid column -->

                <!-- mt-sm-4 mt-md-4 mt-lg-4 mt-xl-0 -->
                <div class="col-12 col-sm-6 col-xl-2 mx-auto">
                    <h6 class="fw-bold mb-2">Help & Support</h6>
                    <p>Terms and Conditions</p>
                    <p>Privacy policy</p>
                    <p>Support</p>
                </div>

                <!-- Grid column -->

                <!-- mt-sm-4 mt-md-4 mt-lg-4 mt-xl-0 -->
                <div class="col-12 col-sm-6 col-xl-2 mx-auto">
                    <h6 class="fw-bold mb-2">Contact us</h6>
                    <p>
                        <!-- <i class="fa-solid fa-phone"></i> -->
                        <font-awesome-icon :icon="['fas', 'fa-phone']" />
                        +9-6653-1577-796
                    </p>
                    <p>
                        <!-- <i class="fa-solid fa-envelope"></i> -->
                        <font-awesome-icon :icon="['fas', 'fa-envelope']" />
                        <a href="mailto:info@Steamademy.com" class="text-reset">info@thaka.sa</a>
                    </p>
                    <p>
                        <!-- <i class="fa-solid fa-location-dot"></i> -->
                        <font-awesome-icon :icon="['fas', 'fa-location-dot']" />
                        Saudi Arabia
                    </p>
                </div>

                <!-- Grid column -->

                <!-- mt-sm-4 mt-md-4 mt-lg-4 mt-xl-0 -->
                <div class="col-12 col-sm-12 col-xl-3 mx-auto">
                    <h6 class="fw-bold mb-2">Last news</h6>
                    <!-- Email input -->
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Enter your email" aria-label="Email"
                            aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1">
                            <!-- <i class="fa-solid fa-arrow-right"></i> -->
                            <font-awesome-icon :icon="['fas', 'fa-arrow-right']" class="inputIco" />
                        </span>
                    </div>
                    <h6 class="mb-2">Keep in touch</h6>
                    <!-- Social Links -->
                    <div>
                        <a href="https://www.facebook.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-facebook-f"></i> -->
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </a>
                        <a href="https://twitter.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-x-twitter"></i> -->
                            <font-awesome-icon :icon="['fab', 'x-twitter']" />
                        </a>
                        <a href="https://www.instagram.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-instagram"></i> -->
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                        <a href="https://www.linkedin.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-linkedin-in"></i> -->
                            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                        </a>
                    </div>
                </div>

            </div>

            <!-- Copyright -->

            <div class="text-center pt-2 pb-2" id="copyright">
                All rights reserved For
                <a class="text-reset fw-bold" href="">Thakaa International</a> Company
                &copy; {{ new Date().getFullYear() }}
            </div>

        </div>

    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
footer {

    background: $footer-bg;
    color: $white;

    .container {

        padding-top: 40px;
        // padding-bottom: 40px;

        a {
            &:hover {
                color: $orange !important;
            }
        }

        .row {

            @include breakpoints(x-small) {
                margin-right: 0 !important;
                margin-left: 0 !important;
            }

            border-bottom: 1px solid $white;

            #about-us {
                #logoImg {
                    width: 143.536px;
                    height: 48px;
                }
            }

            h6 {
                font-size: 16px;
                color: $orange;
                line-height: 24px;
                @include breakpoints(x-small) {
                    margin-top: 8px;
                }
                @include breakpoints(small) {
                    margin-top: 8px;
                }
                @include breakpoints(medium) {
                    margin-top: 8px;
                }
                @include breakpoints(large) {
                    margin-top: 8px;
                }
            }

            p {
                font-size: 14px;
                line-height: 24px;
                margin-bottom: 8px;
            }

            svg {
                margin-right: 4px;
            }

            .input-group {

                @include breakpoints(x-small) {
                    width: 80%;
                }

                @include breakpoints(small) {
                    width: 80%;
                }

                @include breakpoints(medium) {
                    width: 80%;
                }

                @include breakpoints(large) {
                    width: 80%;
                }

                input::placeholder {
                    font-size: 12px;
                    line-height: 24px;
                }

                input:focus,
                input:focus+span {
                    box-shadow: 0 0 8px 0 $box-shadow-two;
                }

                input:focus::placeholder {
                    color: $gray;
                }

                span {
                    background: $linear-pink;
                    color: $white;
                    cursor: pointer;
                }

            }

            /* div:not(:first-child) {
                @include breakpoints(x-small) {
                    margin-top: 24px;
                }
            } */

        }

        #copyright {
            font-size: 11px;
            line-height: 24px;

            a {
                color: $orange !important;
            }
        }

    }
}
</style>