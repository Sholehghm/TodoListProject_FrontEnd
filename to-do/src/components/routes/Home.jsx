import React, { useEffect,useRef } from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import AddEditForm from "../form/AddEditForm";
import TaskList from "../list/TaskList";
import EditDialog from "../form/EditDialog";
import { SearchTaskProvider } from "../../context/SearchTaskContext";
import { UseTask } from "../../context/TaskContext";
import DeleteDialog from "../form/DeleteDialoge";
import SnackbarMessage from "../snackbar/SnackbarMessage";


export default function Home() {
    const{getTasks} = UseTask();


useEffect(()=>{
        getTasks();
},[]);

    return (
        <>
            <div className='sm:flex sm:flex-row '>
                <ResponsiveAppBar />
                    <TaskList route='home' />
            </div>
            <EditDialog />
            <DeleteDialog />
            <SnackbarMessage/>
        </>

    )
};
