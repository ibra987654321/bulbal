import axios from "axios";
import store from "@/store";
import {getToken} from "@/helpers/token";

export const getAxios = url => {
    // store.state.loading = true
    // store.state.error = false
    return axios({
        method: 'GET',
        url,
        // headers: {
        //     // 'Content-Type': 'application/json',
        //     Authorization: `Bearer ${getToken()}`,
        // },
    }).then(r => {
        // store.state.loading = false
        return r.data
    })
        .catch(e => {
            // store.state.loading = false
            store.commit('setError')
            store.commit('setSnackbars', e.message)
        })
}
export const uploadMultipart = (url, formData) => {
    return axios.post(url,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                // Authorization: `Bearer ${getToken()}`,
            },
        })
        .then(r => r.data)
}
export const postAxios = (url, payload) => {
    // store.state.loading = true
    return axios({
        method: 'POST',
        url,
        // headers: {
        //     // 'Content-Type': 'application/json',
        //     Authorization: `Bearer ${getToken()}`,
        // },
        data: payload,
    })
        .then(r => {
            return r.data
        })
        .catch(e => {
            return e.message
        })
}
export const post = (url, payload) => {
    return axios({
        method: 'POST',
        url,
        // headers: {
        //     // 'Content-Type': 'application/json',
        //     Authorization: `Bearer ${getToken()}`,
        // },
        data: payload,
    })
}
export const postWithoutSnack = (url, payload) => {
    store.state.loading = true
    store.state.error = false
    return axios({
        method: 'POST',
        url,
        // headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${getToken()}`,
        // },
        data: payload,
    })
        .then(r => {
            store.state.loading = false
            return r.data
        })
        .catch(e => {
            store.state.loading = false
            store.commit('setError')
            store.commit('setSnackbars', e.message)
        })
}

export const uploadAxios = (url, formData) => {
    store.state.loading = true
    store.state.error = false
    return axios.post(
        url,
        formData,
        {
            // headers: {
            //     'Content-Type': 'multipart/form-data',
            //     Authorization: `Bearer ${getToken()}`,
            // },
        },
    )
        .then(r => {
            store.state.loading = false
            store.commit('setSnackbars', 'Успешно отправлено')
            return r.data
        })
        .catch(e => {
            store.state.loading = false
            store.commit('setError')
            store.commit('setSnackbars', e.message)
        })
}

export const extraAxios = (method, url, payload) => {
    store.state.loading = true
    store.state.error = false
    axios({
        method: method,
        url,
        // headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${getToken()}`,
        // },
        data: payload,
    }).then(r => {
        store.state.loading = false
        store.commit('setSnackbars', 'Успешно изменено')
        return r.data
    })
        .catch(e => {
            store.state.loading = false
            store.commit('setError')
            store.commit('setSnackbars', e.message)
        })
}

export const putAxios = (url, payload) => {
    // store.state.loading = true
    // store.state.error = false
    return axios({
        method: 'PUT',
        url,
        // headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${getToken()}`,
        // },
        data: payload,
    }).then(r => {
        // store.state.loading = false
        store.commit('setSnackbars', 'Успешно изменено')
        return r.data
    })
        .catch(e => {
            // store.state.loading = false
            if (e.response) {
                store.commit('setSnackbars', e.response.data)
                return
            }
            store.commit('setError')
            store.commit('setSnackbars', e.message)
        })
}
export const deleteAxios = (url, payload) => {
    store.state.loading = true
    store.state.error = false
    return axios({
        method: 'DELETE',
        url,
        // headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${getToken()}`,
        // },
        data: payload,
    }).then(r => {
        r.data
        store.state.loading = false
        store.commit('setSnackbars', 'Успешно удалено')
    })
        .catch(e => {
            store.state.loading = false
            store.commit('setError')
            store.commit('setSnackbars', e.message)
        })
}
export const checkObjectFieldsEmpty = (obj) =>  {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (!obj[prop]) {
                return true; // если хоть одно поле пустое, возвращаем true
            }
        }
    }
    return false; // если все поля заполнены, возвращаем false
}

export function decodeJWT() {
    if (getToken()) {
        const base64Url = getToken().split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''))

        return JSON.parse(jsonPayload)
    }
}
