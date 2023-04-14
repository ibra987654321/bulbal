import {uploadMultipart} from "@/helpers/helpers";
import {environment} from "@/environments/environment";
import {getSavedObject} from "@/widgets/Create/helpers/helpers";

export default {
    state: {
        typeOfRoom: []
    },
    actions: {
        uploadImage(_, formData) {
            const id = getSavedObject().id
            return uploadMultipart(environment.mainApi + '/images/upload/' + id, formData)
        },
        uploadMainImage(_, formData) {
            const id = getSavedObject().id
            return uploadMultipart(environment.mainApi + '/images/uploadMainImage/' + id+ '/true', formData)
        },
    },
}
