import React from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import AddEditForm from "../form/AddEditForm";


export default function Home(){
return(
    <div className='sm:flex sm:flex-row '>
        <ResponsiveAppBar/>
        
        <AddEditForm mode='add' />
     
    </div>
)
};
