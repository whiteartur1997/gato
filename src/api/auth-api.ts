import axios from "axios";
import {ForgotPasswordRequestType} from "../features/password/ForgotPassword/ForgotPassword";

const settings = {
    withCredentials: true
}

export const authApi = {
    forgotPassword(requestData: ForgotPasswordRequestType) {
        return axios.post<{info: string}>("https://neko-back.herokuapp.com/2.0/auth/forgot", requestData, settings)
    }
}