import Vue from 'vue'
import Vuex from 'vuex'
import login from "@/modules/LoginPageComponents/login";
import counter from "@/entities/CountCardIItem/counter";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counter,
    login
  }
})
