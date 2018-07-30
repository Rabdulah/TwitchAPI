// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import BootstrapVue from 'bootstrap-vue/docs/bootstrap-vue.esm.js';
// import 'bootstrap/docs/css/bootstrap.css';
// import 'bootstrap-vue/docs/bootstrap-vue.css';
// import 'bootstrap/docs/css/bootstrap.css'
// import 'bootstrap-vue/docs/bootstrap-vue.css'

// Vue.use(BootstrapVue);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
