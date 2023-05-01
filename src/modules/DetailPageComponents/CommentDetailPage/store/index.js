import {decodeJWT, getUrl, post} from "@/helpers/helpers";
import {environment} from "@/environments/environment";
import {getToken} from "@/helpers/token";

export default {
    state:{
        comments: [],
        text: ''
    },
    mutations: {
        setComments: (state, data) => state.comments = data,
        addComments: (state, data) => state.comments.push(data),
        setCommentText: (state, data) => state.text = data,
    },
    getters: {
        getComments: state => state.comments,
        getCommentText: state => state.text,
    },

    actions: {
        getCommentsByAccommodationId({commit},id) {
            getUrl(`${environment.mainApi}/comment/allByAccommodationId/${id}`)
                .then(r => commit('setComments', r.data)).catch(e => console.log(e.message))
        },
        postCommentsByAccommodationId({commit, state},payload) {
            if (getToken()) {
                commit('setLoading', true)
                const data = {
                    "text": state.text,
                    "userId": decodeJWT().userId,
                    "accommodationId": payload.accommodationId
                }
                post(`${environment.mainApi}/comment/save`, data)
                    .then(r => {
                        commit('setLoading', false)
                        commit('addComments', r.data)
                        commit('setSnackbars', {text: 'Успешно добавлено', status: 'success'})
                        commit('setCommentText', '')
                    }).catch(e => {
                        commit('setLoading', false)
                    console.log(e.message)
                    commit('setSnackbars', {text: 'Что то пошло не так', status: 'error'})

                })
            } else {
                commit('setLoginDialog', true)
            }

        },
    }
}
