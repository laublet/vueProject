<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click = "getListUSer">Get the user list</button>
    <button v-on:click = "post"> <router-link to="/">accueil</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'GG',
    }
  },
  methods: {
  //   getListUSer:function () {
  //     let localToken = localStorage.getItem('Clef');
  //     console.log(localToken);
  //     this.$http.get('http://localhost:8000/list/users', {headers: {'Authorization': localToken}
  //   }).then(function(data){
  //     console.log(data);
  //   })
  // }
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
