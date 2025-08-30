import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Task from "../task/Task";
import { UseTask } from "../../context/TaskContext";
import Loading from "../loading/Loading";



export default function TaskBox({status,route}) {
    const{tasks,loading}=UseTask();
    
    const[dropDown,setDropDown]=useState(true);
    const handleDropDown = () =>{
        dropDown===true?setDropDown(false):setDropDown(true);
    };
        return (
        <>
            <Box className={`flex flex-col w-[300px] justify-between h-fit gap-3 shadow-2xl rounded-2xl bg-[#d6ccb1] px-2 pt-3`}>
                <Box className='flex flex-row justify-between   '>
                    <Typography>{status}</Typography>
                    <KeyboardArrowUpIcon onClick={handleDropDown} className={dropDown===true?'!block':'!hidden'} />
                    <KeyboardArrowDownIcon onClick={handleDropDown} className={dropDown===true?'!hidden':'!block'}/>
                </Box>
                 {loading? <Loading/>:<Box>{tasks? tasks.map(task => (
                    task?.status == status ? <Task task={task} key={task.id} route={route} dropDown={dropDown} /> : ''
                )):''}</Box>}
            </Box>
        </>
    )
}