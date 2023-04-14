import {postAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {
        range: {
            start: new Date(2023, 3, 1),
            end: new Date(2023, 3, 5)
        },
        countItemList: [
            {title: 'Взрослые', subtitle: 'от 13 лет', objectName: 'people', people: 0},
            {title: 'Дети', subtitle: 'от 0 - 12 лет', objectName: 'child', child: 0},
            {title: 'Домашние животные', subtitle: 'U', objectName: 'animal', animal: 0},
        ],
        selectedPlace: '',
        selectedTypeOfPlace: '',
        searchLoader: false

    },
    getters: {
      mainDateRange: state => state.range
    },
    mutations: {
      changeRange(state, data) {
          state.range = data
      }
    },
    actions:{
        searchByFilter(store) {
            store.rootState.loading = true
            const data = {
                "pageNumber": 0,
                "pageSize": 5,
                "sortBy": "price",
                "region": store.state.selectedPlace
            }
            postAxios(`${environment.mainApi}/main-page/searchAccommodations/${store.state.range.start.toISOString().slice(0, 19)}/${store.state.range.end.toISOString().slice(0, 19)}`, data)
                .then(r => {
                    store.rootState.loading = false
                    store.rootState.mainPageData = r.content
                }).catch(e => console.log(e.message))
        }
    }
}
