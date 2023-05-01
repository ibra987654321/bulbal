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
            // {title: 'Дети', subtitle: 'от 0 - 12 лет', objectName: 'child', child: 0},
            // {title: 'Домашние животные', subtitle: 'U', objectName: 'animal', animal: 0},
        ],
        selectedPlace: '',
        selectedTypeOfPlace: 'Комната',
        selectPlaceType: 'searchAccommodations',
        searchLoader: false

    },
    getters: {
        mainDateRange: state => state.range,
        getQuantityPersons: state => state.countItemList[0].people
    },
    mutations: {
      changeRange(state, data) {
          state.range = data
      },
        setPerson(state, data) {
          state.countItemList[0].people = data
        },
        setSelectType(state, data) {
          state.selectPlaceType = data
        }
    },
    actions:{
        searchByFilter(store, payload) {
            store.commit('setLoading', true)
            const data = {
                "pageNumber": 0,
                "pageSize": 5,
                "sortBy": "price",
                "locality": store.state.selectedPlace,
                "capacity": store.state.countItemList[0].people
            }
            postAxios(`${environment.mainApi}/main-page/${payload}/${store.state.range.start.toISOString().slice(0, 19)}/${store.state.range.end.toISOString().slice(0, 19)}`, data)
                .then(r => {
                        store.commit('setLoading', false)
                        store.commit('setSearchPage', r.content)
                }).catch(e => console.log(e.message))
        }
    }
}
