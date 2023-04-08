import Vue from 'vue'
import Vuex from 'vuex'
import login from "@/modules/LoginPageComponents/login";
import counter from "@/entities/CountCardIItem/counter";
import create from "@/widgets/Create/store/index";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      loading: false,
      error: false,
      snackbars: {
          multiLine: true,
          snackbar: false,
          text: '',
      },
  },
  getters: {
  },
  mutations: {
      setError(state) {
          state.error = true
      },
      setSnackbars(state, text) {
          state.snackbars.snackbar = true
          state.snackbars.text = text
      },
  },
  actions: {
  },
  modules: {
    counter,
    login,
    create
  }
})
