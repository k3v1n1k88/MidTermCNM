import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import Vue from 'vue'
import App from './App.vue'

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