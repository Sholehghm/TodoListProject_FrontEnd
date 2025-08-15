import React from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import AddEditForm from "../form/AddEditForm";
import TaskList from "../list/TaskList";
import EditDialog from "../form/EditDialog";
import { SearchTaskProvider } from "../../context/SearchTaskContext";


export default function Home() {
    return (
        <>
            <div className='sm:flex sm:flex-row '>
                <ResponsiveAppBar />
                    <TaskList />
            </div>
            <EditDialog />
        </>

    )
};
