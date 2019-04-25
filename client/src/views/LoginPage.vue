<template>
      <div class="container my-4">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="card mb-4">
            <div class="card-header text-center">Login</div>
            <div class="card-body">
              <form method="post">
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary" @click="signIn">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
</template>

<script>
import axios from'axios'

export default {
  props: [],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch('signIn', {email: this.email, password: this.password})
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>
