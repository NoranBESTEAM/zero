<template>
    <section id="journey">

        <div class="container">

            <h3 class="mb-4">
                <router-link :to="{ name: 'competitions' }" class="text-reset me-2">
                    <font-awesome-icon :icon="['fas', 'fa-chevron-left']" />
                </router-link>
                World Robot Olympiad (WRO)
            </h3>

            <div class="row row-cols-1 row-cols-lg-4 g-4">

                <div class="col">
                    <div class="card h-100">
                        <div class="image-wrapper">
                            <img src="@/assets/images/journey/journey_1.webp" class="card-img-top" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                                Elementary
                            </h5>
                            <p class="card-text">
                                Start your robotics journey from scratch
                            </p>
                        </div>
                        <div class="card-footer border-0">
                            <router-link :to="{ name: '' }" class="card-link text-reset rounded-3 mb-2">
                                Start now
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <div class="image-wrapper">
                            <img src="@/assets/images/journey/journey_2.webp" class="card-img-top" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                                Junior
                            </h5>
                            <p class="card-text">
                                Take your skills steps forward
                            </p>
                        </div>
                        <div class="card-footer border-0">
                            <router-link :to="{ name: '' }" class="card-link text-reset rounded-3 mb-2">
                                Start now
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <div class="image-wrapper">
                            <img src="@/assets/images/journey/journey_3.webp" class="card-img-top" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                                Senior
                            </h5>
                            <p class="card-text">
                                Start and be robotics pro
                            </p>
                        </div>
                        <div class="card-footer border-0">
                            <router-link :to="{ name: '' }" class="card-link text-reset rounded-3 mb-2">
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
    name: 'Journey',
}
</script>

<style lang="scss" scoped>
#journey {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    color: $white;
    min-height: 100vh;

    h3 {
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

        a {
            padding: 8px 16px;
            background: $linear-pink;
            background-clip: padding-box;
            -webkit-background-clip: padding-box;
            -webkit-text-fill-color: $white;
            border: 1px solid $pink;
            // border-radius: 8px;
            float: right;
        }

    }

}
</style>