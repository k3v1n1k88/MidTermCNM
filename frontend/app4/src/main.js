import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC0ynsTMNrW9Y3ZrzsxCDxiAZPdzHNYQbE",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})