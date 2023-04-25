import Vue from 'vue'
import Vuex from 'vuex'
import header from "@/widgets/header/store/index"
import login from "@/modules/LoginPageComponents/login";
import create from "@/widgets/Create/store/index";
import postDetail from "@/widgets/PostDetail/store/index"
import profileEdit from "@/modules/ProfileEditComponents/store/index"
import {post} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      mobileBook: false,
      content: false,
      page: 0,
      loading: false,
      error: false,
      snackbars: {
          multiLine: true,
          snackbar: false,
          text: '',
          status: ''
      },
      mainPageData: [],
      searchPageData: [],
      accommodationId: ''
  },
  getters: {
      getMainData: state => state.mainPageData,
      getSearchData: state => state.searchPageData,
      getAccommodationId: state => state.accommodationId,
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
      setNullMainData(state) {
          state.mainPageData = []
      },
      setMainData(state, data) {
          state.mainPageData.push(...data)
      },
      setSearchPage(state, data) {
          state.searchPageData = data
      },
      setLoading(state, v) {
          state.loading = v
      },
      setAccommodationId(state, data) {
          state.accommodationId = data
      }
  },
  actions: {
      getMainPageData(store) {
          store.commit('setLoading', true)
          store.state.header.selectedPlace = ''
          const data = {
              "pageNumber": store.state.page,
              "pageSize": 12,
              "sortBy": "price"
          }
          post(`${environment.mainApi}/main-page/getMainPage`, data)
              .then(r => {
                  store.commit('setLoading', false)
                  store.commit('setMainData', r.data.content)

              }).catch(e => {
                  store.commit('setLoading', false)
                  store.commit('setSnackbars', {text: e.message, status: 'error'})
              })
      },
      // exampleApi({state}) {
      //     return axios.get(`https://api.unsplash.com/photos?page=${state.page}`,
      //         {
      //             headers: {
      //                 Authorization: "Client-ID 5C84XakVl44t6sdB6F6qZ5kpvM2MsuuWibBxiRtVaE0",
      //                 "Accept-Version": "v1"
      //             }
      //         })
      //         .then(response => {
      //             return response.data
      //         })
      //         .catch((e) => {
      //             console.log(e)
      //         })
      // }
  },
    modules: {
        header,
        login,
        create,
        postDetail,
        profileEdit
    }
})
