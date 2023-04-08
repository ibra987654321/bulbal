import {getAxios, postAxios} from "@/helpers/helpers";
import advantage from "@/modules/CreatePageComponents/TypeOfAdvantages/store/index"
import typeOfRoom from "@/modules/CreatePageComponents/TypeOfRoom/store/index";
import photo from "@/modules/CreatePageComponents/DownloadPhoto/store/index";
import {environment} from "@/environments/environment";
import {removeObject, setSavedObject} from "@/widgets/Create/helpers/helpers";

export default {
    state: {
        createObject: {
            "id": 0, // сам генерирует
            "ownerId": 1, // id user есть сейчас в БД от 1 до 5
            "region": "", // передаешь название региона
            "locality": "", // передаешь название локации
            "typeOfAccommodation": "", // тип дома
            "titleOfAccommodation": "", // название дома
            "fullDescriptionOfAccommodation": "", // полное описание
            "pricePerBed": 0, // стоимость за 1 место, за 1 ночь
            "conveniences": [],
            typeOfRoom: "",
            beds: [
                {
                    id: 34343, // сам генерирует
                    name: "", // название кровати (king size и т.д.)
                    size: 0 // размер кровати
                }
            ]

        },
        regions:['Бишкек', 'Нарын', 'Ыссык-Кол', 'Ош', 'Талас', 'Жалал-Абад', 'Баткен'],
        locality: [],
        typeOfHouse: [],
        advantage: []

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
        postItem({state}) {
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
