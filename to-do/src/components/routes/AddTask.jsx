import React, {useEffect} from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import AddEditForm from "../form/AddEditForm";
import SnackbarMessage from "../snackbar/SnackbarMessage";
import { logedInCheck } from "../../utils/authAPI";
import { UseUser } from "../../context/UserContext";

export default function AddTask(){
    const {setEmail,setLogedIn} = UseUser();

    useEffect(()=>{

        const checklogedIn =async()=>{
          try {
              const userEmail = await logedInCheck();
              setLogedIn(true);
              setEmail(userEmail);
              } catch (error) {
                console.log(error);
              } 
  
        };
  
        
          checklogedIn(); 
      
       
      },[]);

return(
    <div className='sm:flex sm:flex-row '>
        <ResponsiveAppBar/>
        <AddEditForm mode='add'/>
        <SnackbarMessage/>
    </div>
)
};
