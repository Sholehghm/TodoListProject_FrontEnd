import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import TaskList from "../list/TaskList";
import EditDialog from "../form/EditDialog";
import { SearchTaskProvider, UseSearchTask } from "../../context/SearchTaskContext";
import BasicDatePicker from "../form/BasicDatePicker";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { UseTask } from "../../context/TaskContext";


export default function SearchTasks() {
    const {getTasks,setTasks,searchTitle,searchDate,setSearchTitle,setSearchDate} = UseTask();
    
    useEffect(()=>{
        setTasks([]);
        setSearchTitle('');
        setSearchDate(null);
    },[]);


    const getSearchTasks = async () => {
        try {
            await getTasks(searchTitle, searchDate);

        } catch (error) {
            console.log(error);
        }

    };



    return (
        <>
            <div className='sm:flex sm:flex-row '>
                <ResponsiveAppBar />
                <Box className='w-full mt-20'>
                    <TextField
                        label="title"
                        variant="outlined"
                        className="w-full"
                        onChange={(e) => { setSearchTitle(e.target.value) }}
                        value={searchTitle} />
                    <Button variant="contained" onClick={getSearchTasks }>
                    Searche by title
                    </Button>
                    <BasicDatePicker value={searchDate} onChange={setSearchDate} />
                    <Button variant="contained" onClick={getSearchTasks }>
                    Searche by dueDate
                    </Button>
                    <TaskList route='search-tasks'/>
                </Box>
            </div>
            <EditDialog />
        </>

    )
};
