<template>
  <div class="hello">
    <p>{{ list }}</p>
    <button v-on:click = "getListUSer">Get the user list</button>
    <router-link to="/">accueil</router-link>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      list: {}
    };
  },
  methods: {
    getListUSer: function() {
      this.$http
        .get("http://localhost:8000/list/users", {})
        .then(function(res) {
          this.list = res.data.content;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
