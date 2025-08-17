import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Textarea from '@mui/joy/Textarea';
import BasicDatePicker from "./BasicDatePicker";
import Typography from "@mui/material/Typography";
import BasicSelect from "./BasicSelect";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { UseTask } from "../../context/TaskContext";
import { UseEditDialog } from "../../context/EditDialogContext";
import { addNewTask, editExistedTask } from "../../utils/taskAPI";
import dayjs from "dayjs";

export default function AddEditForm({ mode = 'add'}) {
    const{currentTask,tasks,setTasks,getTasks}=UseTask();
    const{handleClose}=UseEditDialog();
    const[title,setTitle]=useState(currentTask?.title??'');
    const[description,setDescription]=useState(currentTask?.description??'');
    const[date,setDate]=useState(currentTask.dueDate ? dayjs(currentTask.dueDate) : null);
    const[status,setStatus]=useState(currentTask?.status??'');

    const addTask = async () =>{
        const newTask = {
            title,
            description,
            dueDate: date ? date.format('YYYY-MM-DD') : '',
            status
        }
        try {
            const callAddTask = await addNewTask(newTask); 
        } catch (error) {
           console.log(error); 
        }
    };
    const editTask = async () =>{
        const editedTask = {
            id: currentTask.id,
            title,
            description,
            dueDate: date ? date.format('YYYY-MM-DD') : '',
            status
        }
        
        try {
            const callEditTask = await editExistedTask(editedTask);
            await getTasks();
            handleClose();
        } catch (error) {
           console.log(error); 
        }
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

