import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import dateFilter from "@/helpers/dateFilter";
import VueMask from 'v-mask'
import {Vuelidate} from "vuelidate";
import lazyLoad from "@/directives/lazyLoad";
import VCalendar from 'v-calendar';
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});
Vue.use(VueMask);
Vue.use(Vuelidate);
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);
Vue.directive('lazy', lazyLoad)
Vue.config.productionTip = false
Vue.filter('date', dateFilter)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
