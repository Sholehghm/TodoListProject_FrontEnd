import React from "react";
import Box from "@mui/material/Box";
import TaskBox from "./TaskBox";

export default function TaskList({route}){
    
    return(
        <>
        <Box className='flex-1 pt-20 '>
        <Box className='flex flex-row justify-around flex-wrap'>
            <TaskBox status='to do' route={route} />
            <TaskBox status='in progress' route={route} />
            <TaskBox status='completed' route={route} />
        </Box>
        </Box>
        

        </>
    
    )
};