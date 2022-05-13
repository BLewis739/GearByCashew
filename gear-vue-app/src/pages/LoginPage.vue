<template>
  <div class='page-wrapper'>
    <header>
      Admin Login
    </header>
    <div class='login-form'>
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
  export default {
    name: 'LoginPage',
    data: () => ({
      loginCredentials: {
        username: null,
        password: null
        }
    }),
    methods: {
      setLoginFields(event) {
        this.loginCredentials[event.target.name] = event.target.value
      },
      async loginUser(event) {
        event.preventDefault()
        await axios.post('http://localhost:8000/api/token/', 
        this.loginCredentials)
        .then((res) => 
        localStorage.setItem('token', (res.data.access)))
      .catch((err) => console.log(err.data))
        this.resetLoginFields()

      },
      resetLoginFields() {
        this.loginCredentials.username = null
        this.loginCredentials.password = null
      }
    }
  }
</script>