import {getAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {
        typeOfRoom: [],
        typeOfBed: [],
    },
    actions: {
        getTypeOfRoom({state}) {
            getAxios(environment.adminApi + '/typeOfRoom/all')
                .then(r => {
                    state.typeOfRoom = r.reduce((accumulator, currentValue) => {
                        return accumulator.concat(currentValue.name);
                    }, []);
                })
        },
        getTypeOfBed(store) {
            getAxios(environment.adminApi + '/typeOfBed/all')
                .then(r => {
                    store.state.typeOfBed = r
                })
        },
    },
}
