import {post, postAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";
import {setToken} from "@/helpers/token";

export default {
    state: {
        dialog: false,
        login: {
            email: "",
            phoneNumber: "",
            password: "",
            otp: "",
            personalPass: ""
        },
        tab: 1,
        error: ''
    },
    getters: {
    },
    mutations: {
        setErrorLogin(state, data) {
            state.error = data
        },
        setLoginDialog: (state, data) => state.dialog = data
    },
    actions: {
        register({state}) {
           return post(`${environment.mainApi}/send-mail/send`, state.login)
        },
        OTPCheck({state}) {
            return post(`${environment.mainApi}/send-mail/checkOtp`, state.login)
        },
        login({state, commit}) {
            const login = {
                "username": state.login.email,
                "password": state.login.password
            }
            return post(`${environment.mainApi}/login/auth`, login)
                .then(res => {
                    setToken(res.data.token)
                    window.location.reload()
                })
                .catch(e => {
                    commit('setErrorLogin', 'Не правильный логин или пароль!')
                })
        }
    },
    modules: {
    }
}
