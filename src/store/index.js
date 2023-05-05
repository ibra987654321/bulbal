import Vue from 'vue'
import Vuex from 'vuex'
import header from "@/widgets/header/store/index"
import login from "@/modules/LoginPageComponents/login";
import create from "@/widgets/Create/store/index";
import postDetail from "@/widgets/PostDetail/store/index"
import profileEdit from "@/modules/ProfileEditComponents/store/index"
import profileDetail from "@/widgets/ProfileDetail/store/index"
import reportIndex from "@/widgets/Report/store/index"
import {post} from "@/helpers/helpers";
import {environment} from "@/environments/environment";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      mobileBook: false,
      backRoute: false,
      empty: false,
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
      getLoading: state => state.loading,
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
      },
      setRoute(state, data) {
          state.backRoute = data
      }
  },
  actions: {
      getMainPageData(store) {
          if (!store.state.backRoute) {
              store.commit('setLoading', true)
              store.state.header.selectedPlace = ''
              const data = {
                  "pageNumber": store.state.page,
                  "pageSize": 12,
                  "sortBy": "price"
              }
              post(`${environment.mainApi}/main-page/getMainPage`, data)
                  .then(r => {
                      if (r.data.content.length) {
                          store.commit('setLoading', false)
                          store.commit('setMainData', r.data.content)
                          return
                      }
                      store.state.empty = true
                  }).catch(e => {
                  store.commit('setLoading', false)
                  store.commit('setSnackbars', {text: e.message, status: 'error'})
              })
          } else {
              store.commit('setRoute', false)
          }

      },
      exampleApi({state}) {
          return axios.get(`https://api.unsplash.com/photos?page=${state.page}`,
              {
                  headers: {
                      Authorization: "Client-ID 5C84XakVl44t6sdB6F6qZ5kpvM2MsuuWibBxiRtVaE0",
                      "Accept-Version": "v1"
                  }
              })
              .then(response => {
                    let result = []
                  let two = true;
                  let three = false;
                  let count = 1;
                  for (let i = 0; i < response.data.length; i++){

                      if ( i >= 3){
                          if (three){
                              count++
                              if (count % 2 === 0) {
                                  result.push({col12: [[response.data[i + 1], response.data[i]], [response.data[i - 1]] ]})
                              } else {
                                  result.push({col12: [[response.data[i - 1]], [response.data[i], response.data[i + 1]]]})
                              }
                              i++;
                              three = false;
                              two = true;
                          }else if (two){
                              i++;
                              result.push({col6: [response.data[i - 1], response.data[i]]})
                              i++;
                              three = true;
                              two = false;
                          }
                      } else {
                          result.push({col12: [[response.data[i]], [response.data[i + 1], response.data[i + 2]]]})
                          i += 2
                      }
                  }

                  console.log(result)

                  return result
              })
              .catch((e) => {
                  console.log(e)
              })
      }
  },
    modules: {
        header,
        login,
        create,
        postDetail,
        profileEdit,
        profileDetail,
        reportIndex
    }
})
