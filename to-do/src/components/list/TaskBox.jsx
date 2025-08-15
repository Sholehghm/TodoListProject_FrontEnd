import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Task from "../task/Task";
import { UseTask } from "../../context/TaskContext";
import { UseSearchTask } from "../../context/SearchTaskContext";
import { getUserTasks } from "../../utils/taskAPI";


export default function TaskBox({status,date}) {
    const{tasks}=UseTask();
    console.log(tasks);
    const{searchedTitle,setSearchedTitle,searchedDate,setSearchedDate}=UseSearchTask();
    useEffect(()=>{
        setSearchedTitle('');
        setSearchedDate(null);
    },[]);

    const[dropDown,setDropDown]=useState(true);

    const handleDropDown = () =>{
        dropDown===true?setDropDown(false):setDropDown(true);
    };
        return (
        <>
            <Box className={`flex flex-col w-[300px] h-fit gap-4 shadow-2xl rounded-2xl bg-[#d6ccb1] p-2`}>
                <Box className='flex flex-row justify-between   '>
                    <Typography>{status}</Typography>
                    <KeyboardArrowDownIcon onClick={handleDropDown} className={dropDown===true?'!block':'!hidden'} />
                    <KeyboardArrowUpIcon onClick={handleDropDown} className={dropDown===true?'!hidden':'!block'}/>

                </Box>
                {date? 
                tasks.map(task => (
                    task?.status == status && task?.dueDate===date ? <Task task={task} key={task.id} dropDown={dropDown} /> : ''
                )):tasks.map(task => (
                    task?.status == status ? <Task task={task} key={task.id} dropDown={dropDown} /> : ''
                ))}
            </Box>
        </>
    )
}