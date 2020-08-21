<template>
  <b-container class="py-5 text-center">
    <h2>Welcome to profile page</h2>

    <div v-if="profileInfo">
      <b-row class="text-left">
        <b-col cols=12>
          <div class="my-3">
            <b-img :src="profileInfo.image ? `http://laqs.me/uploads/admin/${profileInfo.image}` : 'https://picsum.photos/125/125/?image=58'" rounded="circle" alt="Center image"></b-img>
          </div>
        </b-col>
        <b-col cols="2"><b>First Name</b></b-col>
        <b-col cols="10">: {{profileInfo.first_name}}</b-col>
        <b-col cols="2"><b>Last Name</b></b-col>
        <b-col cols="10">: {{profileInfo.last_name}}</b-col>
        <b-col cols="2"><b>Title</b></b-col>
        <b-col cols="10">: {{profileInfo.title}}</b-col>
        <b-col cols="2"><b>Email</b></b-col>
        <b-col cols="10">: {{profileInfo.email}}</b-col>
        <b-col cols="2"><b>Mobile Number</b></b-col>
        <b-col cols="10">: {{profileInfo.mobile_number}}</b-col>
        <b-col cols="2"><b>Address</b></b-col>
        <b-col cols="10">: {{profileInfo.address}}</b-col>
      </b-row>
    </div>

    <div class="mt-5">
      <b-modal id="modal-1" hide-footer title="Edit Profile">
        <b-form @submit.prevent="updateProfile(form)">
          <b-form-group
            id="input-group-1"
            label="First Name:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="text"
              v-model="form.first_name"
              required
              placeholder="First Name"
              :class="{ 'is-invalid': form.errors.has('first_name') }"
            ></b-form-input>
            <has-error :form="form" field="first_name"></has-error>
          </b-form-group>
          <b-form-group
            id="input-group-last_name"
            label="First Name:"
            label-for="input-last_name"
          >
            <b-form-input
              id="input-last_name"
              v-model="form.last_name"
              type="text"
              required
              placeholder="Last Name"
              :class="{ 'is-invalid': form.errors.has('last_name') }"
            ></b-form-input>
            <has-error :form="form" field="last_name"></has-error>
          </b-form-group>
          <b-form-group
            id="input-group-email"
            label="Email:"
            label-for="input-email"
          >
            <b-form-input
              id="input-email"
              v-model="form.email"
              type="email"
              required
              placeholder="Email"
              :class="{ 'is-invalid': form.errors.has('email') }"
            ></b-form-input>
            <has-error :form="form" field="email"></has-error>
          </b-form-group>
          <b-form-group
            id="input-group-mobile_number"
            label="Mobile Number:"
            label-for="input-mobile_number"
          >
            <b-form-input
              id="input-mobile_number"
              v-model="form.mobile_number"
              type="number"
              required
              placeholder="Mobile Number"
              :class="{ 'is-invalid': form.errors.has('mobile_number') }"
            ></b-form-input>
            <has-error :form="form" field="mobile_number"></has-error>
          </b-form-group>
          <b-form-group
            id="input-group-address"
            label="Address:"
            label-for="input-address"
          >
            <b-form-input
              id="input-address"
              v-model="form.address"
              type="text"
              placeholder="Address"
              :class="{ 'is-invalid': form.errors.has('address') }"
            ></b-form-input>
            <has-error :form="form" field="address"></has-error>
          </b-form-group>
          <b-form-group
            id="input-group-profile_picture"
            label="Change Profile:"
            label-for="input-profile_picture"
          >
            <b-form-file 
              class="mt-3"
              plain
              :class="{ 'is-invalid': form.errors.has('mobile_number') }"
              accept="image/*"
              @change="thumbnailImage"
            ></b-form-file>
            <has-error :form="form" field="profile_picture"></has-error>
          </b-form-group>

          <b-button type="submit" variant="primary">Update</b-button>
        </b-form>
      </b-modal>
      
      <router-link v-if="!isLoggedIn" to="/">You are not loged in. Please login</router-link>
      <b-button v-b-modal.modal-1 class="mr-2" variant="success" @click="fillForm(profileInfo)">Edit Profile</b-button>
      <button class="btn btn-danger" v-if="isLoggedIn" @click="logout">Logout</button>
    </div>
  </b-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import Vue from 'vue';
  import { Form, HasError, AlertError } from 'vform';
  Vue.component(HasError.name, HasError);
  Vue.component(AlertError.name, AlertError);

  export default {
    name: 'Profile',
    data() {  
      return {
        form: new Form({
          first_name: null,
          last_name: null,
          profile_picture: null,
          email: null,
          mobile_number: null,
          address: null,
        })
      }
    },
    computed: mapGetters(['isLoggedIn', 'profileInfo']),
    methods: {
      ...mapActions(['logout', 'fetchProfile', 'updateProfile']),
      fillForm(formData){
        this.form.fill(formData);
      },
      thumbnailImage(e){
          let file = e.target.files[0];
          const reader = new FileReader();

          reader.onloadend = (file) => {
              // console.log(file.target.result);
              this.form.profile_picture = file.target.result;
          };
          reader.readAsDataURL(file);
      },
    },
    created() {
      this.fetchProfile();
      // this.form.fill(this.profileInfo);
    }
  }
</script>