import {getAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {
        typeOfRoom: []
    },
    actions: {
        getAdvantage({state}) {
            getAxios(environment.adminApi + '/typeOfRoom/all')
                .then(r => {
                    state.typeOfRoom = r.reduce((accumulator, currentValue) => {
                        return accumulator.concat(currentValue.name);
                    }, []);
                })
        },
    },
}
