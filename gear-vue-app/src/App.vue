<template>
<div id="app">
<header>
  <div class='site-title'>
  Gear by Cashew
  </div>
  <NavBar/>
</header>
<main> 
  <router-view></router-view>
</main>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
