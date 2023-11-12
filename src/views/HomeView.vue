<template>
  <!-- import navbar in main.js file -->
  <Navbar />
  <router-view/>
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

  <!-- Start Sponsors -->
  <Sponsors/>
  <!-- End Sponsors -->

  <!-- Start Mail -->
  <Mail/>
  <!-- End Mail -->

  <!-- Start Footer -->
  <Footer/>
  <!-- End Footer -->
  
</template>

<script>

import Header from '@/components/home/Header.vue';
import Categories from '@/components/home/Categories.vue';
import LeaderBoard from '@/components/home/LeaderBoard.vue';
import Packages from '@/components/home/Packages.vue';
import Sponsors from '@/components/home/Sponsors.vue';
import Mail from '@/components/home/Mail.vue';

export default {

  name: 'HomeView',

  components: {
    Header,
    Categories,
    LeaderBoard,
    Packages,
    Sponsors,
    Mail,
  }

}
</script>

<style scoped lang="scss">

</style>