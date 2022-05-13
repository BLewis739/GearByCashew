<template>
  <div class='card'>
    <button @click="handleLogOut">Log Out</button>
  </div>
</template>

<script>
  export default {
    name: 'LogOut',
    methods: {
      handleLogOut(event) {
        event.preventDefault()
        this.$emit("handleLogOut")
      }
    }
  }
</script>