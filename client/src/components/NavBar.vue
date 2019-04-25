<template>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">From NASA with love</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link" >Home</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/login" >
                <button class="primary" v-if="!isLogin">Login</button>
              </router-link>
            </li>
            <li class="nav-item">
               <button class="primary" v-if="isLogin" v-on:click="signOut">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  methods: {
      signOut() {
        this.$store.commit('signOut')
        this.$router.push('/')
      },
      changePage(path) {
        this.$router.push(path)
      }
    },
    computed: mapState(['isLogin']),
}
</script>

<style>

</style>
