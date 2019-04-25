<template>
        <div class="jumbotron">
        <div class="row justify-content-center text-center">
          <div class="col-6">
            <div>
              <h2>Add Astronomy Picture</h2>
              <p> Please input date</em>, etc </p>
              <form method="post" class="input-group">
                <Datepicker v-model="date" />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
         <hr>
      </div>
</template>

<script>
  import axios from 'axios'
  import Datepicker from 'vuejs-datepicker'
  let baseUrl = `http://localhost:3000`

export default {
  data() {
    return {
      data: ''
    }
  },
  components: {
    Datepicker
  },
  methods: {
    addApod() {
      axios.post(`${baseUrl}/apods`)
      .then(() => {
        console.log(`Success add Apod`)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  }
}
</script>

<style>

</style>
