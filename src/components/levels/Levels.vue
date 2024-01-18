<template>
    <section id="levels">

        <!-- https://www.youtube.com/watch?v=znqUwx0b0HI -->
        <!-- https://www.w3schools.com/howto/howto_css_fullscreen_video.asp -->
        <!-- https://alvarotrigo.com/blog/background-video-css/ -->
        <!-- https://cloudconvert.com/mp4-to-webm -->

        <div id="video-wrapper">

            <video playsinline autoplay muted loop poster="@/assets/images/signup/signupBG.webp" id="back-video">
                <!-- <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"> -->
                <source src="@/assets/images/levels/levels_bg.webm" type="video/webm">
                <source src="@/assets/images/levels/levels_bg.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="container">

                <div id="content">

                    <h3 class="mb-4">
                        <router-link :to="{ name: 'lessons' }" class="text-reset me-2">
                            <font-awesome-icon :icon="['fas', 'fa-chevron-left']" />
                        </router-link>
                        Phase 1 (Beginner)
                    </h3>

                    <div class="row row-cols-1 row-cols-lg-4 g-4">

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">1</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level1 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">2</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level2 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">3</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level3 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">4</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level4 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'mission_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">1</span>
                                        <img src="@/assets/images/levels/orange_2_star_robot.webp" class="card-img-top"
                                            alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Mission 1
                                    </h5>
                                    <p class="card-text mb-2">
                                        Start mission 1
                                    </p>
                                    <p class="card-text mb-2">
                                        Finish all previous levels before mission 1.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">5</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level5 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">6</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level6 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">7</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level7 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">8</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level8 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'mission_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">2</span>
                                        <img src="@/assets/images/levels/orange_2_star_robot.webp" class="card-img-top"
                                            alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Mission 2
                                    </h5>
                                    <p class="card-text mb-2">
                                        Start mission 2
                                    </p>
                                    <p class="card-text mb-2">
                                        Finish all previous levels before mission 1.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">9</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level9 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">10</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level10 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <router-link :to="{ name: 'level_slider' }" class="text-reset">
                                    <div class="image-wrapper">
                                        <span class="ms-3 h3 mb-0">11</span>
                                        <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top" alt="">
                                    </div>
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Phase1- Level11 (Beginner)
                                    </h5>
                                    <p class="card-text mb-2">
                                        In this level you will learn what the robot is.
                                    </p>
                                    <p class="card-text mb-2">
                                        Get 5 start to start this level.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col">

                            <!-- https://www.w3docs.com/snippets/html/how-to-overlay-one-div-over-another.html -->

                            <div class="lock-wrapper">

                                <div class="lock-card">

                                    <div class="card h-100">
                                        <router-link :to="{ name: 'level_slider' }" class="text-reset disabled">
                                            <div class="image-wrapper">
                                                <span class="ms-3 h3 mb-0">12</span>
                                                <img src="@/assets/images/levels/gray_3_star_robot.webp" class="card-img-top"
                                                    alt="">
                                            </div>
                                        </router-link>
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Phase1- Level12 (Beginner)
                                            </h5>
                                            <p class="card-text mb-2">
                                                In this level you will learn what the robot is.
                                            </p>
                                            <p class="card-text mb-2">
                                                Get 5 start to start this level.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div class="lock-overlay">
                                    <img src="@/assets/images/lessons/lock.webp" alt="">
                                </div>

                            </div>

                        </div>

                        <div class="col">

                            <!-- https://www.w3docs.com/snippets/html/how-to-overlay-one-div-over-another.html -->

                            <div class="lock-wrapper">

                                <div class="lock-card">

                                    <div class="card h-100">
                                        <router-link :to="{ name: 'mission_slider' }" class="text-reset disabled">
                                            <div class="image-wrapper">
                                                <span class="ms-3 h3 mb-0">3</span>
                                                <img src="@/assets/images/levels/orange_2_star_robot.webp"
                                                    class="card-img-top" alt="">
                                            </div>
                                        </router-link>
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Mission 3
                                            </h5>
                                            <p class="card-text mb-2">
                                                Start mission 3
                                            </p>
                                            <p class="card-text mb-2">
                                                Finish all previous levels before mission 3.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div class="lock-overlay">
                                    <img src="@/assets/images/lessons/lock.webp" alt="">
                                </div>

                            </div>

                        </div>

                        <div class="col">

                            <!-- https://www.w3docs.com/snippets/html/how-to-overlay-one-div-over-another.html -->

                            <div class="lock-wrapper">

                                <div class="lock-card">

                                    <div class="card h-100">
                                        <router-link :to="{ name: 'mission_slider' }" class="text-reset disabled">
                                            <div class="image-wrapper">
                                                <span class="ms-3 h3 mb-0">4</span>
                                                <img src="@/assets/images/levels/orange_2_star_robot.webp"
                                                    class="card-img-top" alt="">
                                            </div>
                                        </router-link>
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Mission 4
                                            </h5>
                                            <p class="card-text mb-2">
                                                Start mission 4
                                            </p>
                                            <p class="card-text mb-2">
                                                Finish all previous levels before mission 4.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div class="lock-overlay">
                                    <img src="@/assets/images/lessons/lock.webp" alt="">
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
export default {
    name: 'Levels',
}
</script>

<style lang="scss" scoped>
#levels {

    margin-top: 64px;
    width: 100%;
    // min-height: 100vh;

    #video-wrapper {

        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        // text-align: center;
        // display: flex;
        // align-items: center;
        // justify-content: center;

        video {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            min-width: 100%;
            // width: 100%;
            min-height: 100%;
            // height: 100%;
            object-fit: cover;
            // object-fit: fill;
        }

        #content {

            padding-top: 40px;
            padding-bottom: 40px;

            h3 {
                color: $white;
                transition: 0.3s;
                line-height: normal;

                a {
                    svg {
                        color: $pink;
                    }
                }
            }

            .card {

                background-color: $primary;
                box-shadow: 0px 4px 0px 0px $box-shadow;
                color: $white;

                .image-wrapper {
                    background-color: $mov;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 24px 0px;
                    border-radius: 8px 8px 0 0;

                    img {
                        height: 95px;
                        object-fit: contain;
                    }
                }

                .image-wrapper:hover {
                    background: $linear-pink;
                    background-clip: padding-box;
                    -webkit-background-clip: padding-box;
                    -webkit-text-fill-color: $white;
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
                    // opacity: 0.6;
                    opacity: 0.4;

                    .disabled {
                        pointer-events: none;
                    }

                    .image-wrapper:hover {
                        background: $mov;
                    }

                    @include breakpoints(x-small) {
                        position: initial;
                        // opacity: 0.2;
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

                }

                .lock-overlay {

                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 9;

                    background: $lock-BG;

                    width: 100%;

                    // border-radius: 8px;

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




    /* .card {

        @include breakpoints(x-small) {
            height: 310px !important;
        }

        @include breakpoints(large) {
            height: 334px !important;
        }

    } */

    /* .lock-wrapper {

        .lock-overlay {

            width: 100%;
            height: 320px;

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
        }

    } */
}
</style>