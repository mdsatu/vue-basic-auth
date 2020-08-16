<template>
  <b-container class="py-5">
    <b-form @submit.prevent="onSubmit">
      <h2 class="text-center mb-3">login to your account</h2>
      <b-row class="justify-content-center">
        <b-col cols="5">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter Email"
              :class="{ 'is-invalid': form.errors.has('email') }"
            ></b-form-input>
            <has-error :form="form" field="email"></has-error>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Your Password"
              :class="{ 'is-invalid': form.errors.has('password') }"
            ></b-form-input>
            <has-error :form="form" field="password"></has-error>
          </b-form-group>
          <b-button type="submit" variant="primary" v-if="!isLoggedIn">Login</b-button>
          <router-link to="/profile" v-if="isLoggedIn">You are loged in. Go to profile</router-link>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import Vue from 'vue';
  import { Form, HasError, AlertError } from 'vform';
  Vue.component(HasError.name, HasError);
  Vue.component(AlertError.name, AlertError);

  import { router } from '../main'

  export default {
    data() {
      return {
        form: new Form({
          email: '',
          password: ''
        })
      }
    },
    created: () => {
      if(window.localStorage.getItem('back_token')){
        router.push('/profile')
      }
    },
    computed: mapGetters(['isLoggedIn']),
    methods: {
      onSubmit() {
        this.loginSubmit(this.form);
      //   // this.form.post('http://laqs.me/api/login')
      //   // .then((result) => {
      //   //   // console.log(result);
      //   //   this.finalizeLogin(result.data.token);
      //   // })
      //   // .catch(() => console.log('Something wrong!'));
      },
      // ...mapActions(['loginSubmit'])
      ...mapActions(['loginSubmit'])
    }
  }
</script>