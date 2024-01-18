<template>
    <section id="lessons">

        <div class="container">

            <h3 class="mb-4">
                <router-link :to="{ name: 'tracks' }" class="text-reset me-2">
                    <font-awesome-icon :icon="['fas', 'fa-chevron-left']" />
                </router-link>
                Digital future skills training
            </h3>

            <div class="row row-cols-1 row-cols-lg-4 g-4">

                <div class="col">
                    <div class="card h-100">
                        <div class="image-wrapper">
                            <img src="@/assets/images/lessons/Phase_1.webp" class="card-img-top" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                                Phase 1 (Beginner)
                            </h5>
                            <p class="card-text">
                                Start your robotics journey from scratch
                            </p>
                        </div>
                        <div class="card-footer border-0">
                            <router-link :to="{ name: 'levels' }" class="card-link text-reset rounded-3 mb-2">
                                Start now
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col">

                    <!-- https://www.w3docs.com/snippets/html/how-to-overlay-one-div-over-another.html -->

                    <div class="lock-wrapper">

                        <div class="lock-card">

                            <div class="card h-100">
                                <div class="image-wrapper">
                                    <img src="@/assets/images/lessons/Phase_2.webp" class="card-img-top" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase 2 (Junior)
                                    </h5>
                                    <p class="card-text">
                                        Start your robotics journey from scratch
                                    </p>
                                </div>
                                <div class="card-footer border-0">
                                    <router-link :to="{ name: 'levels' }"
                                        class="card-link text-reset rounded-3 mb-2 disabled">
                                        Start now
                                    </router-link>
                                </div>
                            </div>

                        </div>

                        <div class="lock-overlay rounded">
                            <img src="@/assets/images/lessons/lock.webp" alt="">
                        </div>

                    </div>

                </div>

                <div class="col">

                    <div class="lock-wrapper">

                        <div class="lock-card">

                            <div class="card h-100">
                                <div class="image-wrapper">
                                    <img src="@/assets/images/lessons/Phase_3.webp" class="card-img-top" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase 3 (Professional)
                                    </h5>
                                    <p class="card-text">
                                        Start your robotics journey from scratch
                                    </p>
                                </div>
                                <div class="card-footer border-0">
                                    <router-link :to="{ name: 'levels' }"
                                        class="card-link text-reset rounded-3 mb-2 disabled">
                                        Start now
                                    </router-link>
                                </div>
                            </div>

                        </div>

                        <div class="lock-overlay rounded">
                            <img src="@/assets/images/lessons/lock.webp" alt="">
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'Lessons',
}
</script>

<style lang="scss" scoped>
#lessons {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    color: $white;
    min-height: 100vh;

    .container {

        h3 {
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            a {
                svg {
                    color: $pink;
                    width: 24px;
                    height: 24px;
                }
            }
        }

        .card {

            background-color: $primary;
            box-shadow: 0px 4px 0px 0px $box-shadow;
            color: $white;
            // All card have the same height
            height: 310px !important;

            @include breakpoints(x-small) {
                height: 310px !important;
            }

            @include breakpoints(small) {
                height: 294px !important;
            }

            @include breakpoints(medium) {
                height: 294px !important;
            }

            @include breakpoints(large) {
                height: 334px !important;
            }

            .image-wrapper {
                background-color: $mov;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 8px 0px;
                border-radius: 8px 8px 0 0;

                img {
                    height: 124px;
                    object-fit: contain;
                }
            }

            .image-wrapper:hover {
                background: $linear-pink;
                background-clip: padding-box;
                -webkit-background-clip: padding-box;
                -webkit-text-fill-color: $white;
            }

            .card-body {
                h5 {
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }

                p {
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 20px;
                }
            }

            .card-footer {
                a {
                    padding: 8px 16px;
                    background: $linear-pink;
                    background-clip: padding-box;
                    -webkit-background-clip: padding-box;
                    -webkit-text-fill-color: $white;
                    border: 1px solid $pink;
                    // border-radius: 8px;
                    float: right;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                }
            }


        }

        .lock-wrapper {

            position: relative;

            @include breakpoints(x-small) {
                position: initial;
            }

            @include breakpoints(small) {
                position: initial;
            }

            @include breakpoints(medium) {
                position: initial;
            }

            .lock-card {

                position: absolute;
                top: 0;
                left: 0;
                opacity: 0.4;

                @include breakpoints(x-small) {
                    position: initial;
                    opacity: 0.1;
                }

                @include breakpoints(small) {
                    position: initial;
                    opacity: 0.1;
                }

                @include breakpoints(medium) {
                    position: initial;
                    opacity: 0.1;
                }

                .image-wrapper:hover {
                    background: $mov;
                }

                .disabled {
                    pointer-events: none;
                }
            }

            .lock-overlay {

                position: absolute;
                top: 0;
                left: 0;
                z-index: 9;

                background: $lock-BG;

                width: 100%;
                height: 310px;

                @include breakpoints(x-small) {
                    position: initial;
                    height: 310px !important;
                    margin-top: -310px;
                }

                @include breakpoints(small) {
                    position: initial;
                    height: 294px !important;
                    margin-top: -294px;
                }

                @include breakpoints(medium) {
                    position: initial;
                    height: 294px !important;
                    margin-top: -294px;
                }

                @include breakpoints(large) {
                    height: 334px !important;
                }

                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 100px;
                    height: 100px;
                    object-fit: contain;
                }

            }

        }

    }

}
</style>