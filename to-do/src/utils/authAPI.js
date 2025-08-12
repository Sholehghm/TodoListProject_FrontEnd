import API from "./axios";

export const register = (email,password) => {
    API.post('/register',{email: email,password: password})
};

export const login =async (email,password) => {
    try {
    const token = await API.post('/login',{email: email, password: password});
    console.log(token);
    return token
    } catch (error) {
        return Promise.reject(error);
    }
     
};