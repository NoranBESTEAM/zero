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

  <!-- Start Footer -->
  <Footer/>
  <!-- End Footer -->
  
</template>

<script>

import Header from '@/components/home/Header.vue';
import Categories from '@/components/home/Categories.vue';
import LeaderBoard from '@/components/home/LeaderBoard.vue';


export default {

  name: 'HomeView',

  components: {
    Header,
    Categories,
    LeaderBoard,
  }

}
</script>

<style scoped lang="scss">

</style>