<template>
  <nav class="navbar navbar-light">
    <div class="container">
      The Header of Thao Tran Van
      <br>
      <router-link class="navbar-brand" :to="{ name: 'AppComponent' }" >
      <!-- <router-link class="navbar-brand" to='/AppComponents'> -->
        HOME
      </router-link>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "RwvHeader"
  //  computed: {
  //     ...mapGetters([
  //     'currentUser',
  //     'isAuthenticated'
  //     ])
  //     }
};
</script>
