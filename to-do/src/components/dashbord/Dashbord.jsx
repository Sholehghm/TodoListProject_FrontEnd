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
        <div className="flex flex-col gap-4">
            <Typography variant="h5">{email}</Typography>
            <Button variant="contained"  onClick={logOut}>log out</Button>
        </div>
    )
}