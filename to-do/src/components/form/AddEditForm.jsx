import React from "react";
import TextField from "@mui/material/TextField";
import Textarea from '@mui/joy/Textarea';
import BasicDatePicker from "./BasicDatePicker";
import Typography from "@mui/material/Typography";
import BasicSelect from "./BasicSelect";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function AddEditForm({ mode = 'add' }) {
    return (
        <div className=" flex items-center justify-center ">
            <form className='w-[50%] flex flex-col gap-2'>
                <Typography variant="body-1" className="font-bold">
                    {mode === 'add' ? 'Add a new task' : 'Edit task'}
                </Typography>
                <TextField
                    label="title"
                    variant="outlined"
                    className="w-full" />
                <Textarea
                    size="lg"
                    name="description"
                    placeholder="Description"
                    minRows={4} />
                <BasicDatePicker />
                <BasicSelect />
                <Button variant="contained">
                    <AddIcon />
                    {mode}
                </Button>

            </form>


        </div>
    )
};

