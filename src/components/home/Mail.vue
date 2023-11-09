<template>
    <div class="mail">
        <!-- https://www.browserstack.com/guide/position-text-over-image-using-css -->
        <!-- https://www.w3schools.com/howto/howto_css_image_text.asp -->
        <figure>
            <!-- For Large Screen -->
            <img src="@/assets/images/mail/mail.jpg" alt="Mail Large Background"
                class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <!-- For Mobile Screen -->
            <img src="@/assets/images/mail/mail_responsive.jpg" alt="Mail Small Background"
                class="d-block d-sm-block d-md-block d-lg-none d-xl-none">
            <div class="container">
                <figcaption>
                    <h5 class="fw-bold mb-3">Subscribe newsletter to get the latest updates.</h5>
                    <div class="input-group">
                        <input type="email" class="form-control" placeholder="Enter your email" aria-label="Email"
                            aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1">
                            <!-- <i class="fa-solid fa-arrow-right"></i> -->
                            <font-awesome-icon :icon="['fas', 'fa-arrow-right']" class="inputIco" />
                        </span>
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
</template>

<script>
export default {
    name: 'Mail',
}
</script>

<style lang="scss" scoped>
.mail {

    figure {

        margin-bottom: 0;
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        figcaption {

            position: absolute;
            top: 50%;

            @include breakpoints(x-small) {
                top: 85%;
                left: 4%;
            }

            @include breakpoints(small) {
                top: 82%;
                left: 15%;
            }

            @include breakpoints(medium) {
                top: 85%;
                left: 30%;
            }

            h5 {
                color: $white;
            }

            .input-group {

                input:focus,
                input:focus+span {
                    box-shadow: 0 0 8px 0 #D7DADD;
                    border-color: $white;
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

        }

    }

}
</style>