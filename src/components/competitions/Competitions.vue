<template>
    <section id="competitions">

        <div class="container">

            <div class="row row-cols-1 row-cols-lg-3 g-4">

                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">
                                World Robot Olympiad (WRO)
                            </h5>
                            <p class="card-text">
                                It is an international competition that encourages students to think, research, create and
                                teamwork under the guidance of professional trainers.
                            </p>
                        </div>
                        <div class="card-footer border-0 mb-2">
                            <div class="Players d-inline-block float-start">
                                <img src="@/assets/images/competitions/player_1.png" alt="">
                                <img src="@/assets/images/competitions/player_2.png" alt="">
                                <img src="@/assets/images/competitions/player_3.png" alt="">
                                <span class="ms-1 h4 mb-0">+3</span>
                            </div>
                            <router-link :to="{ name: 'journey' }" class="card-link text-reset rounded-3 float-end">
                                Start now
                            </router-link>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'Competitions',
}
</script>

<style lang="scss" scoped>
#competitions {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;

    .card {

        background-color: transparent;
        color: $white;
        box-shadow: 0px 4px 0px 0px $box-shadow;
        border: 1px solid $pink;

        .card-footer {

            img {
                width: 40px;
                height: 40px;
            }

            img:not(:first-child) {
                margin-left: -15px;
            }

            a {
                padding: 8px 16px;
                background: $linear-pink;
                background-clip: padding-box;
                -webkit-background-clip: padding-box;
                -webkit-text-fill-color: $white;
                // border: 1px solid $pink;
            }

        }

    }

}
</style>