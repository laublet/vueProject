<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="user.username" type="text" >
    <input v-model="user.email" type="email" >
    <input v-model="user.password" type="password" >
    <input v-model="user.message" type="string" >
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Password: {{ user.password }}</p>
    <p>Message: {{ user.message }}</p>
    <button v-on:click = "post">Sign Up</button>
    <router-link to="/">Accueil</router-link>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      msg: 'Signup to OurAwesomeApp',
      user: {
        username: "",
        email: "",
        password: "",
        message: ""
      }
    }
  },
  methods: {
    post:function () {
      this.$http.post('http://localhost:8000/users', {
        username: this  .user.username,
        email: this.user.email,
        password: this.user.password,
        message: this.user.message
      }).then(function(data){
        console.log(data.body.content)
      })
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
