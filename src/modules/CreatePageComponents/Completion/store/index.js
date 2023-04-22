import {getAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {

    },
    actions: {
        getPreview(_, id) {
            return getAxios(environment.mainApi + '/accommodation/getPreview/' + id)
        }
    }
}
