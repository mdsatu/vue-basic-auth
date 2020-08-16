<template>
  <b-container class="py-5 text-center">
    <h2>Welcome to profile page</h2>

    
    <router-link v-if="!isLoggedIn" to="/">You are not loged in. Please login</router-link>
    <button class="btn btn-danger mt-5" v-if="isLoggedIn" @click="logout">Logout</button>
  </b-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data() {
      return {

      }
    },
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['logout'])
  }
</script>