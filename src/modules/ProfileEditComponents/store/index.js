import {decodeJWT, post, putAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {
        profile: {
            "userId": 0,
            "nickName": "string",
            "name": "string",
            "liveIn": "string",
            "language": "string",
            "contactPerson": "",
            "instagramUrl": "string",
            "twitterUrl": "string",
            "description": "string",
            "phoneNumber": "",
            "hobbies": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "travels": [
                {
                    "id": 0,
                    "name": "string"
                }
            ]
        }
    },
    actions: {
        profileEdit({state}) {
            if (decodeJWT()) {
                state.profile.userId = decodeJWT().userId
            }
            post(`${environment.mainApi}/user/fillOutAForm`, state.profile)
                .then(r => {
                    console.log(r)
                })
                .catch(e => {
                    console.log(e.message)
                })
        }
    }
}
