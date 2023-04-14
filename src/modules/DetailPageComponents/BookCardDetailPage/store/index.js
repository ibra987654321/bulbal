import {decodeJWT, postAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {},
    actions:{
        bookingAccommodation(store, payload) {
            console.log(decodeJWT())
            const data = {
                "checkIn": store.rootState.header.range.start.toISOString().slice(0, 19),
                "checkOut": store.rootState.header.range.end.toISOString().slice(0, 19),
                "userId": 0,
                "accommodationId": store.rootState.postDetail.createObject.id,
                "guests": store.rootState.header.countItemList[0].people
            }
            // postAxios(`${environment.mainApi}/booking/bookBed/${store.state.range.start.toISOString().slice(0, 19)}/${store.state.range.end.toISOString().slice(0, 19)}`, data)
            //     .then(r => {
            //         store.rootState.loading = false
            //         store.rootState.mainPageData = r.content
            //     }).catch(e => console.log(e.message))
        },
    }
}
