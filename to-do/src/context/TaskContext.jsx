import React,{createContext, useContext,useState} from "react";
import data from '../mockdata/MockData.json'


const TaskContext = createContext();

export const UseTask = () => useContext(TaskContext);

export function TaskProvider({children}){
const[tasks,setTasks]=useState(data);
const[currentTask,setCurrentTask]=useState('');
const{Provider} = TaskContext;
return(
    <Provider value = {{tasks,setTasks,currentTask,setCurrentTask}}>
        {children}
    </Provider>
);
};