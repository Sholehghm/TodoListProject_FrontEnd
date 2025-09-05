import React from "react";
import { Button,Typography } from "@mui/material";
import { logOut } from "../../utils/authAPI";
import Loading from "../loading/Loading";
import { UseUser } from "../../context/UserContext";
import { UseSnackbar } from "../../context/SnackbarContext";

export default function Dashboard (){
    const {email,setEmail,setPassword, setLogedIn,checkLoading} = UseUser();
    const {setSnackbarOpen,setSnackbarMessage} = UseSnackbar();
    const logingOut =async ()=>{
        try {
           const signout =  await logOut();
           setLogedIn(false);
            setEmail('');
            setPassword('');
            window.location.href = '/login';
        } catch (error) {
            setSnackbarMessage(err.response.data.error);
            setSnackbarOpen(true);
        }
        
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