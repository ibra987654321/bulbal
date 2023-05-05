import {postAxios, post} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state:{
        galleryData:[],
        galleryMobileData:[],
        galleryFive: [],
        galleryByUser: []
    },
    mutations: {
        setImages(state, data) {
            state.galleryData = data
        },
        setMobileImages(state, data) {
            state.galleryMobileData = data
        },
        setFiveImage(state, data) {
            state.galleryFive = data
        },
        setAccommodationImageUser(state, data) {
            state.galleryByUser = data
        }
    },
    getters: {
        completedAllImages: state => {
            return state.galleryData
        },
        completedAllMobileImages: state => {
            return state.galleryMobileData
        },
        completedFiveImages: state => {
            return state.galleryFive.slice(1, 5)
        },
        oneImage: state => {
            return state.galleryFive[0]
        },
        getImagesForUserAccommodation(state) {
            return state.galleryData[0]
        }
    },
    actions: {
        getImagesForDetail(store,id) {
            post(`${environment.mainApi}/images/findAllByAccommodationId/${id}`)
                .then(response => {
                    let result = []
                    let two = true;
                    let three = false;
                    let count = 1;
                    for (let i = 0; i < response.data.length; i++){

                        if ( i >= 3){
                            if (three){
                                count++
                                if (count % 2 === 0) {
                                    result.push({col12: [[response.data[i + 1], response.data[i]], [response.data[i - 1]] ]})
                                } else {
                                    result.push({col12: [[response.data[i - 1]], [response.data[i], response.data[i + 1]]]})
                                }
                                i++;
                                three = false;
                                two = true;
                            }else if (two){
                                i++;
                                result.push({col6: [response.data[i - 1], response.data[i]]})
                                i++;
                                three = true;
                                two = false;
                            }
                        } else {
                            result.push({col12: [[response.data[i]], [response.data[i + 1], response.data[i + 2]]]})
                            i += 2
                        }
                    }
                    store.commit('setImages', result)
                    store.commit('setAccommodationImageUser', result[0])
                    store.commit('setMobileImages', response.data)
                }).catch(e => console.log(e.message))
        },
        getImagesForDetailUser(store,id) {
           return  post(`${environment.mainApi}/images/findAllByAccommodationId/${id}`)
                .then(response => {

                    let result = []
                    let two = true;
                    let three = false;
                    let count = 1;
                    for (let i = 0; i < response.data.length; i++){

                        if ( i >= 3){
                            if (three){
                                count++
                                if (count % 2 === 0) {
                                    result.push({col12: [[response.data[i + 1], response.data[i]], [response.data[i - 1]] ]})
                                } else {
                                    result.push({col12: [[response.data[i - 1]], [response.data[i], response.data[i + 1]]]})
                                }
                                i++;
                                three = false;
                                two = true;
                            }else if (two){
                                i++;
                                result.push({col6: [response.data[i - 1], response.data[i]]})
                                i++;
                                three = true;
                                two = false;
                            }
                        } else {
                            result.push({col12: [[response.data[i]], [response.data[i + 1], response.data[i + 2]]]})
                            i += 2
                        }
                    }
                    console.log(result)
                    return result
                }).catch(e => console.log(e.message))
        },
        getFiveImagesForDetail(store,id) {
            return postAxios(`${environment.mainApi}/images/findFiveByAccommodationId/${id}`)
                .then(r => {
                    store.commit('setFiveImage', r)
                    return r
                }).catch(e => console.log(e.message))
        }
    }
}
