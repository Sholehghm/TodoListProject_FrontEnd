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
    const user = await API.post('/login',{email: email, password: password});
    console.log(user);
    return user;
    } catch (error) {
        return Promise.reject(error);
    }
     
};

export const logedInCheck =async () => {

        try {
            const UserEmail = await API.get('/get_user');
            return UserEmail;
            } catch (error) {
                return Promise.reject(error);
            }
            
};

export const logOut = async () => {
    try {
        const signout = await API.post('/logout',);
        return signout;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}