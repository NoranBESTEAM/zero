<template>
    <div id="mail">
        <!-- https://www.browserstack.com/guide/position-text-over-image-using-css -->
        <!-- https://www.w3schools.com/howto/howto_css_image_text.asp -->
        <!-- For Large Screen -->
        <figure class="d-none d-lg-block">
            <img src="@/assets/images/mail/mail.webp" alt="Mail Large Background">
            <div class="container">
                <figcaption>
                    <h5 class="mb-4">Subscribe newsletter to get the latest updates.</h5>
                    <div class="input-group">
                        <input type="email" class="form-control" placeholder="Enter your email" aria-label="Email"
                            aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1">
                            <!-- <i class="fa-solid fa-arrow-right"></i> -->
                            <font-awesome-icon :icon="['fas', 'fa-arrow-right']" id="inputIco" />
                        </span>
                    </div>
                </figcaption>
            </div>
        </figure>
        <!-- For Small Screen -->
        <section class="d-block d-lg-none">
            <div class="container">
                <div class="img_wrapper">
                    <img src="@/assets/images/mail/mail_responsive_img.webp" alt="">
                </div>
                <h5 class="mt-4 mb-4">Subscribe newsletter to get the latest updates.</h5>
                <div class="input-group">
                    <input type="email" class="form-control" placeholder="Enter your email" aria-label="Email"
                        aria-describedby="basic-addon1" />
                    <span class="input-group-text" id="basic-addon1">
                        <!-- <i class="fa-solid fa-arrow-right"></i> -->
                        <font-awesome-icon :icon="['fas', 'fa-arrow-right']" id="inputIco" />
                    </span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Mail',
}
</script>

<style lang="scss" scoped>
#mail {

    // For Large Screen

    figure {

        margin-bottom: 0;
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        figcaption {

            position: absolute;

            top: 200px;

            @include breakpoints(large) {
                top: 120px;
            }

            @include breakpoints(x-Large) {
                top: 150px;
            }

        }

    }

    // For Small Screen

    section {

        background-color: $mov;
        padding-top: 40px;
        padding-bottom: 40px;

        .img_wrapper {

            width: 228px;
            height: 228px;
            margin: auto;
            

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }

    }

    // For All Screen

    h5 {
        color: $white;
        font-size: 18px;
        line-height: 24px;
    }

    .input-group {

        input:placeholder{
            font-size: 16px;
            line-height: 24px;
        }

        input:focus,
        input:focus+span {
            box-shadow: 0 0 8px 0 $box-shadow-two;
            border-color: $white;
        }

        input:focus::placeholder {
            color: $gray;
        }

        span {
            background: $linear-pink;
            color: $white;
            cursor: pointer;

            #inputIco {
                width: 24px;
                height: 24px;
            }
        }

    }

}
</style>