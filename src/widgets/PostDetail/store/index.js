import gallery from "@/modules/DetailPageComponents/GalleryForDetailPage/store"
import booking from "@/modules/DetailPageComponents/BookCardDetailPage/store/index"
import comments from "@/modules/DetailPageComponents/CommentDetailPage/store/index"
import {getAxios, getUrl} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {
        createObject: {},
        ownerData: {
            id: 0
        }
    },
    mutations: {
        updateData(state, data) {
            state.createObject = data
        },
        setOwner(state, data) {
            state.ownerData = data
        },
    },
    getters: {
        priceForBooking: state => {
            return state.createObject.price
        },
        getOwnerData: state => state.ownerData
    },
    actions: {
        getAccommodationById({commit},id) {
            getAxios(`${environment.mainApi}/accommodation/${id}`)
                .then(r => {
                    commit('updateData', r)
                }).catch(e => console.log(e.message))
        },
        getUserByAccommodationId({state, commit},id) {
            return getUrl(`${environment.mainApi}/login/userDtoByByAccommodationId/${id}`)
                .then(r => {
                    commit('setOwner', r.data)
                    return r.data
                }).catch(e => console.log(e.message))
        }
    },
    modules: {
        gallery,
        booking,
        comments
    }
}
