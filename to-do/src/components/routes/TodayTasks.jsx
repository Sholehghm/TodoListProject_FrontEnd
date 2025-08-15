import React, { useEffect } from "react";
import ResponsiveAppBar from "../navbar/NavBar";
import TaskList from "../list/TaskList";
import EditDialog from "../form/EditDialog";
import { SearchTaskProvider, UseSearchTask } from "../../context/SearchTaskContext";
import dayjs from 'dayjs';

export default function TodayTasks() {
    const{searchedDate,setSearchedDate}=UseSearchTask();
    useEffect(() => {
        setSearchedDate(dayjs());
      }, []);
   
    return (
        <>
            <div className='sm:flex sm:flex-row '>
                <ResponsiveAppBar />
                <SearchTaskProvider>
                    <TaskList date={searchedDate ? searchedDate.format('YYYY/MM/DD'):''} />
                </SearchTaskProvider>
            </div>
            <EditDialog />
        </>

    )
};
