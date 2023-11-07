<template>
    <div class="categories text-center">

        <!-- https://getbootstrap.com/docs/5.3/components/card/ -->

        <div class="container">

            <div class="row row-cols-1 row-cols-md-3 g-4">

                <div class="col">
                    <div class="card h-100">
                        <img src="@/assets/images/categories/learn.svg" class="card-img-top" alt="Learn">
                        <div class="card-body">
                            <h5 class="card-title">Learn</h5>
                            <p class="card-text">Self-learning paths in digital skills, programming, and STEAM applications.
                            </p>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: 'sign-up' }" class="btn rounded-3">
                                Start learning now
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="@/assets/images/categories/code.svg" class="card-img-top" alt="Code">
                        <div class="card-body">
                            <h5 class="card-title">Code</h5>
                            <p class="card-text">Practice digital skills with experts.</p>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: 'sign-up' }" class="btn rounded-3">
                                Start learning now
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="@/assets/images/categories/compute.svg" class="card-img-top" alt="Compute">
                        <div class="card-body">
                            <h5 class="card-title">Compete</h5>
                            <p class="card-text">Compete solo or in league through series of missions, be a future skills
                                pioneer.</p>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: 'sign-up' }" class="btn rounded-3">
                                Start learning now
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Categories',
}
</script>

<style lang="scss" scoped>
.categories {

    padding-top: 40px;
    padding-bottom: 40px;
    background-color: $dark-mov;

    .container {

        .card {

            border-radius: 8px;
            background: $mov;
            /* Shadow */
            box-shadow: 0px 4px 4px 0px rgba(87, 87, 87, 0.25);

            img {
                width: 104px;
                height: 104px;
                margin: auto;
                margin-top: 24px;
            }

            .card-body {

                h5 {
                    color: $orange;
                }

                p {
                    color: $white;
                    // width: 358px;
                }

            }

            .card-footer {

                border: 0;

                a {
                    border: 1px solid $pink;
                    background: $linear-pink;
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                a:hover,
                a.router-link-exact-active {
                    background: $linear-pink;
                    background-clip: padding-box;
                    -webkit-background-clip: padding-box;
                    -webkit-text-fill-color: $white;
                }

            }

        }

    }
}
</style>