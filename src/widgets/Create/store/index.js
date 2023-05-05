import {checkObjectFieldsEmpty, decodeJWT, getAxios, post, postAxios} from "@/helpers/helpers";
import advantage from "@/modules/CreatePageComponents/TypeOfAdvantages/store/index"
import typeOfRoom from "@/modules/CreatePageComponents/TypeOfRoom/store/index";
import photo from "@/modules/CreatePageComponents/DownloadPhoto/store/index";
import preview from "@/modules/CreatePageComponents/Completion/store/index"
import {environment} from "@/environments/environment";
import {getSavedObject, removeObject, setSavedObject} from "@/widgets/Create/helpers/helpers";
export default {
    state: {
        createObject: {
            "ownerId": 0, // id user есть сейчас в БД от 1 до 5
            "region": "", // передаешь название региона
            "regionId": "", // передаешь название региона
            "locality": "", // передаешь название локации
            "titleOfAccommodation": "", // название дома
            "fullDescriptionOfAccommodation": "", // полное описание
            "conveniences": [],
        },
        rooms: {
            "accommodation_id": 0,
            "typeOfAccommodation": "",
            "price": 0,
            "typeOfBed": "string",
            "sizeOfBed": 0,
            "amountOfBed": 0,
            "pricePerBed": 0
        },
        typeOfBedId: '',
        regions:['Бишкек', 'Нарын', 'Ыссык-Кол', 'Ош', 'Талас', 'Жалал-Абад', 'Баткен'],
        locality: [],
        typeOfHouse: [],
        advantage: []

    },
    mutations: {
        setRegion(state, data) {
            state.createObject.region = data.name
            state.createObject.regionId = data.id
        },
        setBed(state, data) {
            state.rooms.typeOfBed = data.name
            state.rooms.sizeOfBed = data.size
        },
        setOwner: (state) => state.createObject.ownerId = decodeJWT().userId,
        setNullRoomData(state) {
            state.rooms = {
                "accommodation_id": 0,
                "typeOfAccommodation": "",
                "price": 0,
                "typeOfBed": "string",
                "sizeOfBed": 0,
                "amountOfBed": 0,
                "pricePerBed": 0
            }
        }
    },
    actions: {
        getTypeOfHouse({state}) {
            return getAxios(environment.adminApi + '/typeOfAccommodation/all')
                .then(r => {
                    state.typeOfHouse = r.reduce((accumulator, currentValue) => {
                        return accumulator.concat(currentValue.name);
                    }, []);
                })
        },
        getAdvantage({state}) {
            return getAxios(environment.adminApi + '/advantage/all')
                .then( r => state.advantage = r)
        },
        getRegion({state}) {
            return getAxios(environment.mainApi + '/region/all')
                .then( r => state.regions = r)
        },
        getLocality({state}, id) {
            return getAxios(environment.mainApi + '/locality/all/' + id)
                .then(r => {
                    state.locality = r.reduce((accumulator, currentValue) => {
                        return accumulator.concat(currentValue.name);
                    }, []);
                })
        },
        postRoom({state, commit}) {
            commit('setOwner')
            state.rooms.accommodation_id = getSavedObject().id
            return post(environment.mainApi + '/accommodation/saveBeds', state.rooms)
                .then(r => {
                    removeObject()
                    setSavedObject(r.data)
                })
        },
        postItem({state, commit}) {
            if (checkObjectFieldsEmpty(state.createObject)) {
                alert('Заполните все поля')
                return 'invalid'
            }
            commit('setOwner')
            return post(environment.mainApi + '/accommodation/saveAccommodation', state.createObject)
        },
    },
    modules: {
        advantage,
        typeOfRoom,
        photo,
        preview
    }
}
