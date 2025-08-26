import React, { useEffect } from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import TaskList from "../list/TaskList";
import EditDialog from "../form/EditDialog";
import { SearchTaskProvider, UseSearchTask } from "../../context/SearchTaskContext";
import dayjs from 'dayjs';
import { UseTask } from "../../context/TaskContext";
import DeleteDialog from "../form/DeleteDialoge";
import SnackbarMessage from "../snackbar/SnackbarMessage";

export default function TodayTasks() {
    const {getTasks} = UseTask();
    useEffect(()=>{
        const today = dayjs().format('YYYY/MM/DD')
        const getTodayTasks = async() =>{
            try {
                await getTasks(null,today);
                console.log('task');
            } catch (error) {
              console.log(error);  
            }

        };

        getTodayTasks();
},[]);
   
    return (
        <>
            <div className='sm:flex sm:flex-row '>
                <ResponsiveAppBar />
                    <TaskList route='today-tasks'/>
            </div>
            <EditDialog />
            <DeleteDialog />
            <SnackbarMessage/>
        </>

    )
};
