<template>
  <b-container class="py-5">
    <b-form>
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
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="passeord"
              required
              placeholder="Your Password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Login</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        
      }
    }
  }
</script>