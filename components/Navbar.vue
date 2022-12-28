<!-- Please remove this file from your project -->
<template lang="pug">
div(class="navbar") 
  nav
    li 
      nuxt-link(to="/") Home
    li 
      nuxt-link(to="/about-us") About us  
</template>

<script>
export default {
  name: 'NuxtNavbar',
}
</script>
<style lang="scss">
.navbar {
  background-color: blue;
  display: flex;
  align-items: center;
  padding: 25px;
  margin-bottom: 25px;

  nav {
    display: flex;

    li {
      list-style: none;
      margin-right: 25px;

      a {
        color: white;
        font-size: 20px;
        text-decoration: none;
      }
    }
  }
}
</style>
