import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Task from "../task/Task";
import TaskBox from "./TaskBox";

export default function TaskList({tasks}){
    return(
        <>
        <Box className='flex-1 '>
        <Box className='flex fles-row justify-around  flex-wrap'>
            <TaskBox status='to do' tasks={tasks}/>
            <TaskBox status='in progress' tasks={tasks}/>
            <TaskBox status='completed' tasks={tasks}/>
        </Box>
        </Box>
        

        </>
    
    )
};