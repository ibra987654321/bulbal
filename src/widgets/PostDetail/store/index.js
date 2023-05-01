import gallery from "@/modules/DetailPageComponents/GalleryForDetailPage/store"
import booking from "@/modules/DetailPageComponents/BookCardDetailPage/store/index"
import comments from "@/modules/DetailPageComponents/CommentDetailPage/store/index"
import {getAxios, getUrl} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {
        createObject: {
            "ownerId": 1, // id user есть сейчас в БД от 1 до 5
            "region": "", // передаешь название региона
            "locality": "", // передаешь название локации
            "titleOfAccommodation": "", // название дома
            "fullDescriptionOfAccommodation": "", // полное описание
            "conveniences": [],
            price: 0
        },
        userData: {}
    },
    mutations: {
        updateData(state, data) {
            state.createObject = data
        },
        setUser(state, data) {
            state.userData = data
        },
    },
    getters: {
        priceForBooking: state => {
            return state.createObject.price
        },
    },
    actions: {
        getAccommodationById({commit},id) {
            getAxios(`${environment.mainApi}/accommodation/${id}`)
                .then(r => {
                    commit('updateData', r)
                }).catch(e => console.log(e.message))
        },
        getUserByAccommodationId({commit},id) {
            getUrl(`${environment.mainApi}/login/userDtoByByAccommodationId/${id}`)
                .then(r => commit('setUser', r.data)).catch(e => console.log(e.message))
        }
    },
    modules: {
        gallery,
        booking,
        comments
    }
}
