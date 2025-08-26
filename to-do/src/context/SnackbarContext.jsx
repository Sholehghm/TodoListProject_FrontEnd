import React, { createContext, useContext, useState } from "react";

const SnackbarContext = createContext();

export const UseSnackbar = () => useContext(SnackbarContext);

export function SnackbarProvider({children}){
    const[snackbarOpen,setSnackbarOpen]=useState(false);
    const[snackbarMessage,setSnackbarMessage]=useState('');

    const snackbarHandleClose = () => {
        console.log('close');
        setSnackbarOpen(false);
    }

    const{Provider} = SnackbarContext;
    return(
     <Provider value={{snackbarOpen,setSnackbarOpen,snackbarHandleClose,snackbarMessage,setSnackbarMessage}}>
        {children}
     </Provider>   
    )
}