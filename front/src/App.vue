<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
import accueil from '@/components/accueil'
import login from '@/components/login'
import signup from '@/components/signup'
import list from '@/components/list'

export default {
  name: 'App',
  components: {
    accueil,
    signup,
    login,
    list
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
