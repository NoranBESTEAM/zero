<template>
    <section id="tracks">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 g-4">

                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">
                                Digital future skills training
                                <!-- <font-awesome-icon :icon="['fas', 'fa-code']"/> -->
                                <img src="@/assets/images/tracks/Frame_14787.svg" alt="" class="">
                            </h5>
                            <p class="card-text">
                                It is an international competition that encourages students to think, research, create and
                                teamwork under the guidance of professional trainers.
                            </p>
                            <router-link :to="{ name: 'lessons' }" class="card-link">
                                <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">
                                Digital future skills training
                                <!-- <font-awesome-icon :icon="['fas', 'fa-code']"/> -->
                                <img src="@/assets/images/tracks/Frame_14787.svg" alt="" class="">
                            </h5>
                            <p class="card-text">
                                It is an international competition that encourages students to think, research, create and
                                teamwork under the guidance of professional trainers.
                            </p>
                            <router-link :to="{ name: 'lessons' }" class="card-link">
                                <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
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
    name: 'Tracks',
}
</script>

<style lang="scss" scoped>
#tracks {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    
    min-height: 100vh;
    // height: calc(100% - number)
    /* Firefox */
    // height: -moz-calc(100vh - 289px);
    /* Chrome, Safari */
    // height: -webkit-calc(100vh - 289px);
    /* IE9+ and future browsers */
    // height: calc(100vh - 289px);

    .card {
        background-color: $primary;
        color: $white;
        box-shadow: 0px 4px 0px 0px $box-shadow;

        h5 {
            // font-size: 20px;
            line-height: normal; 
            img {
                // margin-inline-start: 90%;
                float: right;
                // margin-right: 16px;
            }
        }

        p {
            // font-size: 18px;
            // line-height: 24px;
            text-align: justify;
        }

        a {
            float: right;
            // margin-right: 16px;

            svg {
                width: 24px;
                height: 24px;
                color: $white;
            }
        }
    }

    .card:hover {
        background: $linear-pink;
        background-clip: padding-box;
        -webkit-background-clip: padding-box;
        -webkit-text-fill-color: $white;
    }
}</style>