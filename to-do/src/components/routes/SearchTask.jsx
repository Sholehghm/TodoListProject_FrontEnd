import React, { useEffect } from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import TaskList from "../list/TaskList";
import EditDialog from "../form/EditDialog";
import BasicDatePicker from "../form/BasicDatePicker";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { UseTask } from "../../context/TaskContext";
import DeleteDialog from "../form/DeleteDialoge";
import SnackbarMessage from "../snackbar/SnackbarMessage";
import { logedInCheck } from "../../utils/authAPI";
import { UseUser } from "../../context/UserContext";

export default function SearchTasks() {
    const {setEmail,setLogedIn} = UseUser();
    const {getTasks,setTasks,searchTitle,searchDate,setSearchTitle,setSearchDate} = UseTask();
    
    useEffect(()=>{
        const checklogedIn =async()=>{
            try {
                const userEmail = await logedInCheck();
                setLogedIn(true);
                setEmail(userEmail);
                } catch (error) {
                  console.log(error);
                } 
    
          };
     
        checklogedIn();
        setTasks([]);
        setSearchTitle('');
        setSearchDate(null);
    },[]);


    const getSearchTasks = async () => {
        try {
            await getTasks(searchTitle, searchDate);

        } catch (error) {
            console.log(error);
        }

    };



    return (
        <>
            <div className='sm:flex sm:flex-row '>
                <ResponsiveAppBar />
                <Box className='w-full mt-20 flex flex-col gap-4'>
                    <Box className='w-full flex flex-row gap-4 items-center p-4'>
                        <TextField
                        label="title"
                        variant="outlined"
                        className="w-full bg-white rounded-md"
                        onChange={(e) => { setSearchTitle(e.target.value) }}
                        value={searchTitle} />
                    <Button variant="contained" onClick={getSearchTasks } className="!bg-green-700 w-full h-10">
                    Searche by title
                    </Button>
                    </Box>
                    <Box className='w-full flex flex-row gap-4 items-center p-4'>
                    <BasicDatePicker value={searchDate} onChange={setSearchDate} />
                    <Button variant="contained" onClick={getSearchTasks } className="!bg-green-700 w-full h-10">
                    Searche by dueDate
                    </Button>
                    </Box>
                    
                    
                    <TaskList route='search-tasks'/>
                </Box>
            </div>
            <EditDialog />
            <DeleteDialog/>
            <SnackbarMessage/>
        </>

    )
};
