import {decodeJWT, getUrl, post, putAxios, putUrl} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {
        profile: {
            "userId": 0,
            "nickName": "",
            "name": "",
            "liveIn": "",
            "language": "",
            "contactPerson": "",
            "instagramUrl": "",
            "twitterUrl": "",
            "description": "",
            "phoneNumber": "",
            "hobbies": [],
            "travels": []
        }
    },
    mutations: {
      setEditProfile: (state, data) => state.profile = data,
      emptyEditProfile: (state, data) => state.profile = {
          "nickName": "",
          "name": "",
          "liveIn": "",
          "language": "",
          "contactPerson": "",
          "instagramUrl": "",
          "twitterUrl": "",
          "description": "",
          "phoneNumber": "",
          "hobbies": [],
          "travels": []
      },
    },
    actions: {
        profileEdit({state, commit}) {
            if (decodeJWT()) {
                state.profile.userId = decodeJWT().userId
            }
            putUrl(`${environment.mainApi}/user/fillOutAForm`, state.profile)
                .then(r => {
                    commit('setEditProfile', r.data)
                    commit('setSnackbars', {text: 'Успено изменено', status: 'success'})
                })
                .catch(e => {
                    console.log(e.message)
                    commit('setSnackbars', {text: 'XЧто то пошло не так', status: 'error'})
                })
        },
        getUserForEditById({commit}, payload) {
            return getUrl(environment.mainApi + '/user/findUserById/' + payload)
                .then(r => {
                    commit('setEditProfile', r.data)
                })
                .catch(e => commit('setSnackbars', {text: e.message, status: 'error'}))
        }
    }
}
