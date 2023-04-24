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
        error: ''
    },
    getters: {
    },
    mutations: {
        setErrorLogin(state, data) {
            state.error = data
        }
    },
    actions: {
        register({state}) {
           return postAxios(`${environment.mainApi}/send-mail/send`, state.login)
               .then(r => console.log(r))
        },
        OTPCheck({state}) {
            return postAxios(`${environment.mainApi}/send-mail/checkOtp`, state.login)
                .then(r => console.log(r))
        },
        login({state, commit}) {
            const login = {
                "username": state.login.email,
                "password": state.login.password
            }
            return post(`${environment.mainApi}/login/auth`, login)
                .then(res => {
                    setToken(res.token)
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
