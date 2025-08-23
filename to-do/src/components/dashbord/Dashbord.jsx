import React from "react";
import { Button,Typography } from "@mui/material";
import { logOut } from "../../utils/authAPI";
import Loading from "../loading/Loading";

export default function Dashbord ({email,setEmail,setPassword, setLogedIn,setUser,checkLoading}){
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
            {checkLoading?
             <Loading/>:
            <Typography variant="h5">{email}</Typography>
        }
            <Button variant="contained"  onClick={logingOut}>log out</Button>
        </div>
    )
}