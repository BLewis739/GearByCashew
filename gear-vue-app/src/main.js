import { createApp } from 'vue'
import App from './App.vue'
import './styles/App.css'
import router from './router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import jwt_decode from 'jwt-decode'
// import Vuex from 'vuex'

// const store = new Vuex.Store({
//   state: {
//     jwt: localStorage.getItem('t'),
//     endpoints: {
//       obtainJWT: 'http://localhost:8000/api/token',
//       refreshJWT: 'http://localhost:8000/api/token/refresh'
//     }
//   },
//   mutations: {
//     updateToken(state, newToken) {
//       localStorage.setItem('t', newToken)
//       state.jwt = newToken
//     },
//     removeToken(state) {
//       localStorage.removeItem('t')
//       state.jwt = null
//     }
//   },
//   actions: {
//     obtainToken(username, password) {
//       const payload = {
//         username: username,
//         password: password
//       }

//       axios
//         .post(this.state.endpoints.obtainJWT, payload)
//         .then((response) => {
//           this.commit('updateToken', response.data.token)
//         })
//         .catch((error) => {
//           console.log(error)
//         })
//     },
//     refreshToken() {
//       const payload = {
//         token: this.state.jwt
//       }

//       axios
//         .post(this.state.endpoints.refreshJWT, payload)
//         .then((response) => {
//           this.commit('updateToken', response.data.token)
//         })
//         .catch((error) => {
//           console.log(error)
//         })
//     },
//     inspectToken() {
//       const token = this.state.jwt
//       if (token) {
//         const decoded = jwt_decode(token)
//         const exp = decoded.exp
//         const orig_iat = decoded.orig_iat
//         const seven_days = 604800
//         const thirty_minutes = 1800

//         if (
//           Date.now() / 1000 > exp - thirty_minutes &&
//           Date.now() / 1000 < orig_iat + seven_days
//         ) {
//           this.dispatch('refreshToken')
//         } else {
//           router.push('/login')
//         }
//       }
//     }
//   }
// }) IF USED, PUT .use(store) below here

createApp(App).use(router).mount('#app')
