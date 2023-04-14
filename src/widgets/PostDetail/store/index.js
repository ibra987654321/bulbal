import gallery from "@/modules/DetailPageComponents/GalleryForDetailPage/store"
import booking from "@/modules/DetailPageComponents/BookCardDetailPage/store/index"
import {getAxios} from "@/helpers/helpers";
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
        },
    },
    mutations: {
        updateData(state, data) {
            state.createObject = data
        }
    },
    getters: {
        priceForBooking: state => {
            return state.createObject.price
        },
    },
    actions: {
        getAccommodationById({commit},id) {
            getAxios(`${environment.mainApi}/accommodation/${id}`)
                .then(r => commit('updateData', r)).catch(e => console.log(e.message))
        }
    },
    modules: {
        gallery,
        booking
    }
}
