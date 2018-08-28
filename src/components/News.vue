<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <h2>News page</h2>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/news">News</router-link>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return { msg: "Welcome to news of ThaoTranVan vuejs" };
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>

