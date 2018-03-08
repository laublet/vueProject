<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <label for="firstName">Username </label>
      <input v-model="user.username" id="firstName" name="firstName" type="text" placeholder="Username" required><br><br>
      <label for="email">Email </label>
      <input v-model="user.email" id="email" name="email" type="email" placeholder="Email" required><br><br>
      <label for="password">Password</label>
      <input v-model="user.password" id="password" name="password" type="password" placeholder="password" required><br><br>
      <label for="message">Message </label>
      <input v-model="user.message" id="message" name="message" type="text" placeholder="message" required>
    </div>
   <!--  <input v-model="user.username" type="text" >
    <input v-model="user.email" type="email" >
    <input v-model="user.password" type="password" >
    <input v-model="user.message" type="string" > -->
    <button v-on:click = "post">Validate</button>
    <button v-on:click = "post"><router-link to="/">Accueil</router-link></button>
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
      }).then(function(res){
        if(res) this.$router.push('/')
          else alert('You need to fill all the informations');
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
