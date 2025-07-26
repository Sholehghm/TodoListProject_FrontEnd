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

export default function AddEditForm({ mode = 'add',task,tasks,setTasks}) {
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[date,setDate]=useState(null);
    const[status,setStatus]=useState('');

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
    const editTask = () =>{};
    return (
        <Box className='flex-1'>
            <div className="flex h-screen items-center justify-center">
            <form className='w-[50%] flex flex-col gap-2'>
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

