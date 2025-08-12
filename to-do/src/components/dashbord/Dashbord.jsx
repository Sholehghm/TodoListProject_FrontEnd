import React from "react";
import { Button,Typography } from "@mui/material";

export default function Dashbord ({email,setEmail,setPassword,setLogedIn}){
    const logOut = ()=>{
        setEmail('');
        setPassword('');
        setLogedIn(false);
        localStorage.removeItem('authToken')
    };

    return (
        <div>
            <Typography>{email}</Typography>
            <Button onClick={logOut}>log out</Button>
        </div>
    )
}