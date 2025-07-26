import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Task from "../task/Task";
import TaskBox from "./TaskBox";

export default function TaskList(){
    return(
        <>
        <Box className='flex-1 pt-20 '>
        <Box className='flex flex-row justify-around flex-wrap'>
            <TaskBox status='to do' />
            <TaskBox status='in progress'/>
            <TaskBox status='completed'/>
        </Box>
        </Box>
        

        </>
    
    )
};