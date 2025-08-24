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
    const {getTasks} = UseTask();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(null);


    const getSearchTasks = async () => {
        try {
            await getTasks(title, date);

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
                        onChange={(e) => { setTitle(e.target.value) }}
                        value={title} />
                    <Button variant="contained" onClick={getSearchTasks }>
                    Searche by title
                    </Button>
                    <BasicDatePicker value={date} onChange={setDate} />
                    <Button variant="contained" onClick={getSearchTasks }>
                    Searche by dueDate
                    </Button>
                    <TaskList />
                </Box>
            </div>
            <EditDialog />
        </>

    )
};
