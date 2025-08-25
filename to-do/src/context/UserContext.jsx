import React, { createContext,useContext,useState } from "react";

const UserContext = createContext();

export const UseUser = () => useContext(UserContext);

export function UserProvider({children}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logedIn, setLogedIn] = useState(false);
    const [checkLoading, setCheckLoading] = useState(false);
    const [user, setUser] = useState(null);
    const {Provider} = UserContext;

    return(
        <Provider value={{email,setEmail,password,setPassword,logedIn,setLogedIn,checkLoading,setCheckLoading,user,setUser}}>
            {children}
        </Provider>
    )
}