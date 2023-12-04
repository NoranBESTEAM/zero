<template>
    <section id="wallet">

        <div class="container">

            <ProfileNavbar />
            <router-view />

            <div id="my_cards" class="mt-4 mb-4 pb-4">

                <h5 class="mb-4">My cards</h5>

                <div class="row">

                    <!-- -------------------------------------------------------------- -->

                    <div class="col-md-9 col-lg-9 col-xl-8">

                        <!-- -------------------------------------------------------------- -->

                        <!-- For Large Screen -->

                        <div class="large_screen d-none d-sm-none d-md-none d-lg-block d-xl-block">

                            <!-- data-bs-ride="carousel" -->
                            <div id="addCardExampleIndicators" class="carousel slide" data-bs-keyboard="true">

                                <div class="carousel-inner">

                                    <div class="carousel-item active">
                                        <div class="card-wrapper">
                                            <div class="card">
                                                <div class="image-wrapper">
                                                    <img src="@/assets/images/profile/card_blue.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="image-wrapper">
                                                    <img src="@/assets/images/profile/card_orange.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="card-wrapper">
                                            <div class="card">
                                                <div class="image-wrapper">
                                                    <img src="@/assets/images/profile/card_blue.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="image-wrapper">
                                                    <img src="@/assets/images/profile/card_orange.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="d-flex justify-content-center">
                                    <!-- https://www.youtube.com/watch?v=BrCz-FlPGgk -->
                                    <!-- Carousel controls -->
                                    <!-- <button class="carousel-control-prev rounded" type="button"
                                        data-bs-target="#addCardExampleIndicators" data-bs-slide="prev">
                                        <font-awesome-icon :icon="['fas', 'arrow-left']" />
                                    </button> -->
                                    <button class="carousel-control-next d-flex justify-content-start align-items-center" type="button"
                                        data-bs-target="#addCardExampleIndicators" data-bs-slide="next">
                                        <img src="@/assets/images/profile/wallet_arrow_icon.svg" alt="">
                                    </button>
                                </div>

                            </div>

                        </div>

                        <!-- For Small Screen -->

                        <div class="small_screen d-block d-sm-block d-md-block d-lg-none d-xl-none">

                            <!-- data-bs-ride="carousel" -->
                            <div id="addCardSmallExampleIndicators" class="carousel slide">

                                <div class="carousel-inner">

                                    <div class="carousel-item active">
                                        <div class="card-wrapper">
                                            <div class="card">
                                                <div class="image-wrapper">
                                                    <img src="@/assets/images/profile/card_blue.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="card-wrapper">
                                            <div class="card">
                                                <div class="image-wrapper">
                                                    <img src="@/assets/images/profile/card_orange.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="card-wrapper">
                                            <div class="card">
                                                <div class="image-wrapper">
                                                    <img src="@/assets/images/profile/card_blue.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="card-wrapper">
                                            <div class="card">
                                                <div class="image-wrapper">
                                                    <img src="@/assets/images/profile/card_orange.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="d-flex justify-content-center">
                                    <button class="carousel-control-next d-flex justify-content-start align-items-center" type="button"
                                        data-bs-target="#addCardSmallExampleIndicators" data-bs-slide="next">
                                        <img src="@/assets/images/profile/wallet_arrow_icon.svg" alt="">
                                    </button>
                                </div>

                            </div>

                        </div>

                        <!-- -------------------------------------------------------------- -->

                    </div>

                    <!-- -------------------------------------------------------------- -->

                    <div class="col-md-3 col-lg-3 col-xl-4 d-flex justify-content-center justify-content-sm-center justify-content-md-start align-items-center mt-3 mt-sm-3 mt-md-0">

                        <!-- Button trigger modal -->

                        <button type="button" class="btn btn-lg" id="addCard" data-bs-toggle="modal"
                            data-bs-target="#addCardModal">Add card</button>

                        <!-- Modal -->

                        <div class="modal fade" id="addCardModal" tabindex="-1" aria-labelledby="addCardModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">

                                <div class="modal-content">

                                    <div class="modal-header border-0">
                                        <h5 class="modal-title mt-0" id="addCardModalLabel">Add new card</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>

                                    <div class="modal-body border-0">

                                        <form class="row g-3">

                                            <div class="col-md-8">
                                                <label for="inputCardNumber" class="form-label">Card number</label>
                                                <!-- type="number"  type="password" -->
                                                <input type="text" class="form-control shadow-none" id="inputCardNumber"
                                                    placeholder="**************">
                                            </div>

                                            <div class="col-md-4">
                                                <label for="inputBankName" class="form-label">Bank Name</label>
                                                <input type="text" class="form-control shadow-none" id="inputBankName"
                                                    placeholder="NBK">
                                            </div>

                                            <div class="col-md-8">
                                                <label for="inputDate" class="form-label">Expiration date</label>
                                                <input type="date" class="form-control shadow-none" id="inputDate"
                                                    placeholder="mn/yyyy">
                                            </div>

                                            <div class="col-md-4">
                                                <label for="inputCVV" class="form-label">CVV</label>
                                                <input type="text" class="form-control shadow-none" id="inputCVV"
                                                    placeholder="****">
                                            </div>

                                        </form>

                                    </div>

                                    <div class="modal-footer border-0">
                                        <button type="button" class="btn btn-lg" data-bs-dismiss="modal">Done</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <!-- -------------------------------------------------------------- -->

                </div>

            </div>

            <div id="points">

                <h5 class="mb-4">Points</h5>

                <p class="mb-3">One stars gives you 30 points. <br /> Collect points then use them to buy our products and
                    get discounts.</p>

                <button type="button" class="btn me-3" id="certificate">
                    <img src="@/assets/images/navbar/certificate.png" alt="">
                    250 XP
                </button>

                <!-- https://www.youtube.com/watch?v=fMTYZNOfxjg&t=299s -->

                <button type="button" class="btn" id="see_more" @click="SeeMoreTable = !SeeMoreTable;">
                    See more
                </button>

                <table class="table mt-4 mb-0" v-if="SeeMoreTable">
                    <thead>
                        <tr>
                            <th scope="col" style="border-radius: 8px 0px 0px 0px;">Phase</th>
                            <th scope="col">Level</th>
                            <th scope="col">Stars</th>
                            <th scope="col" style="border-radius: 0px 8px 0px 0px;">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Beginner</th>
                            <td>1</td>
                            <td>3</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <th scope="row">Beginner</th>
                            <td>2</td>
                            <td>2</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <th scope="row">Beginner</th>
                            <td>3</td>
                            <td>1</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <th scope="row">Beginner</th>
                            <td>4</td>
                            <td>3</td>
                            <td>90</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>

    </section>
