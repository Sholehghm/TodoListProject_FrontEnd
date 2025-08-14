import API from "./axios";

export const register =async (email,password) => {
    try {
     const newUser = await API.post('/register',{email: email,password: password});
     console.log(newUser);
     return newUser;

    } catch (error) {
        console.log(error);
      return Promise.reject(error);  
    }
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

export const logedInCheck =async () => {
    const token = localStorage.getItem('authToken');
    if(token){
        try {
            const UserEmail = await API.post('/get_user',{headers:{
                'Authorization': 'Bearer ' + token
              }});
            console.log(UserEmail);
            return UserEmail;
            } catch (error) {
                return Promise.reject(error);
            }
    } 
     
};