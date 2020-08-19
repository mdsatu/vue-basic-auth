import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';


Vue.use(VueRouter);
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/profile', component: Profile }
  ]
});
// window.router = router;

// Setup Bootstrap
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
