<template>
    <section id="team_members">

        <div class="container">

            <ProfileNavbar />
            <router-view />

            <!-- Profile Header -->

            <div id="profile_header" class="d-flex justify-content-center align-items-center mt-4 mb-4">
                <div id="profile-image">
                    <img src="@/assets/images/profile/profile-pic-square.webp" alt="" id="circle_img">
                    <!-- <font-awesome-icon :icon="['far', 'fa-pen-to-square']" /> -->
                    <!-- https://getbootstrap.com/docs/5.3/components/modal/#how-it-works -->
                    <!-- Button trigger modal -->
                    <button type="button" class="btn border-0 p-0" id="penBtn" data-bs-toggle="modal"
                        data-bs-target="#changePicModal">
                        <img src="@/assets/images/profile/profile-pic-icon.webp" alt="">
                    </button>
                    <!-- Modal -->
                    <div class="modal fade" id="changePicModal" tabindex="-1" aria-labelledby="changePicModalLabel"
                        aria-hidden="true">
                        <!-- modal-sm -->
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header border-0">
                                    <h5 class="modal-title" id="changePicModalLabel">Change profile picture?</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body border-0 text-center">
                                    <img src="@/assets/images/profile/profile-pic-square.webp" alt="">
                                </div>
                                <div class="modal-footer border-0 d-flex justify-content-center align-items-center">
                                    <span class="me-3">
                                        <img src="@/assets/images/profile/save-icon.svg" alt="">
                                    </span>
                                    <button type="button" class="btn btn-lg" data-bs-dismiss="modal">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="profile-about" class="text-center">
                    <h5>Ahmed Mohamed</h5>
                    <span>Code: 45245</span>
                </div>
            </div>

            <!-- Team Members -->

            <div class="row row-cols-1 row-cols-lg-3 g-4">
                <div class="col">
                    <div class="card h-100 border-0">
                        <div class="card-body pb-0">
                            <div id="my_container">
                                <h5 class="card-title d-inline float-start">
                                    Robots team
                                    <img src="@/assets/images/profile/profile-pic-icon.webp" alt="" class="">
                                </h5>
                                <div id="image_wrapper">
                                    <img src="@/assets/images/profile/default_img.webp" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="card-footer border-0">
                            <p class="card-text">
                                Team members
                            </p>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn" id="teamMemberBtn" data-bs-toggle="modal"
                                data-bs-target="#teamMembersModal">
                                <img src="@/assets/images/profile/add_member_icon.webp" alt="">
                            </button>
                            <!-- Modal -->
                            <!-- https://fontawesomeicons.com/fa/bootstrap-remove-modal-background -->
                            <div class="modal fade" id="teamMembersModal" tabindex="-1"
                                aria-labelledby="teamMemberModalLabel" aria-hidden="true" data-bs-backdrop="false">
                                <!-- modal-sm -->
                                <div class="modal-dialog modal-dialog-centered modal-sm">
                                    <div class="modal-content">
                                        <div class="modal-header border-0">
                                            <h5 class="modal-title" id="teamMemberModalLabel">Robots team</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body border-0">
                                            <form>
                                                <label for="teamNameInput" class="form-label">Add member</label>
                                                <input type="text" id="teamNameInput" class="form-control shadow-none"
                                                    placeholder="Enter member’s code">
                                            </form>

                                        </div>
                                        <div class="modal-footer border-0 d-flex justify-content-start align-items-center">
                                            <button type="button" class="btn" data-bs-dismiss="modal">Next</button>
                                        </div>
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
    name: 'TeamMembers',
    components: {
        ProfileNavbar,
    },
}
</script>

