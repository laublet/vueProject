<template>
  <div class="hello">
    <h1>Welcome to OurAwesomeApp</h1>
    <h1>{{ msg }}</h1>
    <button v-on:click = "post"><router-link to="/login">login</router-link></button>
    <button v-on:click = "post"> <router-link to="/signup">signup</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'accueil',
  data () {
    return {
      msg: 'Signup or Login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
