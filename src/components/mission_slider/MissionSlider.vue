<template>
    <section id="mission_slider">
        <!-- https://www.w3schools.com/howto/howto_css_button_on_image.asp -->
        <div class="container">

            <h3 class="mb-4">
                <router-link :to="{ name: 'levels' }" class="text-reset me-2">
                    <font-awesome-icon :icon="['fas', 'fa-chevron-left']" />
                </router-link>
                Mission {{ $route.params.number }}
            </h3>

            <div class="image-wrapper">
                <img src="@/assets/images/mission_slider/mission_slider_bg.webp" alt=""
                    class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <img src="@/assets/images/mission_slider/mission_slider_bg_mobile.webp" alt=""
                    class="d-block d-sm-block d-md-block d-lg-none d-xl-none">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MissionSlider',
    props:{ 
        number:{
            type: String,
            // default: 'One'
        }
    }
}
</script>

<style lang="scss" scoped>
#mission_slider {

margin-top: 64px;
padding-top: 40px;
padding-bottom: 40px;
background: $my-gradient;
// min-height: 100vh;

h3 {
        color: $white;
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

.image-wrapper {

    width: 867px;
    height: 607px;
    margin: auto;
    border: 1px solid $pink;
    border-radius: 16px;
    padding: 44px 16px;

    @include breakpoints(x-small) {
        width: 343px;
        height: 205px;
        border-radius: 8px;
        padding: 16px;
    }

    @include breakpoints(small) {
        width: 343px;
        height: 205px;
        border-radius: 8px;
        padding: 16px;
    }

    @include breakpoints(medium) {
        width: 343px;
        height: 205px;
        border-radius: 8px;
        padding: 16px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

}

}
</style>