<template>
    <section id="time">

        <div class="container">

            <ProfileNavbar />
            <router-view />

            <!-- timeContainer -->

            <div id="timeContainer" class="mt-4">

                <h5 class="d-inline-block mt-2">
                    <span>Time on site: </span>3:40.15
                </h5>

                <!-- DropDown -->

                <!-- https://getbootstrap.com/docs/5.3/components/dropdowns/#menu-alignment -->

                <div class="btn-group float-end" id="myDropDownBtn">
                    <button type="button" class="btn dropdown-toggle text-center border-0" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Day
                    </button>
                    <ul class="dropdown-menu dropdown-menu-start">
                        <li>
                            <a class="btn dropdown-item text-center">Day</a>
                        </li>
                        <li>
                            <a class="btn dropdown-item text-center">Month</a>
                        </li>
                        <li>
                            <a class="btn dropdown-item text-center">Year</a>
                        </li>
                    </ul>
                </div>

            </div>

            <!-- Time On Site -->

            <div id="time-on-site">

                <div class="timeElement mt-4">

                    <div class="float-start" style="width: 30%;">

                        <h5 class="d-inline-block">Saturday</h5>

                        <h5 class="d-block d-md-inline-block float-none float-md-end">20/5/2023</h5>

                    </div>

                    <div class="d-inline-block text-center" style="width: 50%;">
                        <h5>Time on site: <span class="d-block d-md-inline-block">3:40.15</span></h5>
                    </div>

                    <div class="float-end d-flex justify-content-center align-items-center">
                        <button type="button" class="btn border-0 p-0 mt-3 mt-md-0" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <img src="@/assets/images/notification/trash.webp" alt="">
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <!-- modal-dialog-centered modal-sm -->
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content text-center">
                                    <div class="modal-body">
                                        Delete?
                                    </div>
                                    <div class="modal-footer border-0 d-flex justify-content-center align-items-center">
                                        <button type="button" class="btn" id="yesBtn">Yes</button>
                                        <button type="button" class="btn" data-bs-dismiss="modal" id="noBtn">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="timeElement mt-4">

                    <div class="float-start" style="width: 30%;">

                        <h5 class="d-inline-block">Sunday</h5>

                        <h5 class="d-block d-md-inline-block float-none float-md-end">21/5/2023</h5>

                    </div>

                    <div class="d-inline-block text-center" style="width: 50%;">
                        <h5>Time on site: <span class="d-block d-md-inline-block">3:40.15</span></h5>
                    </div>

                    <div class="float-end d-flex justify-content-center align-items-center">
                        <button type="button" class="btn border-0 p-0 mt-3 mt-md-0" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <img src="@/assets/images/notification/trash.webp" alt="">
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content text-center">
                                    <div class="modal-body">
                                        Delete?
                                    </div>
                                    <div class="modal-footer border-0 d-flex justify-content-center align-items-center">
                                        <button type="button" class="btn" id="yesBtn">Yes</button>
                                        <button type="button" class="btn" data-bs-dismiss="modal" id="noBtn">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="timeElement mt-4">

                    <div class="float-start" style="width: 30%;">

                        <h5 class="d-inline-block">Monday</h5>

                        <h5 class="d-block d-md-inline-block float-none float-md-end">22/5/2023</h5>

                    </div>

                    <div class="d-inline-block text-center" style="width: 50%;">
                        <h5>Time on site: <span class="d-block d-md-inline-block">3:40.15</span></h5>
                    </div>

                    <div class="float-end d-flex justify-content-center align-items-center">
                        <button type="button" class="btn border-0 p-0 mt-3 mt-md-0" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <img src="@/assets/images/notification/trash.webp" alt="">
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content text-center">
                                    <div class="modal-body">
                                        Delete?
                                    </div>
                                    <div class="modal-footer border-0 d-flex justify-content-center align-items-center">
                                        <button type="button" class="btn" id="yesBtn">Yes</button>
                                        <button type="button" class="btn" data-bs-dismiss="modal" id="noBtn">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="timeElement mt-4">

                    <div class="float-start" style="width: 30%;">

                        <h5 class="d-inline-block">Tuesday</h5>

                        <h5 class="d-block d-md-inline-block float-none float-md-end">23/5/2023</h5>

                    </div>

                    <div class="d-inline-block text-center" style="width: 50%;">
                        <h5>Time on site: <span class="d-block d-md-inline-block">3:40.15</span></h5>
                    </div>

                    <div class="float-end d-flex justify-content-center align-items-center">
                        <button type="button" class="btn border-0 p-0 mt-3 mt-md-0" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <img src="@/assets/images/notification/trash.webp" alt="">
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content text-center">
                                    <div class="modal-body">
                                        Delete?
                                    </div>
                                    <div class="modal-footer border-0 d-flex justify-content-center align-items-center">
                                        <button type="button" class="btn" id="yesBtn">Yes</button>
                                        <button type="button" class="btn" data-bs-dismiss="modal" id="noBtn">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="timeElement mt-4">

                    <div class="float-start" style="width: 30%;">

                        <h5 class="d-inline-block">Wednesday</h5>

                        <h5 class="d-block d-md-inline-block float-none float-md-end">24/5/2023</h5>

                    </div>

                    <div class="d-inline-block text-center" style="width: 50%;">
                        <h5>Time on site: <span class="d-block d-md-inline-block">3:40.15</span></h5>
                    </div>

                    <div class="float-end d-flex justify-content-center align-items-center">
                        <button type="button" class="btn border-0 p-0 mt-3 mt-md-0" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <img src="@/assets/images/notification/trash.webp" alt="">
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content text-center">
                                    <div class="modal-body">
                                        Delete?
                                    </div>
                                    <div class="modal-footer border-0 d-flex justify-content-center align-items-center">
                                        <button type="button" class="btn" id="yesBtn">Yes</button>
                                        <button type="button" class="btn" data-bs-dismiss="modal" id="noBtn">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="timeElement mt-4">

                    <div class="float-start" style="width: 30%;">

                        <h5 class="d-inline-block">Thursday</h5>

                        <h5 class="d-block d-md-inline-block float-none float-md-end">25/5/2023</h5>

                    </div>

                    <div class="d-inline-block text-center" style="width: 50%;">
                        <h5>Time on site: <span class="d-block d-md-inline-block">3:40.15</span></h5>
                    </div>

                    <div class="float-end d-flex justify-content-center align-items-center">
                        <button type="button" class="btn border-0 p-0 mt-3 mt-md-0" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <img src="@/assets/images/notification/trash.webp" alt="">
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content text-center">
                                    <div class="modal-body">
                                        Delete?
                                    </div>
                                    <div class="modal-footer border-0 d-flex justify-content-center align-items-center">
                                        <button type="button" class="btn" id="yesBtn">Yes</button>
                                        <button type="button" class="btn" data-bs-dismiss="modal" id="noBtn">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="timeElement mt-4">

                    <div class="float-start" style="width: 30%;">

                        <h5 class="d-inline-block">Friday</h5>

                        <h5 class="d-block d-md-inline-block float-none float-md-end">26/5/2023</h5>

                    </div>

                    <div class="d-inline-block text-center" style="width: 50%;">
                        <h5>Time on site: <span class="d-block d-md-inline-block">3:40.15</span></h5>
                    </div>

                    <div class="float-end d-flex justify-content-center align-items-center">
                        <button type="button" class="btn border-0 p-0 mt-3 mt-md-0" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <img src="@/assets/images/notification/trash.webp" alt="">
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content text-center">
                                    <div class="modal-body">
                                        Delete?
                                    </div>
                                    <div class="modal-footer border-0 d-flex justify-content-center align-items-center">
                                        <button type="button" class="btn" id="yesBtn">Yes</button>
                                        <button type="button" class="btn" data-bs-dismiss="modal" id="noBtn">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