</template>

<script>
import ProfileNavbar from '@/components/profile/ProfileNavbar.vue';
export default {
    name: 'Wallet',
    data() {
        return {
            SeeMoreTable: false,
        };
    },
    components: {
        ProfileNavbar,
    },
}
</script>

<style lang="scss" scoped>
#wallet {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;

    color: $white;

    h5 {
        font-size: 18px;
    }

    p {
        font-size: 16px;
    }

    #my_cards {

        border-bottom: 1px solid $notification-color;

        // -------------------------------------------- //

        // For Large Screen

        @media screen and (min-width: 768px) {

            .large_screen {

                .carousel {

                    .carousel-inner {

                        width: 80%;

                        @include breakpoints(large) {
                            width: 95%;
                        }

                        @include breakpoints(x-Large) {
                            width: 90%;
                        }

                        .carousel-item {

                            transition: transform 2.5s ease-in-out;

                            .card-wrapper {

                                display: flex;
                                // justify-content: center;
                                // align-items: center;

                                .card {
                                    margin: auto 0.75em;
                                    width: 305px;
                                    border: 1px solid $pink;
                                    border-radius: 8px;
                                    box-sizing: content-box;
                                    box-shadow: 0px 4px 4px 0px $box-shadow;

                                    .image-wrapper {

                                        width: 305px;
                                        height: 199px;

                                        border-radius: 8px;

                                        img {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                            border-radius: 8px;
                                        }
                                    }

                                }

                            }

                        }

                    }

                    .carousel-control-next {
                        width: 20%;
                        opacity: 1;

                        @include breakpoints(large) {
                            width: 5%;
                        }

                        @include breakpoints(x-Large) {
                            width: 10%;
                        }

                        img {
                            width: 24px;
                            height: 24px;
                        }
                    }

                }

            }

        }

        // For Small Screen

        @media screen and (max-width: 1200px) {

            .small_screen {

                .carousel {

                    .carousel-inner {

                        width: 80%;

                        @include breakpoints(x-small) {
                            width: 95%;
                        }

                        .carousel-item {

                            transition: transform 2.5s ease-in-out;

                            .card-wrapper {

                                display: flex;
                                // justify-content: center;
                                // align-items: center;

                                .card {

                                    margin: auto 0.5em;
                                    width: 305px;
                                    border: 1px solid $pink;
                                    border-radius: 8px;
                                    box-sizing: content-box;
                                    box-shadow: 0px 4px 4px 0px $box-shadow;


                                    .image-wrapper {

                                        width: 305px;
                                        height: 199px;

                                        border-radius: 8px;

                                        img {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                            border-radius: 8px;
                                        }

                                    }

                                }

                            }

                        }

                    }

                    .carousel-control-next {
                        width: 20%;
                        opacity: 1;

                        @include breakpoints(x-small) {
                            width: 5%;
                        }

                        img {
                            width: 24px;
                            height: 24px;
                        }
                    }

                }

            }


        }

        // -------------------------------------------- //

        #addCard {
            width: 241px;
            // padding: 2px 16px 8px 16px;
            border: 1px solid $pink;
            border-radius: 8px;
            background: $linear-pink;
            color: $white;
            font-size: 18px;
        }

        #addCardModal {

            .modal-dialog {

                width: 375px;
                // height: 290px;
                // border-radius: 16px;
                // box-shadow: 0px 4px 4px 0px $box-shadow;

                .modal-content {

                    background: $mov;

                    color: $white;

                    .modal-header {

                        h5 {
                            font-size: 16px;
                        }

                        button {
                            background-color: $white;
                            border-radius: 50%;
                            opacity: 1;
                            font-size: 10px;
                            font-weight: bold;
                            margin-right: 0;
                            // width: 24px;
                            // height: 24px;
                        }

                    }

                    .modal-body {

                        form {

                            label {
                                font-size: 14px;
                            }

                            input {
                                border-radius: 8px;
                                border: 1px solid $gray;
                                background: $white;
                                // caret-color: $white;
                                color: $gray;
                            }

                            input::placeholder {
                                color: $gray;
                                font-size: 14px;
                            }

                            input:focus::placeholder {
                                color: transparent;
                            }

                        }

                    }

                    .modal-footer {
                        button {
                            width: 343px;
                            padding: 8px 16px;
                            border-radius: 8px;
                            background: $linear-pink;
                            color: $white;
                            font-size: 18px;
                        }
                    }

                }

            }

        }

    }

    #points {

        button {
            width: 140px;
            // padding: 8px 16px;
            border-radius: 8px;
            color: $white;
            font-size: 18px;
        }

        #certificate {

            background: $linear-blue;
            background-clip: padding-box;
            -webkit-background-clip: padding-box;
            -webkit-text-fill-color: $white;

            img {
                width: 24px;
                height: 24px;
            }

        }

        #see_more {
            background: $linear-pink;
            background-clip: padding-box;
            -webkit-background-clip: padding-box;
            -webkit-text-fill-color: $white;
        }

        table {

            thead {
                tr {
                    border-bottom: 1px solid $notification-border;

                    th,
                    td {
                        background: $dark-mov;
                        border: 0;
                        color: $white;
                        font-size: 16px;
                        line-height: 24px;
                        // width: 180px;
                        // text-align: center;
                    }
                }
            }

            tbody {
                tr {
                    border-bottom: 1px solid $pink;

                    th,
                    td {
                        background: $mov;
                        border: 0;
                        color: $white;
                        font-size: 16px;
                        line-height: 24px;
                        // width: 180px;
                        // text-align: center;
                    }
                }
            }
        }

    }

}
</style>