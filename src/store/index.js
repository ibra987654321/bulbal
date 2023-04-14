import Vue from 'vue'
import Vuex from 'vuex'
import header from "@/widgets/header/store/index"
import login from "@/modules/LoginPageComponents/login";
import create from "@/widgets/Create/store/index";
import postDetail from "@/widgets/PostDetail/store/index"
import {postAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

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
      mainPageData: []
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
      getMainPageData(store) {
          store.state.loading = true
          const data = {
              "pageNumber": 0,
              "pageSize": 5,
              "sortBy": "price"
          }
          postAxios(`${environment.mainApi}/main-page/getMainPage`, data)
              .then(r => {
                  store.state.loading = false
                  store.state.mainPageData = r.content
              }).catch(e => console.log(e.message))
      }
  },
    modules: {
        header,
        login,
        create,
        postDetail
    }
})
