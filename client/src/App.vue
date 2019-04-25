<template>
  <div id="app">
    <div id="nav">
      <NavBar/>
      <AddApod v-if="isLogin"/>
      <SearchAndList v-if="isLogin"/>
      
    </div>
    <router-view />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import AddApod from '@/components/AddApod.vue'
  import SearchAndList from '@/components/SearchAndList.vue'
  import { mapState } from 'vuex'
  let baseUrl = `http://localhost:3000`

  export default {
    name: 'App',
    components: {
      NavBar,
      AddApod,
      SearchAndList
    },
    computed: mapState(['isLogin']),
  }

</script>

<style>

</style>
