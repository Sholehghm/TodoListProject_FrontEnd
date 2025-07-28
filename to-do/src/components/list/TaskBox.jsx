import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Task from "../task/Task";
import { UseTask } from "../../context/TaskContext";
import { UseSearchTask } from "../../context/SearchTaskContext";


export default function TaskBox({status,date}) {
    const{tasks}=UseTask();
    const{searchedTitle,setSearchedTitle,searchedDate,setSearchedDate}=UseSearchTask();
    useEffect(()=>{
        setSearchedTitle('');
        setSearchedDate(null);
    },[TaskBox]);
    const[dropDown,setDropDown]=useState(true);
    const handleDropDown = () =>{
        dropDown===true?setDropDown(false):setDropDown(true);
    };
        return (
        <>
            <Box className={`flex flex-col w-[300px] h-fit gap-4 shadow-2xl p-2 ${status==='to do'? 'bg-blue-400':status==='in progress'? 'bg-red-400':'bg-green-500'}`}>
                <Box className='flex flex-row justify-between '>
                    <Typography>{status}</Typography>
                    <KeyboardArrowDownIcon onClick={handleDropDown} className={dropDown===true?'!block':'!hidden'} />
                    <KeyboardArrowUpIcon onClick={handleDropDown} className={dropDown===true?'!hidden':'!block'}/>

                </Box>
                {date? 
                tasks.map(task => (
                    task?.status == status && task?.date===date ? <Task task={task} key={task.id} dropDown={dropDown} /> : ''
                )):tasks.map(task => (
                    task?.status == status ? <Task task={task} key={task.id} dropDown={dropDown} /> : ''
                ))}
            </Box>
        </>
    )
}