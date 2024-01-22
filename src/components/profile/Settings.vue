<template>
    <section id="settings">

        <div class="container">

            <ProfileNavbar />
            <router-view />

            <div class="setting mt-4 mb-3 ">

                <!-- my-auto -->
                <div class="float-start">
                    <h5>Get updates on mail</h5>
                </div>

                <div class="float-end">

                    <!-- https://www.w3schools.com/howto/howto_css_switch.asp -->
                    <!-- https://gitbrent.github.io/bootstrap4-toggle/ -->
                    <!-- https://getbootstrap.com/docs/5.3/forms/checks-radios/ -->
                    <!-- https://freefrontend.com/bootstrap-toggle-switches/ -->
                    <!-- https://codepen.io/aanjulena/pen/ZLZjzV -->
                    <!-- https://bootsnipp.com/snippets/Q0d6E -->
                    <!-- https://stackoverflow.com/questions/64435290/how-can-i-change-the-checked-background-color-of-this-bootstrap-4-toggle-switc -->
                    <!-- https://medium.com/@jamiecarter7/how-to-customise-the-colors-of-bootstrap-toggle-switch-element-d80832624b6c -->
                    <!-- https://www.codeply.com/p/4sL9uhevwJ -->

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" checked>
                    </div>

                </div>

            </div>

            <div class="setting mb-3">

                <!-- my-auto -->
                <div class="float-start">
                    <h5>Get updates on mail</h5>
                </div>

                <div class="float-end">

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch">
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
import ProfileNavbar from '@/components/profile/ProfileNavbar.vue';
export default {
    name: 'Settings',
    components: {
        ProfileNavbar,
    },
}
</script>

<style lang="scss" scoped>
#settings {
    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;

    .setting {
        height: 40px;
        background: $mov;
        border-radius: 4px;
        padding: 8px 16px;

        color: $white;

        h5 {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
        }

        .form-switch {

            input {
                width: 40px;
                height: 24px;
                box-shadow: none;
                margin-top: 0;
            }

            /* .form-check-input {
                border-color: $green-light !important;
                background-color: $green-light !important;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='white'/%3e%3c/svg%3e");
            } */

            .form-check-input:checked {
                border-color: $green-light !important;
                background-color: $green-light !important;
            }

            .form-check-input:active {
                border-color: $green-light !important;
                background-color: $green-light !important;
            }

            .form-check-input:focus {
                border-color: $green-light !important;
                background-color: $green-light !important;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='white'/%3e%3c/svg%3e");
            }

            /* .form-check-input:focus:not(:checked) {
                border-color: $green-light !important;
                background-color: $green-light !important;
            } */

            .form-check-input:not(:checked) {
                border-color: $gray !important;
                background-color: $gray !important;
            }

        }

    }

}
</style>