<style lang="scss" scoped>
#team_members {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;

    // Profile Header

    #profile_header {

        #profile-image {

            margin-right: 12px;
            position: relative;

            #circle_img {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                object-fit: cover;
            }

            #penBtn {
                position: absolute;
                bottom: -9px;
                left: -5px;

                img {
                    width: 24px;
                    height: 24px;
                }
            }

            .modal {
                .modal-dialog {

                    .modal-content {

                        background: $primary;
                        border-radius: 4px;

                        .modal-header {
                            h5 {
                                color: $white;
                                font-size: 20px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;
                            }

                            button {
                                background-color: $white;
                                border-radius: 50%;
                                opacity: 1;
                                font-size: 10px;
                                font-weight: bold;
                                margin-right: 0;
                            }
                        }

                        .modal-body {

                            img {
                                width: 180px;
                                height: 180px;
                                border-radius: 4px;
                                object-fit: cover;
                            }

                        }

                        .modal-footer {

                            span {
                                img {
                                    width: 40px;
                                    height: 40px;
                                }
                            }

                            button {
                                width: 149px;
                                padding: 8px 16px;
                                // border: 1px solid $pink;
                                border-radius: 4px;
                                background: $linear-pink;
                                box-shadow: 0px 4px 4px 0px $box-shadow;
                                color: $white;
                                font-size: 18px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 24px;
                            }

                        }

                    }
                }
            }

        }

        #profile-about {
            color: $white;

            h5 {
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            span {
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
            }
        }

    }

    // Team Members

    .card {

        background-color: $primary;
        color: $white;
        border-radius: 4px;
        box-shadow: 0px 4px 0px 0px $box-shadow;

        .card-body {

            #my_container {

                border-bottom: 1px solid $white;
                height: 148px;

                @include breakpoints(large) {
                    height: 128px;
                }

                h5 {
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;

                    float: left;

                    img {
                        width: 24px;
                        height: 24px;
                    }
                }

                #image_wrapper {

                    // display: inline-block;

                    width: 180px;
                    height: 132px;

                    padding: 16px 40px;

                    background-color: $white;

                    border: 1px solid $notification-color;
                    border-radius: 4px;

                    float: right;

                    @include breakpoints(x-small) {
                        width: 120px;
                        height: 132px;
                        padding: 16px 10px;
                    }

                    @include breakpoints(large) {
                        width: 100px;
                        height: 112px;
                        padding: 16px 10px;
                    }

                    @include breakpoints(x-Large) {
                        width: 140px;
                        height: 132px;
                        padding: 16px 20px;
                    }

                    img {
                        width: 100px;
                        height: 100px;

                        @include breakpoints(x-small) {
                            width: 100px;
                            height: 100px;
                        }

                        @include breakpoints(large) {
                            width: 80px;
                            height: 80px;
                        }

                    }
                }
            }

        }

        .card-footer {
            p {
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                display: inline-block;
            }

            #teamMemberBtn {
                float: right;
                padding: 0;

                img {
                    width: 24px;
                    height: 24px;
                }
            }

            .modal {
                .modal-dialog {

                    .modal-content {

                        background: $primary;
                        border-radius: 4px;

                        .modal-header {
                            h5 {
                                color: $white;
                                font-size: 20px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;
                            }

                            button {
                                background-color: $white;
                                border-radius: 50%;
                                opacity: 1;
                                font-size: 10px;
                                font-weight: bold;
                                margin-right: 0;
                            }
                        }

                        .modal-body {

                            form {

                                label {
                                    color: $notification-color;
                                    font-size: 16px;
                                    font-style: normal;
                                    font-weight: 400;
                                    line-height: 24px;
                                }

                                input {
                                    // width: 358px;
                                    height: 40px;
                                    border-radius: 4px;
                                    border: 1px solid $notification-color;
                                    background: transparent;
                                    caret-color: $white;
                                    color: $white;
                                }

                                input::placeholder {
                                    color: $white;
                                    font-size: 14px;
                                    font-style: normal;
                                    font-weight: 400;
                                    line-height: 20px;
                                }

                                input:focus::placeholder {
                                    color: transparent;
                                }

                            }

                        }

                        .modal-footer {

                            button {
                                width: 149px;
                                padding: 8px 16px;
                                border: 1px solid $pink;
                                border-radius: 4px;
                                background: $linear-pink;
                                box-shadow: 0px 4px 0px 0px $box-shadow;
                                color: $white;
                                font-size: 18px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 24px;
                            }

                        }

                    }
                }
            }
        }

    }

}
</style>