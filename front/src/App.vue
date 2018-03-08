<template>
  <div id="app">
    <h1>Welcome to OurAwesomeApp</h1>
     <router-view></router-view>
  </div>
</template>

<script>
import accueil from '@/components/accueil'
import login from '@/components/login'
import signup from '@/components/signup'
export default {
  name: 'App',
  components: {
    accueil,
    signup,
    login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
