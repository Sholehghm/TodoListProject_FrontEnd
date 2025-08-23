import React from "react";
import { Button,Typography } from "@mui/material";
import { logOut } from "../../utils/authAPI";

export default function Dashbord ({email,setEmail,setPassword, setLogedIn,setUser}){
    console.log(email);
    const logingOut =async ()=>{
        try {
           const signout =  await logOut();
           console.log(signout);
        } catch (error) {
            console.log(error);
        }
        setUser(null);
        setLogedIn(false);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex flex-col gap-4">
            <Typography variant="h5">{email}</Typography>
            <Button variant="contained"  onClick={logingOut}>log out</Button>
        </div>
    )
}