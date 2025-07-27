import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Task from "../task/Task";
import { UseTask } from "../../context/TaskContext";


export default function TaskBox({status}) {
    const{tasks}=UseTask();
    const[dropDown,setDropDown]=useState(true);
    const handleDropDown = () =>{
        dropDown===true?setDropDown(false):setDropDown(true);
    };
        return (
        <>
            <Box className='flex flex-col w-[30%] h-fit gap-4 shadow-2xl p-2 bg-gray-300'>
                <Box className='flex flex-row justify-between '>
                    <Typography>{status}</Typography>
                    <KeyboardArrowDownIcon onClick={handleDropDown} className={dropDown===true?'!block':'!hidden'} />
                    <KeyboardArrowUpIcon onClick={handleDropDown} className={dropDown===true?'!hidden':'!block'}/>

                </Box>
                {tasks.map(task => (
                    task?.status == status ? <Task task={task} key={task.id} dropDown={dropDown} /> : ''
                ))}
            </Box>
        </>
    )
}