<template>
    <div class="sponsors">
        <div class="container">
            <div class="row">
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <img src="@/assets/images/Sponsors/logo-sponsor.png" alt="علم">
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <img src="@/assets/images/Sponsors/logo-sponsor2.png" alt="تطوير لتقنيات التعليم">
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <img src="@/assets/images/Sponsors/logo-sponsor3.png" alt="جامعه المجمعه">
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <img src="@/assets/images/Sponsors/logo-sponsor4.png" alt="جامعه الملك سعود">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sponsors',
}
</script>

<style lang="scss" scoped>
.sponsors {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: $dark-mov;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>