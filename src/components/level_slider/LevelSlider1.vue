<template>
    <section id="level_slider">
        <!-- https://getbootstrap.com/docs/5.3/components/scrollspy/ -->
        <!-- https://getbootstrap.com/docs/5.3/components/accordion/ -->
        <!-- https://alvarotrigo.com/blog/background-video-css/ -->
        <!-- https://www.w3schools.com/howto/howto_css_button_on_image.asp -->
        <div class="container">
            <div class="image-wrapper">

                <img src="@/assets/images/level_slider/level_slider_bg.png" alt="">
                <!-- <img src="@/assets/images/level_slider/placeholder-image.png" alt=""> -->

                <div class="header">
                    <router-link :to="{ name: '' }" class="text-reset btn btn-lg">
                        Start Here
                    </router-link>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'LevelSlider',
}
</script>

<style lang="scss" scoped>
#level_slider {
    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    // min-height: 100vh;
}

.image-wrapper {
    width: 867px;
    height: 607px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 16px;
    border: 1px solid $pink;
}

img {
    width: 100%;
    height: 100%;
    padding: 44px 16px;
    position: absolute;
    border-radius: 16px;
}

.header {
    position: relative;
}

a {
    // padding: 15px 32px;
    background: $linear-pink;
    background-clip: padding-box;
    -webkit-background-clip: padding-box;
    -webkit-text-fill-color: $white;
    border: 1px solid $pink;
    border-radius: 8px;
}
</style>