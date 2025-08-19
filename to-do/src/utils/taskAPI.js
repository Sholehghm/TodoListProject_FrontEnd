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
        return Promise.reject(error);
    }
}

export const editExistedTask = async(task) => {
    try {
        const editedTask = await API.put(`/tasks/${task.id}`,{title: task.title, description: task.description, dueDate: task.dueDate, status: task.status});
        
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteExistedTask = async(taskId) => {
    console.log('asdfdf');
    console.log(taskId);
    try {
        const deleteTask = await API.delete(`/tasks/${taskId}`)
    } catch (error) {
        return Promise.reject(error);
    }
}