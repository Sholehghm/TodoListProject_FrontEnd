import API from "./axios";

export const getUserTasks = async() => {
    try {
        const userTasks = await API.get('/tasks');
        console.log(userTasks);
        return userTasks;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const addNewTask = async(NewTask) => {
    try {
        const addTask = await API.post('/tasks',{title: NewTask.title, description: NewTask.description, dueDate: NewTask.dueDate, status: NewTask.status});
        
    } catch (error) {
        
    }
}