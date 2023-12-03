<template>
    <section id="profile_main">
        <div class="container">

            <ProfileNavbar />
            <router-view />

            <!-- Profile Header -->

            <div id="profile_header" class="d-flex justify-content-center align-items-center mt-4 mb-4">
                <div id="profile-image">
                    <img src="@/assets/images/profile/profile-pic-square.png" alt="" id="circle_img">
                    <!-- <font-awesome-icon :icon="['far', 'fa-pen-to-square']" /> -->
                    <!-- https://getbootstrap.com/docs/5.3/components/modal/#how-it-works -->
                    <!-- Button trigger modal -->
                    <button type="button" class="btn border-0 p-0" id="penBtn" data-bs-toggle="modal"
                        data-bs-target="#changePicModal">
                        <img src="@/assets/images/profile/profile-pic-icon.png" alt="">
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
                                    <img src="@/assets/images/profile/profile-pic-square.png" alt="">
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

            <!-- Form -->

            <form class="row g-3">

                <div class="col-md-6">
                    <label for="inputFirstName" class="form-label">First name <span>*</span></label>
                    <input type="text" class="form-control shadow-none" id="inputFirstName" placeholder="Ahmed" required>
                </div>

                <div class="col-md-6">
                    <label for="inputLastName" class="form-label">Last name <span>*</span></label>
                    <input type="text" class="form-control shadow-none" id="inputLastName" placeholder="Mohamed" required>
                </div>

                <div class="col-md-6">
                    <label for="inputLanguage" class="form-label">Language <span>*</span></label>
                    <select id="inputLanguage" class="form-select shadow-none" required>
                        <option selected>Arabic</option>
                        <option>English</option>
                    </select>

                </div>

                <div class="col-md-6">

                    <!-- <label for="date" class="form-label">Date of birth</label>
                    <div class="input-group">
                        <input type="date" class="form-control shadow-none" id="date" value="2013-01-08">
                        <span class="input-group-text" role="button" id="calenderSpan">
                            <img src="@/assets/images/profile/calendar-icon.svg" alt="">
                        </span>
                    </div> -->

                    <!-- https://www.w3schools.com/tags/att_input_type_date.asp -->

                    <!-- <label for="date" class="form-label">Date of birth</label>
                    <input type="date" class="form-control shadow-none" id="date" placeholder="mn/yyyy"> -->

                    <!-- https://copyprogramming.com/howto/how-to-remove-or-customize-input-type-date-calendar-icon-ultimate-guide -->

                    <label for="date" class="form-label">Date of birth</label>
                    <input type="date" class="form-control shadow-none" id="date" value="2013-01-08">

                </div>

                <div class="col-md-6">
                    <label for="inputCountry" class="form-label">Country</label>
                    <select id="inputCountry" class="form-select shadow-none">
                        <option selected>Saudi Arabia</option>
                        <option>Egypt</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label for="inputGender" class="form-label">Gender</label>
                    <select id="inputGender" class="form-select shadow-none">
                        <option selected>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label for="inputGrade" class="form-label">Grade</label>
                    <select id="inputGrade" class="form-select shadow-none">
                        <option selected>Primary</option>
                        <option>Secondary</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label for="inputSchool" class="form-label">School</label>
                    <input type="text" class="form-control shadow-none" id="inputSchool" placeholder="Dar Heraa School">
                </div>

                <div class="col-md-6">
                    <label for="inputHobbies" class="form-label">Hobbies</label>
                    <input type="text" class="form-control shadow-none" id="inputHobbies" placeholder="Drawing">
                </div>

                <div class="col-md-6">
                    <label for="inputSubject" class="form-label">Favorite subject</label>
                    <input type="text" class="form-control shadow-none" id="inputSubject" placeholder="Arabic">
                </div>

                <div class="col-12 mt-4">

                    <router-link :to="{ name: 'change-password' }" class="me-4">
                        Change password
                    </router-link>

                    <button type="submit" class="btn" id="submit">Save Changes</button>

                </div>

            </form>

            <!-- Links -->

            <div id="links" class="mt-4">

                <router-link :to="{ name: 'support' }" class="d-inline me-3">
                    <img src="@/assets/images/profile/support-icon.svg" alt="" class="me-2">
                    Technical support
                </router-link>

                <router-link :to="{ name: 'settings' }" class="d-inline">
                    <img src="@/assets/images/profile/settings-icon.svg" alt="" class="me-2">
                    Settings
                </router-link>

                <router-link :to="{ name: 'login' }" class="d-block mt-3">
                    <img src="@/assets/images/profile/logout-icon.svg" alt="" class="me-2">
                    Logout
                </router-link>

            </div>

        </div>

    </section>
</template>

<script>

import ProfileNavbar from '@/components/profile/ProfileNavbar.vue';

export default {

    name: 'ProfileMain',

    components: {
        ProfileNavbar,
    },

}
</script>

<style lang="scss" scoped>
#profile_main {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    // min-height: 100vh;

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

                    // width: 464px;

                    .modal-content {

                        background: $primary;
                        // padding: 16px;

                        .modal-header {
                            h5 {
                                color: $white;
                                font-size: 20px;
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
                                border-radius: 8px;
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
                                border: 1px solid $pink;
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

        #profile-about {
            color: $white;

            h5 {
                font-size: 18px;
            }

            span {
                font-size: 14px;
            }
        }

    }

    form {

        color: $white;

        label {
            color: $label-color;

            font-size: 16px;

            span {
                color: $notification-close-btn;
            }
        }

        input,
        select,
        #calenderSpan {
            background: transparent;
            color: $white;
            border: 1px solid $white;
            border-radius: 8px;
        }

        input,
        select,
        .input-group {

            width: 389px;

            @include breakpoints(x-small) {
                width: 100%;
            }

            @include breakpoints(small) {
                width: 100%;
            }

            @include breakpoints(medium) {
                width: 100%;
            }
        }

        input {
            caret-color: $white;
        }

        input::placeholder {
            color: $white;
            font-size: 14px;
        }

        input:focus::placeholder {
            color: transparent;
        }

        // https://copyprogramming.com/howto/how-to-change-colour-of-select-dropdown-arrow
        // https://www.jotform.com/answers/4018649-how-to-change-the-dropdown-arrow-color
        select {
            background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m2 5 6 6 6-6'/%3e%3c/svg%3e") right .75rem center/16px 10px no-repeat !important;
            // background: url("data:image/svg+xml;charset=utf-8,<svg width='10' height='6' fill='none' xmlns='http:%2F%2Fwww.w3.org/2000/svg'><path d='M1 1l4 4 4-4' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>") right .75rem center/16px 10px no-repeat !important;

            font-size: 14px;
        }

        /* .input-group {
            input {
                border-right: 0;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                width: fit-content;
            }

            #calenderSpan {
                border-left: 0;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;

                img {
                    width: 16px;
                    height: 16px;
                }
            }
        } */

        a,
        #submit {
            border-radius: 8px;
            border: 1px solid $pink;

            width: 166px;

            padding: 8px 16px;

            font-size: 18px;

            background: $linear-pink;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        #submit {
            @include breakpoints(x-small) {
                margin-top: 16px;
                display: block;
            }
        }

        a:hover,
        a.router-link-exact-active,
        #submit:hover {
            background: $linear-pink;
            background-clip: padding-box;
            -webkit-background-clip: padding-box;
            -webkit-text-fill-color: $white;
        }

    }

    #links {

        a,
        a:hover,
        a.router-link-exact-active {

            color: $white;
            font-size: 16px;

            img {
                width: 24px;
                height: 24px;
            }

        }
    }

}
</style>