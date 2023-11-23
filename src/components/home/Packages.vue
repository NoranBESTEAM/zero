<template>
    <div id="packages" class="text-center">

        <!-- https://getbootstrap.com/docs/5.3/components/card/ -->

        <div class="container">

            <div class="row row-cols-1 row-cols-lg-3 g-4">

                <div class="col">
                    <div class="card h-100" ref="myCardOne">

                        <div class="card-header">
                            <h3>Basic</h3>
                        </div>

                        <div class="card-body">
                            <h4 class="fw-bolder">
                                10.00
                                <span class="fw-normal">\ month</span>
                            </h4>
                            <!-- ref="myParagraph" @mouseover="changeBorder(true)" @mouseout="changeBorder(false)" -->
                            <p class="mb-4">150\ year</p>
                            <p>12 months competitions practice </p>
                            <p>12 months competitions practice </p>
                        </div>

                        <div class="card-footer">
                            <router-link :to="{ name: '' }" class="btn rounded-3"
                                v-on:mouseover="changeBorderOne(true)" v-on:mouseleave="changeBorderOne(false)">
                                Get offer
                            </router-link>
                        </div>

                    </div>
                </div>

                <div class="col">
                    <div class="card h-100" ref="myCardTwo">

                        <div class="card-header">
                            <h3>Silver</h3>
                        </div>

                        <div class="card-body">
                            <h4 class="fw-bolder">
                                15.00
                                <span class="fw-normal">\ month</span>
                            </h4>
                            <p class="mb-4">300\ year</p>
                            <p>12 month sequential training </p>
                            <p>12 month sequential training </p>
                            <p>12 month sequential training </p>
                        </div>

                        <div class="card-footer">
                            <router-link :to="{ name: '' }" class="btn rounded-3"
                                v-on:mouseover="changeBorderTwo(true)" v-on:mouseleave="changeBorderTwo(false)">
                                Get offer
                            </router-link>
                        </div>

                    </div>
                </div>

                <div class="col">
                    <div class="card h-100" ref="myCardThree">

                        <div class="card-header">
                            <h3>Golden</h3>
                        </div>

                        <div class="card-body">
                            <h4 class="fw-bolder">
                                25.00
                                <span class="fw-normal">\ month</span>
                            </h4>
                            <p class="mb-4">500\ year</p>
                            <p>virtual labs based on STEAM methodology</p>
                        </div>

                        <div class="card-footer">
                            <router-link :to="{ name: '' }" class="btn rounded-3"
                                v-on:mouseover="changeBorderThree(true)" v-on:mouseleave="changeBorderThree(false)">
                                Get offer
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
    name: 'Packages',
    methods: {
        // https://fontawesomeicons.com/fa/vue-change-text-color-on-hover
        changeBorderOne(isHovering) {
            if (isHovering) {
                // this.$refs.myParagraph.style.border = '1px solid #E74B90';
                this.$refs.myCardOne.style.border = '1px solid #E74B90';
            } else {
                // this.$refs.myParagraph.style.border = '0';
                this.$refs.myCardOne.style.border = '0';
            }
        },
        changeBorderTwo(isHovering) {
            if (isHovering) {
                // this.$refs.myParagraph.style.border = '1px solid #E74B90';
                this.$refs.myCardTwo.style.border = '1px solid #E74B90';
            } else {
                // this.$refs.myParagraph.style.border = '0';
                this.$refs.myCardTwo.style.border = '0';
            }
        },
        changeBorderThree(isHovering) {
            if (isHovering) {
                // this.$refs.myParagraph.style.border = '1px solid #E74B90';
                this.$refs.myCardThree.style.border = '1px solid #E74B90';
            } else {
                // this.$refs.myParagraph.style.border = '0';
                this.$refs.myCardThree.style.border = '0';
            }
        },
    },
}
</script>

<style lang="scss" scoped>
#packages {

    padding-top: 40px;
    padding-bottom: 40px;
    background-color: $dark-mov;

    .container {

        .card {

            background-color: $mov;
            color: $white;
            padding-top: 16px;
            padding-bottom: 16px;

            .card-header {

                border: 0;

                /* h3 {
                    font-size: 32px;
                } */

            }

            .card-body {

                border: 0;

                h4 {

                    font-size: 40px;

                    span {
                        font-size: 14px;
                        line-height: 20px;
                    }

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