import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
});


export const authAPI = {

    auth() {
        return instance.get<AuthMeResponseType>(`auth/me`).then(response => response.data)
    },

    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe} ).then(response => response.data)
    },

    logout() {
        return instance.delete<LogoutResponseType>(`auth/login` ).then(response => response.data)
    },


}

type LoginResponseType= {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}
type LogoutResponseType ={
    info: string
    error: string;
}

type AuthMeResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}