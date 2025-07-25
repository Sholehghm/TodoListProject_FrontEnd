import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Textarea from '@mui/joy/Textarea';
import BasicDatePicker from "./BasicDatePicker";
import Typography from "@mui/material/Typography";
import BasicSelect from "./BasicSelect";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import {v4 as uuid4} from "uuid";
import dayjs from 'dayjs';
import { UseTask } from "../../context/TaskContext";
import { UseEditDialog } from "../../context/EditDialogContext";

export default function AddEditForm({ mode = 'add'}) {
    const{currentTask,tasks,setTasks}=UseTask();
    const{handleClose}=UseEditDialog();
    const[title,setTitle]=useState(currentTask?.title??'');
    const[description,setDescription]=useState(currentTask?.description??'');
    const[date,setDate]=useState(null);
    const[status,setStatus]=useState(currentTask?.status??'');

    const addTask = () =>{
        const newTask = {
            id: uuid4(),
            title,
            description,
            date: date ? date.format('YYYY-MM-DD') : '',
            status
        }
    setTasks([...tasks, newTask]);
    };
    const editTask = () =>{
        const clonedTasks =[...tasks];
        const index = clonedTasks.findIndex((item)=>item.id === currentTask.id);
        clonedTasks[index] = {...clonedTasks[index],title,description,date: date ? date.format('YYYY-MM-DD') : '',status};
        setTasks(clonedTasks);
        handleClose();
    };
    return (
        <Box className='flex-1'>
            <div className="flex ${mode=='add'?'h-screen'} items-center justify-center">
            <form className={`${mode=='add'?'w-[50%]':'w-screen'} flex flex-col gap-2 p-4`}>
                <Typography variant="body-1" className="font-bold">
                    {mode === 'add' ? 'Add a new task' : 'Edit task'}
                </Typography>
                <TextField
                    label="title"
                    variant="outlined"
                    className="w-full"
                    onChange={(e)=>{setTitle(e.target.value)}}
                    value={title}/>
                <Textarea
                    size="lg"
                    name="description"
                    placeholder="Description"
                    minRows={4}
                    onChange={(e)=>{setDescription(e.target.value)}}
                    value={description} />
                <BasicDatePicker value={date} onChange={setDate} />
                <BasicSelect value={status} onChange={(e) =>{setStatus(e.target.value)}} />
                <Button variant="contained" onClick={mode==='add'? addTask:editTask}>
                    <AddIcon />
                    {mode}
                </Button>

            </form>


        </div>
        </Box>
        
    )
};

