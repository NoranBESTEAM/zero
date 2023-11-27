<template>
    <section id="change_password">

        <div class="container">

            <ProfileNavbar />
            <router-view />

            <!-- Form -->

            <form class="row g-3 mt-4">

                <div class="col-12">
                    <label for="inputCurrentPassword" class="form-label">Current password</label>
                    <input type="password" class="form-control shadow-none" id="inputCurrentPassword">
                </div>

                <div class="col-12">
                    <label for="inputNewPassword" class="form-label">New password</label>
                    <input type="password" class="form-control shadow-none" id="inputNewPassword">
                </div>

                <div class="col-12">
                    <label for="inputConfirmPassword" class="form-label">Confirm password</label>
                    <input type="password" class="form-control shadow-none" id="inputConfirmPassword">
                </div>

                <div class="col-12 mt-4">

                    <button type="submit" class="btn" id="submit">Save Changes</button>

                </div>

            </form>

        </div>

    </section>
</template>

<script>

import ProfileNavbar from '@/components/profile/ProfileNavbar.vue';

export default {
    name: 'ChangePassword',
    components: {
        ProfileNavbar,
    },
}

</script>

<style lang="scss" scoped>
#change_password {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;

    form {

        // color: $white;

        label {
            color: $label-color;
            font-size: 16px;
        }

        input {

            background: transparent;
            color: $white;
            border: 1px solid $white;
            border-radius: 8px;

            caret-color: $white;

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

        input::placeholder {
            color: $white;
            font-size: 14px;
        }

        input:focus::placeholder {
            color: transparent;
        }

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

        #submit:hover {
            background: $linear-pink;
            background-clip: padding-box;
            -webkit-background-clip: padding-box;
            -webkit-text-fill-color: $white;
        }

    }

}
</style>