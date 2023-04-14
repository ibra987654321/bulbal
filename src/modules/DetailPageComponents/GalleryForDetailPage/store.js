import {postAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state:{
        galleryData:[]
    },
    mutations: {
        setImages(state, data) {
            state.galleryData = data
        }
    },
    getters: {
        completedAllImages: state => {
            return state.galleryData
        },
        completedImages: state => {
            return state.galleryData.slice(0,4)
        },
        oneImage: state => {
            return state.galleryData[0]
        },
    },
    actions: {
        getImagesForDetail(store,id) {
           return postAxios(`${environment.mainApi}/images/findAllByAccommodationId/${id}`)
                .then(r => {
                    store.commit('setImages', r)
                    return r
                }).catch(e => console.log(e.message))
        }
    }
}
