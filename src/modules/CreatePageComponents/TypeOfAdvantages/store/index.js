import {getAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {
        conveniences: []
    },
    actions: {
        getAdvantage({state}) {
            getAxios(environment.adminApi + '/advantage/all')
                .then(r => {
                    state.conveniences = r
                })
        },
    },
}
