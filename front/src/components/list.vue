<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="user.email" type="email" >
    <input v-model="user.password" type="password" >
    <button v-on:click = "post">Login</button>
    <router-link to="/">Accueil</router-link>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'You are Logged',
    }
  },
  methods: {
    get:function () {

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
