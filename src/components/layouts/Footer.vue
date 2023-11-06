<template>
    <!-- https://mdbootstrap.com/docs/standard/navigation/footer/ -->

    <footer>

        <div class="container">

            <!-- Grid row -->

            <div class="row pb-3">

                <!-- Grid column -->

                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 mx-auto" id="about-us">
                    <img src="@/assets/images/navbar/logo1.png" alt="Footer Logo" id="logoImg">
                    <p class="mt-3 mb-0 text-justify">Digital Skills provides you with a funny and integrated content makes
                        you learn programming easier.</p>
                </div>

                <!-- Grid column -->

                <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 mx-auto">
                    <h6 class="fw-bold mb-3">Fast links</h6>
                    <p class="mb-3">Home</p>
                    <p class="mb-3">Tracks</p>
                    <p class="mb-3">Our platforms</p>
                    <p class="mb-0">Readable content</p>
                </div>

                <!-- Grid column -->

                <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 mx-auto">
                    <h6 class="fw-bold mb-3">Help & Support</h6>
                    <p class="mb-3">Terms and Conditions</p>
                    <p class="mb-3">Privacy policy</p>
                    <p class="mb-0">Support</p>
                </div>

                <!-- Grid column -->

                <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 mx-auto" id="contact">
                    <h6 class="fw-bold mb-3">Contact us</h6>
                    <p class="mb-3">
                        <!-- <i class="fa-solid fa-phone"></i> -->
                        <font-awesome-icon :icon="['fas', 'fa-phone']" />
                        +966531577796
                    </p>
                    <p class="mb-3">
                        <!-- <i class="fa-solid fa-envelope"></i> -->
                        <font-awesome-icon :icon="['fas', 'fa-envelope']" />
                        info@thaka.sa
                    </p>
                    <p class="mb-0">
                        <!-- <i class="fa-solid fa-location-dot"></i> -->
                        <font-awesome-icon :icon="['fas', 'fa-location-dot']" />
                        Saudi Arabia
                    </p>
                </div>

                <!-- Grid column -->

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
                    <p class="mb-3">Keep in touch</p>
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

            <div class="text-center" id="copyright">
                All rights reserved &copy;
                <a class="text-reset fw-bold" href="https://mdbootstrap.com/">{{ new Date().getFullYear() }}</a>
                ZERO1 Skills
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

        .row {

            padding-top: 40px;
            border-bottom: 1px solid $white;

            div {

                @include breakpoints(x-small) {
                    margin-top: 24px;
                }

                @include breakpoints(small) {
                    margin-top: 24px;
                }

                @include breakpoints(medium) {
                    margin-top: 24px;
                }

                @include breakpoints(large) {
                    margin-top: 24px;
                }

                .input-group {

                    input:focus,
                    input:focus+span {
                        box-shadow: 0 0 8px 0 #D7DADD;
                    }

                    input:focus::placeholder {
                        color: $gray;
                    }

                    span {
                        background: $linear-pink;
                        color: #FFF;
                        cursor: pointer;
                    }

                }

                a {
                    &:hover {
                        color: $orange !important;
                    }
                }

            }

            #about-us #logoImg {
                width: 143.536px;
                height: 48px;
            }

            #contact svg {
                margin-right: 4px;
            }

        }

        #copyright {

            padding: 16px 0;

            a {
                &:hover {
                    color: $orange !important;
                }
            }
            
        }

    }

}
</style>