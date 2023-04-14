import {checkObjectFieldsEmpty, getAxios, postAxios} from "@/helpers/helpers";
import advantage from "@/modules/CreatePageComponents/TypeOfAdvantages/store/index"
import typeOfRoom from "@/modules/CreatePageComponents/TypeOfRoom/store/index";
import photo from "@/modules/CreatePageComponents/DownloadPhoto/store/index";
import {environment} from "@/environments/environment";
import {getSavedObject, removeObject, setSavedObject} from "@/widgets/Create/helpers/helpers";
export default {
    state: {
        createObject: {
            "ownerId": 1, // id user есть сейчас в БД от 1 до 5
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
        regions:['Бишкек', 'Нарын', 'Ыссык-Кол', 'Ош', 'Талас', 'Жалал-Абад', 'Баткен'],
        locality: [],
        typeOfHouse: [],
        advantage: []

    },
    mutations: {
        setRegion(state, data) {
            state.createObject.region = data.name
            state.createObject.regionId = data.id
        }
    },
    actions: {
        getTypeOfHouse({state}) {
            getAxios(environment.adminApi + '/typeOfAccommodation/all')
                .then(r => {
                    state.typeOfHouse = r.reduce((accumulator, currentValue) => {
                        return accumulator.concat(currentValue.name);
                    }, []);
                })
        },
        getAdvantage({state}) {
            getAxios(environment.adminApi + '/advantage/all')
                .then( r => state.advantage = r)
        },
        getRegion({state}) {
            getAxios(environment.mainApi + '/region/all')
                .then( r => state.regions = r)
        },
        getLocality({state}, id) {
            getAxios(environment.mainApi + '/locality/all/' + id)
                .then(r => {
                    state.locality = r.reduce((accumulator, currentValue) => {
                        return accumulator.concat(currentValue.name);
                    }, []);
                })
        },
        postRoom({state}) {
            state.rooms.accommodation_id = getSavedObject().id
            postAxios(environment.mainApi + '/accommodation/saveRoom', state.rooms)
                .then(r => {
                    removeObject()
                    setSavedObject(r)
                })
        },
        postItem({state}) {
            if (checkObjectFieldsEmpty(state.createObject)) {
                alert('Заполните все поля')
                return 'invalid'
            }
            postAxios(environment.mainApi + '/accommodation/saveAccommodation', state.createObject)
                .then(r => {
                    removeObject()
                    setSavedObject(r)
                })
        },
    },
    modules: {
        advantage,
        typeOfRoom,
        photo
    }
}
