import React, { useEffect } from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import TaskList from "../list/TaskList";
import EditDialog from "../form/EditDialog";
import { SearchTaskProvider, UseSearchTask } from "../../context/SearchTaskContext";
import BasicDatePicker from "../form/BasicDatePicker";
import Box from '@mui/material/Box'

export default function SearchTasks() {
    const{searchedDate,setSearchedDate}=UseSearchTask();
    return (
        <>
            <div className='sm:flex sm:flex-row '>
                <ResponsiveAppBar />
                <Box className='w-full mt-20'>
                <BasicDatePicker value={searchedDate} onChange={setSearchedDate} />
                <SearchTaskProvider>
                    <TaskList date={searchedDate ? searchedDate.format('YYYY/MM/DD'):''} />
                </SearchTaskProvider>
                </Box>
            </div>
            <EditDialog />
        </>

    )
};
