<template>

  <!-- Start Header -->
    <Header/>
  <!-- End Header -->

  <!-- Start Categories -->
  <Categories/>
  <!-- End Categories -->

  <!-- Start Leader Board -->
  <LeaderBoard/>
  <!-- End Leader Board -->

  <!-- Start Packages -->
  <Packages/>
  <!-- End Packages -->

  <!-- Start Footer -->
  <Footer/>
  <!-- End Footer -->
  
</template>

<script>

import Header from '@/components/home/Header.vue';
import Categories from '@/components/home/Categories.vue';
import LeaderBoard from '@/components/home/LeaderBoard.vue';
import Packages from '@/components/home/Packages.vue';

export default {

  name: 'HomeView',

  components: {
    Header,
    Categories,
    LeaderBoard,
    Packages,
  }

}
</script>

<style scoped lang="scss">

</style>