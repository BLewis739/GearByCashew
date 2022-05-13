<template>
  <div class='page-wrapper'>
    <header>
      Admin Login
    </header>
    <div v-if="isAuthenticated" class='log-out'>
      Click the button to log out
      <LogOut @handleLogOut="handleLogOut" class="logout-button"/>
    </div>
    <div v-else class='login-form'>
      <form>
        <div>
          <input type="text" name="username" @change="setLoginFields($event)"/>
          <label>Username</label>
        </div>

        <div>
          <input type="password" name="password" @change="setLoginFields($event)"/>
          <label>Password</label>
        </div>

        <button type="button" @click="loginUser($event)">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import LogOut from '../components/LogOut.vue'

  export default {
    name: 'LoginPage',
    components: {
      LogOut
    },
    data: () => ({
      loginCredentials: {
        username: null,
        password: null
        },
        isAuthenticated: false
    }),
    mounted() {
      this.setIsAuthenticated()
    },
    methods: {
      navigateToOrders() {
        this.$router.push('/orders/')
      },
      setLoginFields(event) {
        this.loginCredentials[event.target.name] = event.target.value
      },
      handleLogOut() {
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('access_token')
        this.isAuthenticated = false
      },
      setIsAuthenticated() {
        if (localStorage.getItem('access_token')) {
          this.isAuthenticated = true
        } else {
          this.isAuthenticated = false
        }
      },
      async loginUser(event) {
        event.preventDefault()
        await axios.post('http://localhost:8000/api/token/', 
        this.loginCredentials)
        .then(res => {
          if (res.status === 200) {
            // AxiosInstance.defaults.headers['Authorization'] = `JWT ${res.data.access}`
            localStorage.setItem('access_token', res.data.access)
            localStorage.setItem('refresh_token', res.data.refresh)
            console.log('posting')
            this.isAuthenticated = true
          } else {
            return res
          }
        })
      .catch((err) => console.log(err.data))
        this.resetLoginFields()
        this.navigateToOrders()
      },
      resetLoginFields() {
        this.loginCredentials.username = null
        this.loginCredentials.password = null
      }
    }
  }
</script>