<template>

  <!-- Start Header -->
    <Header/>
  <!-- End Header -->

  <!-- Start Categories -->
  <Categories/>
  <!-- End Categories -->

  <!-- Start Footer -->
  <Footer/>
  <!-- End Footer -->
  
</template>

<script>

import Header from '@/components/home/Header.vue';
import Categories from '@/components/home/Categories.vue';


export default {

  name: 'HomeView',

  components: {
    Header,
    Categories,
  }

}
</script>

<style scoped lang="scss">

</style>