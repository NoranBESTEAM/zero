<template>
    <section id="add_team">

        <div class="container">

            <ProfileNavbar />
            <router-view />

            <!-- Button trigger modal -->
            <button type="button" class="btn mt-4" id="addTeamBtn" data-bs-toggle="modal" data-bs-target="#addTeamModal">
                <span class="d-block">+</span>Add team
            </button>
            <!-- Modal -->
            <!-- https://fontawesomeicons.com/fa/bootstrap-remove-modal-background -->
            <div class="modal fade" id="addTeamModal" tabindex="-1" aria-labelledby="addTeamModalLabel" aria-hidden="true" data-bs-backdrop="false">
                <!-- modal-sm -->
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <h5 class="modal-title" id="addTeamModalLabel">Add team</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body border-0">
                            <div id="image_wrapper">
                                <img src="@/assets/images/profile/default_img.svg" alt="">
                            </div>
                            <form class="mt-3">
                                <label for="teamNameInput" class="form-label">Team name</label>
                                <input type="text" id="teamNameInput" class="form-control shadow-none">
                            </form>

                        </div>
                        <div class="modal-footer border-0 d-flex justify-content-start align-items-center">
                            <!-- <button type="button" class="btn btn-lg" data-bs-dismiss="modal">Next</button> -->
                            <router-link :to="{ name: 'team-members' }" class="btn btn-lg text-reset" role="button">
                                Next
                            </router-link>
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
    name: 'AddTeam',
    components: {
        ProfileNavbar,
    },
}
</script>

<style lang="scss" scoped>
#add_team {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;

    #addTeamBtn {
        padding: 24px 28px 34px 28px;

        border: 1px solid $pink;
        border-radius: 8px;

        box-shadow: 0px 4px 4px 0px $box-shadow;

        text-align: center;

        font-size: 18px;

        background: $linear-pink;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
                        // width: 24px;
                        // height: 24px;
                    }
                }

                .modal-body {

                    #image_wrapper {

                        width: 180px;
                        height: 132px;

                        padding: 16px 40px;

                        background-color: $white;

                        border: 1px solid $notification-color;
                        border-radius: 8px;

                        img {
                            width: 100px;
                            height: 100px;
                        }
                    }

                    form {

                        width: 358px;

                        @include breakpoints(x-small) {
                            width: 311px;
                        }

                        label {
                            color: $notification-color;
                            text-align: right;
                            font-size: 16px;
                        }

                        input {
                            width: 358px;
                            height: 40px;
                            // border-radius: 4px;
                            border: 1px solid $notification-color;
                            background: transparent;
                            caret-color: $white;
                            color: $white;

                            @include breakpoints(x-small) {
                                width: 311px;
                            }
                        }

                    }

                }

                .modal-footer {

                    color: $white;

                    a {
                        width: 149px;
                        padding: 8px 16px;
                        border: 1px solid $pink;
                        border-radius: 8px;
                        background: $linear-pink;
                        font-size: 18px;
                    }

                }

            }
        }
    }

}
</style>
