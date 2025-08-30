import React, { createContext, useContext,useState } from "react";

const DeleteDialogContext = createContext();

export const UseDeleteDialog = () => useContext(DeleteDialogContext);

export function DeleteProvider({children}){
    const[deleteOpen,setDeleteOpen] = useState(false);
    const[route,setRoute] = useState('');
    const deleteHandleOpen = () => setDeleteOpen(true);
    const deleteHandleClose = () => setDeleteOpen(false);
    const{Provider} = DeleteDialogContext;
    return (
        <Provider value = {{deleteOpen,route,setRoute,deleteHandleOpen,deleteHandleClose}}>
            {children}
        </Provider>
    );
};