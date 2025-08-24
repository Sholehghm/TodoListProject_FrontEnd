import React,{createContext, useContext,useEffect,useState,useRef} from "react";
import { getUserTasks } from "../utils/taskAPI";
import dayjs from 'dayjs'
const TaskContext = createContext();

export const UseTask = () => useContext(TaskContext);


export function TaskProvider({children}){
const today = dayjs().format('YYYY/MM/DD')
const[tasks,setTasks]=useState([]);
const[currentTask,setCurrentTask]=useState('');
const[searchTitle,setSearchTitle] = useState('');
const[searchDate,setSearchDate] = useState(null);
const{Provider} = TaskContext;

const getTasks = async(title,dueDate)=>{
    try {
        const userTasks = await getUserTasks(title,dueDate);
        console.log(userTasks);
        setTasks(userTasks);
    } catch (error) {
        console.log(error);
    }
}



return(
    <Provider value = {{tasks,today,setTasks,searchTitle,searchDate,setSearchTitle,setSearchDate,getTasks,currentTask,setCurrentTask}}>
        {children}
    </Provider>
);
};