import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
let baseUrl = `http://localhost:3000`
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(Vuex);
Vue.use(VueSweetalert2);

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('token') !== null,
  },
  mutations: {
    changeLoginState(state, data) {
      console.log(data)
      state.isLogin = true
      localStorage.setItem('token', data.accessToken)
      Vue.swal({
        position: 'center',
        type: 'success',
        title: 'Success Login',
        showConfirmButton: false,
        timer: 1500
      })
      if (localStorage.getItem('token')) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
    signOut(state) {
      localStorage.clear()
      state.isLogin = false
      Vue.swal({
        position: 'center',
        type: 'success',
        title: 'Log Out Success',
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
  actions: {
    signIn({ commit, dispatch }, payload) {

      axios.post(`${baseUrl}/users/login`, {
          email: payload.email,
          password: payload.password,
        })
        .then(({ data }) => {
          commit('changeLoginState', data)
        })
        .catch(err => {
          Vue.swal({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
          console.log(err.message)
        })
    },
  },
});