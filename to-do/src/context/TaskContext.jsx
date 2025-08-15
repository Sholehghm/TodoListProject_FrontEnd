import React,{createContext, useContext,useEffect,useState,useRef} from "react";
import { getUserTasks } from "../utils/taskAPI";

const TaskContext = createContext();

export const UseTask = () => useContext(TaskContext);


export function TaskProvider({children}){
const[tasks,setTasks]=useState([]);
const[currentTask,setCurrentTask]=useState('');
const{Provider} = TaskContext;

const getTasks = async()=>{
    try {
        const userTasks = await getUserTasks();
        console.log(userTasks);
        setTasks(userTasks);
    } catch (error) {
        console.log(error);
    }
}

const didFetch = useRef(false);

useEffect(()=>{
    if (!didFetch.current) {
        getTasks();
        didFetch.current = true;
      }
},[]);

return(
    <Provider value = {{tasks,setTasks,currentTask,setCurrentTask}}>
        {children}
    </Provider>
);
};