import ProfileNavbar from '@/components/profile/ProfileNavbar.vue';
export default {
    name: 'Time',
    components: {
        ProfileNavbar,
    },
}
</script>

<style lang="scss" scoped>
#time {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;

    // timeContainer

    #timeContainer {

        h5 {
            color: $white;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            span {
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
            }
        }

        #myDropDownBtn {

            button {
                padding: 8px 24px;
                background: $linear-pink;
                // border: 1px solid $pink;
                border-radius: 4px;
                color: $white;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
            }

            button::after {
                vertical-align: middle;
            }

            .dropdown-menu {

                background: $mov;

                a {
                    color: $white;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;

                }

                a:hover {
                    background: $mov;
                    color: $orange;
                }

            }

        }

    }

    // Time On Site

    #time-on-site {

        color: $white;

        .timeElement {

            height: 42px;
            padding: 8px 16px;
            border: 1px solid $pink;
            border-radius: 4px;

            @include breakpoints(x-small) {
                height: 72px;
            }

            @include breakpoints(small) {
                height: 72px;
            }

            h5 {
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
            }

            span {
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;

                @include breakpoints(x-small) {
                    margin-top: 8px;
                }

                @include breakpoints(small) {
                    margin-top: 8px;
                }
            }

            img {
                width: 24px;
                height: 24px;
            }

            .modal {

                .modal-dialog {

                    width: 170px;

                    .modal-content {
                        background: $primary;
                        border-radius: 4px;

                        .modal-body {
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 20px;
                        }

                        .modal-footer {
                            button {
                                border-radius: 4px;
                                padding: 2px 16px;
                                color: $white;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 24px;
                            }

                            #yesBtn {
                                margin-right: 8px;
                                background: $green-light;
                            }

                            #noBtn {
                                background: $notification-close-btn;
                            }
                        }
                    }

                }

            }

        }

        /* .timeElement:hover {
            border: 1px solid $notification-border;
            background: $mov;
        } */

    }

}
</style>