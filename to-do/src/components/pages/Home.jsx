import React from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import AddEditForm from "../form/AddEditForm";
import TaskList from "../list/TaskList";


export default function Home({tasks}){
return(
    <div className='sm:flex sm:flex-row '>
        <ResponsiveAppBar/>
        <TaskList tasks={tasks}/>
    </div>
)
};
