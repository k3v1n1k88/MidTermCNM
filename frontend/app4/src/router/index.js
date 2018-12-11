import Vue from 'vue'
// import * as VueGoogleMaps from 'vue2-google-maps'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signin from '@/components/Signin'
import BootstrapVue from 'bootstrap-vue'
import SigninSuccess from '@/components/SigninSuccess'
import SignupSuccess from '@/components/SignupSuccess'
import ListRequests from '@/components/ListRequests'
import Signup from '@/components/Signup'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyC0ynsTMNrW9Y3ZrzsxCDxiAZPdzHNYQbE',
//     libraries: 'places', // This is required if you use the Autocomplete plugin
//     // OR: libraries: 'places,drawing'
//     // OR: libraries: 'places,drawing,visualization'
//     // (as you require)
 
//     //// If you want to set the version, you can do so:
//     // v: '3.26',
//   },
 
//   //// If you intend to programmatically custom event listener code
//   //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
//   //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
//   //// you might need to turn this on.
//   // autobindAllEvents: false,
 
//   //// If you want to manually install components, e.g.
//   //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
//   //// Vue.component('GmapMarker', GmapMarker)
//   //// then disable the following:
//   // installComponents: true,
// })

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Signin	
		},
		{
			path: '/signin-success/',
			name: 'SigninSuccess',
			component: SigninSuccess,
			props: true
		},
		{
			path: '/signup-success/',
			name: 'SignupSuccess',
			component: SignupSuccess,
			props: true
		},
		{
			path: '/list',
			name: 'ListRequests',
			component: ListRequests
		},
		{
			path: '/signup',
			name: 'Signup',
			component: Signup
		}
	],

})
