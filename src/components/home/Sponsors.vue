<template>
    <div id="sponsors">
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-3">
                    <img src="@/assets/images/sponsors/logo-sponsor.webp" alt="علم">
                </div>
                <div class="col-6 col-md-3">
                    <img src="@/assets/images/sponsors/logo-sponsor2.webp" alt="تطوير لتقنيات التعليم">
                </div>
                <div class="col-6 col-md-3">
                    <img src="@/assets/images/sponsors/logo-sponsor3.webp" alt="جامعه المجمعه">
                </div>
                <div class="col-6 col-md-3">
                    <img src="@/assets/images/sponsors/logo-sponsor4.webp" alt="جامعه الملك سعود">
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
#sponsors {
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