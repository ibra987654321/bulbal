import {getAxios, getUrl} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {
        user: {}
    },
    getters: {
      user: state => state.user
    },
    mutations: {
      setUser(state, data) {
          state.user = data
      }
    },
    actions: {
        getUserById({commit}, payload) {
            return getUrl(environment.mainApi + '/user/findUserById/' + payload)
                .then(r => {
                    commit('setUser', r.data)
                    return r.data
                })
                .catch(e => commit('setSnackbars', {text: e.message, status: 'error'}))
        },
        getOwnerById({commit}, payload) {
            return getUrl(environment.mainApi + '/user/findUserById/' + payload)
                .then(r => {
                    commit('setUser', r.data)
                    return r.data
                })
                .catch(e => commit('setSnackbars', {text: e.message, status: 'error'}))
        }
    }
}
