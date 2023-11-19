<template>
    <!-- https://mdbootstrap.com/docs/standard/navigation/footer/ -->

    <footer>

        <div class="container">

            <!-- Grid row -->

            <div class="row pb-3">

                <!-- Grid column -->

                <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 mx-auto" id="about-us">
                    <img src="@/assets/images/navbar/logo1.png" alt="Footer Logo" id="logoImg">
                    <!-- mb-0 -->
                    <p class="mt-2 text-justify">Digital Skills provides you with a funny and integrated content makes
                        you learn programming easier.</p>
                </div>

                <!-- Grid column -->

                <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 mx-auto">
                    <h6 class="fw-bold mb-3">Fast links</h6>
                    <p>Home</p>
                    <p>Tracks</p>
                    <p>Our platforms</p>
                    <p>Readable content</p>
                </div>

                <!-- Grid column -->

                <!-- mt-sm-4 mt-md-4 mt-lg-4 mt-xl-0 -->
                <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 mx-auto">
                    <h6 class="fw-bold mb-3">Help & Support</h6>
                    <p>Terms and Conditions</p>
                    <p>Privacy policy</p>
                    <p>Support</p>
                </div>

                <!-- Grid column -->

                <!-- mt-sm-4 mt-md-4 mt-lg-4 mt-xl-0 -->
                <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 mx-auto">
                    <h6 class="fw-bold mb-3">Contact us</h6>
                    <p>
                        <!-- <i class="fa-solid fa-phone"></i> -->
                        <font-awesome-icon :icon="['fas', 'fa-phone']" />
                        +966531577796
                    </p>
                    <p>
                        <!-- <i class="fa-solid fa-envelope"></i> -->
                        <font-awesome-icon :icon="['fas', 'fa-envelope']" />
                        info@thaka.sa
                    </p>
                    <p>
                        <!-- <i class="fa-solid fa-location-dot"></i> -->
                        <font-awesome-icon :icon="['fas', 'fa-location-dot']" />
                        Saudi Arabia
                    </p>
                </div>

                <!-- Grid column -->

                <!-- mt-sm-4 mt-md-4 mt-lg-4 mt-xl-0 -->
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 mx-auto">
                    <h6 class="fw-bold mb-3">Last news</h6>
                    <!-- Email input -->
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Enter your email" aria-label="Email"
                            aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1">
                            <!-- <i class="fa-solid fa-arrow-right"></i> -->
                            <font-awesome-icon :icon="['fas', 'fa-arrow-right']" class="inputIco" />
                        </span>
                    </div>
                    <h6 class="mb-3">Keep in touch</h6>
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

            <div class="text-center pt-3" id="copyright">
                All rights reserved
                <a class="text-reset fw-bold" href="">ZERO1 Skills</a>
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
        padding-bottom: 40px;

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
                color: $orange;
            }

            p {
                font-size: 14px;
            }

            svg {
                margin-right: 4px;
            }

            .input-group {

                input::placeholder {
                    font-size: 12px;
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
            font-size: 12px;
        }

    }
}
</style>