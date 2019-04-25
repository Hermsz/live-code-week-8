<template>
 <div class="row">
        <div class="col-6">
          <form method="post" class="input-group mb-3">
            <input
              type="text"
              name="search"
              id="search"
              class="form-control"
              autocomplete="off"
              placeholder="Search..."/>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </div>
          </form>
          <div class="card mt-2">
            <div class="card-body" v-for="apod in listofApod" :key=apod._id>
              <h5 class="card-title">{{ apod.title }}</h5>

              <div>
                
    
                <!-- FOR IMAGE -->
                <img class="card-img-top" v-bind:src="apod.url" alt="Card image cap">
              </div>

              <div class="mt-3">
                <a href="#" class="btn btn-primary mr-2">See detail</a>
                <a href="#" class="btn btn-danger">Delete</a>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  let baseUrl = `http://localhost:3000`

export default {
  data() {
    return {
      listofApod :[]
    }
  },
  methods: {
    getAllApod() {
      axios.get(`${baseUrl}/apods`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        this.listofApod = data
        console.log(this.listofApod)
        console.log(data, '========')
      }) 
      .catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getAllApod()
  }
}
</script>

<style>

</style>
