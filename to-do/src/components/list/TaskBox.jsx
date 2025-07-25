import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Task from "../task/Task";
import { UseTask } from "../../context/TaskContext";


export default function TaskBox({status}) {
    const{tasks}=UseTask();
        return (
        <>
            <Box className='flex flex-col h-fit gap-4 shadow-2xl p-2 bg-gray-300'>
                <Box className='flex flex-row justify-between '>
                    <Typography>{status}</Typography>
                    <KeyboardArrowDownIcon />
                </Box>
                {tasks.map(task => (
                    task?.status == status ? <Task task={task} key={task.id} /> : ''
                ))}
            </Box>
        </>
    )
}