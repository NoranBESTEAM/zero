<template>
    <div id="categories" class="text-center">

        <!-- https://getbootstrap.com/docs/5.3/components/card/ -->

        <div class="container">

            <div class="row row-cols-1 row-cols-lg-3 g-4">

                <div class="col">
                    <!-- h-100 -->
                    <div class="card h-100" ref="myCardOne">
                        <img src="@/assets/images/categories/learn.webp" class="card-img-top" alt="Learn">
                        <div class="card-body">
                            <h5 class="card-title">Learn</h5>
                            <p class="card-text">
                                Self-learning paths in digital skills, programming, and STEAM applications.
                            </p>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: '' }" class="btn rounded-3" v-on:mouseover="changeBorderOne(true)"
                                v-on:mouseleave="changeBorderOne(false)">
                                Start learning now
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <!-- h-100 -->
                    <div class="card h-100" ref="myCardTwo">
                        <img src="@/assets/images/categories/code.webp" class="card-img-top" alt="Code">
                        <div class="card-body">
                            <h5 class="card-title">Code</h5>
                            <p class="card-text">Practice digital skills with experts.</p>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: '' }" class="btn rounded-3" v-on:mouseover="changeBorderTwo(true)"
                                v-on:mouseleave="changeBorderTwo(false)">
                                Start learning now
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <!-- h-100 -->
                    <div class="card h-100" ref="myCardThree">
                        <img src="@/assets/images/categories/compute.webp" class="card-img-top" alt="Compute">
                        <div class="card-body">
                            <h5 class="card-title">Compete</h5>
                            <p class="card-text">
                                Compete solo or in league through series of missions, be a future skills pioneer.
                            </p>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: '' }" class="btn rounded-3" v-on:mouseover="changeBorderThree(true)"
                                v-on:mouseleave="changeBorderThree(false)">
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
    methods: {
        // https://fontawesomeicons.com/fa/vue-change-text-color-on-hover
        changeBorderOne(isHovering) {
            if (isHovering) {
                // this.$refs.myParagraph.style.border = '1px solid #E74B90';
                this.$refs.myCardOne.style.outline = '1px solid #E74B90';
            } else {
                // this.$refs.myParagraph.style.border = '0';
                this.$refs.myCardOne.style.outline = '0';
            }
        },
        changeBorderTwo(isHovering) {
            if (isHovering) {
                // this.$refs.myParagraph.style.border = '1px solid #E74B90';
                this.$refs.myCardTwo.style.outline = '1px solid #E74B90';
            } else {
                // this.$refs.myParagraph.style.border = '0';
                this.$refs.myCardTwo.style.outline = '0';
            }
        },
        changeBorderThree(isHovering) {
            if (isHovering) {
                // this.$refs.myParagraph.style.border = '1px solid #E74B90';
                this.$refs.myCardThree.style.outline = '1px solid #E74B90';
            } else {
                // this.$refs.myParagraph.style.border = '0';
                this.$refs.myCardThree.style.outline = '0';
            }
        },
    },
}
</script>

<style lang="scss" scoped>
#categories {

    padding-top: 40px;
    padding-bottom: 40px;
    background-color: $dark-mov;

    .container {

        .card {

            /* height: 300px;

            @include breakpoints(medium) {
                height: 350px;
            }

            @include breakpoints(large) {
                height: 320px;
            } */

            -webkit-box-sizing: border-box;
            /* Safari/Chrome, other WebKit */
            -moz-box-sizing: border-box;
            /* Firefox, other Gecko */
            box-sizing: border-box;

            border-radius: 8px;
            background: $mov;
            /* Shadow */
            box-shadow: 0px 4px 4px 0px $box-shadow;

            padding-top: 16px;
            padding-bottom: 16px;

            img {
                width: 104px;
                height: 104px;
                margin: auto;
            }

            .card-body {

                h5 {
                    color: $orange;
                    font-size: 18px;
                    line-height: normal;
                }

                p {
                    color: $white;
                    font-size: 16px;
                    line-height: 24px;
                    // width: 358px;
                }

            }

            .card-footer {

                border: 0;

                a {
                    font-size: 16px;
                    line-height: 24px;
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
}</style>