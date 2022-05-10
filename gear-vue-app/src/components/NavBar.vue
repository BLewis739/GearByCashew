<template>
  <nav>
    <router-link to="/" class='nav-link'>Home</router-link>
    <router-link to="/gearstyles" class='nav-link'>Styles</router-link>
    <router-link to="/gallery" class='nav-link'>Gallery</router-link>
    <router-link to="/about" class='nav-link'>About</router-link>
    <router-link to="/contact" class='nav-link'>Contact</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>