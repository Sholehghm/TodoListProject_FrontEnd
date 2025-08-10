import API from "./axios";

export const register = (email,password) => {
    API.post('/register',{email: email,password: password})
}