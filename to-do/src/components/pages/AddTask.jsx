import React from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import AddEditForm from "../form/AddEditForm";
import TaskList from "../list/TaskList";


export default function AddTask({tasks,setTasks}){
return(
    <div className='sm:flex sm:flex-row '>
        <ResponsiveAppBar/>
        <AddEditForm mode='add' tasks={tasks} setTasks={setTasks} />
     
    </div>
)
};
