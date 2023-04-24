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
import { VueMaskDirective } from 'v-mask'
import dateFilterMobile from "@/helpers/dateFilterForMobile";
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});
Vue.use(VueMask);
Vue.use(Vuelidate);
Vue.directive('mask', VueMaskDirective);
Vue.directive('lazy', lazyLoad)
Vue.config.productionTip = false
Vue.filter('date', dateFilter)
Vue.filter('dmobi', dateFilterMobile)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
