import React,{createContext, useContext,useState} from "react";
import { getUserTasks } from "../utils/taskAPI";
import dayjs from 'dayjs'
import { UseSnackbar } from "./SnackbarContext";
const TaskContext = createContext();

export const UseTask = () => useContext(TaskContext);


export function TaskProvider({children}){
const today = dayjs().format('YYYY/MM/DD')
const[tasks,setTasks]=useState([]);
const[currentTask,setCurrentTask]=useState('');
const[searchTitle,setSearchTitle] = useState('');
const[searchDate,setSearchDate] = useState(null);
const[loading,setLoading]=useState(false);
const{setSnackbarOpen,setSnackbarMessage} = UseSnackbar();
const{Provider} = TaskContext;

const getTasks = async(title,dueDate)=>{
    try {
        setLoading(true);
        const userTasks = await getUserTasks(title,dueDate);
        setTasks(userTasks);
    } catch (err) {
        setSnackbarMessage(err.response.data.error);
        setSnackbarOpen(true);
    }finally{
        setLoading(false);
    }
}



return(
    <Provider value = {{tasks,today,setTasks,searchTitle,searchDate,setSearchTitle,setSearchDate,getTasks,currentTask,setCurrentTask,loading,setLoading}}>
        {children}
    </Provider>
);
};