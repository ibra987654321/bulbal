import Vue from 'vue'
import Vuex from 'vuex'
import header from "@/widgets/header/store/index"
import login from "@/modules/LoginPageComponents/login";
import create from "@/widgets/Create/store/index";
import postDetail from "@/widgets/PostDetail/store/index"
import profileEdit from "@/modules/ProfileEditComponents/store/index"
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
          status: ''
      },
      mainPageData: []
  },
  getters: {
      getMainData: state => state.mainPageData
  },
  mutations: {
      setError(state) {
          state.error = true
      },
      setSnackbars(state, data) {
          state.snackbars.snackbar = true
          state.snackbars.text = data.text
          state.snackbars.status = data.status
      },
      setMainData(state, data) {
          state.mainPageData = data
      },
      setLoading(state, v) {
          state.loading = v
      }
  },
  actions: {
      getMainPageData(store) {
          store.commit('setLoading', true)
          store.state.header.selectedPlace = ''
          const data = {
              "pageNumber": 0,
              "pageSize": 5,
              "sortBy": "price"
          }
          postAxios(`${environment.mainApi}/main-page/getMainPage`, data)
              .then(r => {
                      store.commit('setLoading', false)
                      store.commit('setMainData', r.content)

              }).catch(e => {
              store.commit('setLoading', false)
              console.log(e.message)
          })
      }
  },
    modules: {
        header,
        login,
        create,
        postDetail,
        profileEdit
    }
})
