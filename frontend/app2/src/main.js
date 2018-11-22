import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC0ynsTMNrW9Y3ZrzsxCDxiAZPdzHNYQbE',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
  })
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'
import { Modal } from 'bootstrap-vue/es/components';
Vue.use(Modal);
import { Card } from 'bootstrap-vue/es/components';
Vue.use(Card);
import { Scrollspy } from 'bootstrap-vue/es/directives';
Vue.use(Scrollspy);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.component('my-component', {
    components: {
        'b-modal': bModal
    },
    directives: {
        'b-modal': bModalDirective
    }
   
})