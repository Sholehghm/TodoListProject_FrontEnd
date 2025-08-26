import React from "react";
import { Button,Typography } from "@mui/material";
import { logOut } from "../../utils/authAPI";
import Loading from "../loading/Loading";
import { UseUser } from "../../context/UserContext";

export default function Dashboard (){
    const {email,setEmail,setPassword, setLogedIn,checkLoading} = UseUser();
    const logingOut =async ()=>{
        try {
           const signout =  await logOut();
           console.log(signout);
        } catch (error) {
            console.log(error);
        }
        setLogedIn(false);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            {checkLoading?
             <Loading/>:
            <Typography variant="h5">{email}</Typography>
        }
            <Button variant="contained"  onClick={logingOut} className="!bg-green-700 w-[50%]">log out</Button>
        </div>
    )
}