import React,{createContext, useContext,useState} from "react";


const EditDialogContext = createContext();

export const UseEditDialog = () => useContext(EditDialogContext);

export function EditProvider({children}){
const[open,setOpen]=useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const{Provider} = EditDialogContext;
return(
    <Provider value = {{open,handleOpen,handleClose}}>
        {children}
    </Provider>
);
};