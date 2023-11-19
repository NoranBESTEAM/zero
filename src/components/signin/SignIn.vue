<template>
    <section id="sign-in">

        <div class="container">

            <!-- https://mdbootstrap.com/docs/standard/extended/registration/ -->

            <div class="row d-flex justify-content-center align-items-center">

                <div
                    class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-block d-sm-block d-md-block d-lg-block d-xl-block">

                    <div class="image-wrapper m-auto mb-3">
                        <img src="@/assets/images/navbar/logo1.png" alt="">
                    </div>

                    <h1 class="text-center mb-5">Log In</h1>

                    <form>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon2">
                                <!-- <font-awesome-icon :icon="['far', 'fa-envelope']" /> -->
                                <img src="@/assets/images/signup/envelope.svg" alt="">
                            </span>
                            <input type="email" class="form-control shadow-none" placeholder="Email address"
                                aria-label="Email" aria-describedby="basic-addon2" />
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">
                                <!-- <font-awesome-icon :icon="['fas', 'fa-lock']" /> -->
                                <img src="@/assets/images/signup/lock.svg" alt="">
                            </span>
                            <input type="password" class="form-control shadow-none" placeholder="Password"
                                aria-label="Password" aria-describedby="basic-addon3" />
                            <span class="input-group-text" id="basic-addon3">
                                <!-- <font-awesome-icon :icon="['far', 'fa-eye-slash']" /> -->
                                <img src="@/assets/images/signup/eye-slash.svg" alt="">
                            </span>
                        </div>

                        <!-- Checkbox -->
                        <div class="form-check mb-3">
                            <input class="form-check-input shadow-none border-0" type="checkbox" value="" id="form-checkbox" />
                            <label class="form-check-label" for="form-checkbox"> Remember me </label>
                        </div>

                        <button type="button" class="btn btn-lg w-100 mb-3" id="login">Log In</button>

                        <div class="mb-3">
                            <a href="#">Forgot password?</a>
                        </div>

                        <p class="text-center mb-3 myP">or</p>

                        <div class="social d-flex justify-content-center align-items-center mb-3">

                            <a href="https://www.google.com/" class="btn me-4 text-reset border-0">
                                <img src="@/assets/images/signup/Google.svg" alt="">
                            </a>

                            <a href="https://www.facebook.com/" class="btn me-4 text-reset border-0">
                                <img src="@/assets/images/signup/facebook.svg" alt="">
                            </a>

                            <a href="https://www.apple.com/" class="btn me-4 text-reset border-0">
                                <img src="@/assets/images/signup/Apple.svg" alt="">
                            </a>

                        </div>

                        <p class="text-center mb-3">
                            Don’t have account?
                            <router-link :to="{ name: 'sign-up' }" class="text-reset">
                                Sign Up
                            </router-link>
                        </p>

                        <router-link :to="{ name: '' }" class="btn mb-3 border-0 d-flex justify-content-center">
                            <font-awesome-icon :icon="['fas', 'fa-earth-americas']" class="me-2" />
                            اللغة العربية
                        </router-link>

                    </form>

                </div>

                <div class="col-lg-6 col-xl-6 d-none d-sm-none d-md-none d-lg-block d-xl-block">

                    <img src="@/assets/images/signup/signupImg.png" class="img-fluid" alt="">

                </div>

            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'SignIn',
}
</script>

<style lang="scss" scoped>
#sign-in {

    background: $my-gradient;

    // https://www.w3schools.com/cssref/pr_background-image.php
    /* The image used */
    // background-image: url("@/assets/images/signup/signupBG.png");
    /* Used if the image is unavailable */
    // background-color: $dark-mov;
    /* Center the image */
    // background-position: center;
    /* Do not repeat the image */
    // background-repeat: no-repeat;
    /* Resize the background image to cover the entire container */
    // background-size: cover;
    padding-top: 80px;
    height: 100vh;

    .image-wrapper {
        width: 239.227px;
        height: 80px;

        img {
            width: 100%;
            height: 100%;
            // object-fit: cover;
        }
    }

    h1 {
        color: $white;
    }

    form {
        .input-group {

            border: 1px solid $white;
            border-radius: 8px;

            input,
            span {
                background: transparent;
                border: none;
            }

            input{
                caret-color: $white;
            }

            span img {
                width: 16px;
                height: 16px;
            }

            input::placeholder {
                color: $white;
            }

            input:focus::placeholder {
                color: transparent;
            }
        }

        .form-check {

            /* input{
                background: transparent;
            } */
            .form-check-input:checked {
                background-color: $mov !important;
                border: none;
            }

            label {
                color: $white;
            }
        }

        #login {
            background: $linear-pink;
            background-clip: padding-box;
            -webkit-background-clip: padding-box;
            -webkit-text-fill-color: $white;
            
            box-shadow: 0px 4px 4px 0px rgba(87, 87, 87, 0.25);
        }

        p,
        a {
            color: $white;
        }

        // https://stackoverflow.com/questions/23584120/line-before-and-after-title-over-image
        .myP:before,
        .myP:after {
            content: "";
            display: inline-block;
            width: 47%;
            margin: 0 .5em 0 -55%;
            vertical-align: middle;
            border-bottom: 1px solid $white;
        }

        .myP:after {
            margin: 0 -55% 0 .5em;
        }

        .social img {
            width: 40px;
            height: 40px;
        }

    }

}
</style>