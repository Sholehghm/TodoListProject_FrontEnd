import API from "./axios";

export const getUserTasks = async(title,dueDate) => {
    try {
        if(title && dueDate){
            const userTasks = await API.get(`/tasks?title=${title}&dueDate=${dueDate}`);
            return userTasks;
        }
        if(title && !dueDate){
            const userTasks = await API.get(`/tasks?title=${title}`);
            return userTasks;
        }
        if(!title && dueDate){
            const userTasks = await API.get(`/tasks?dueDate=${dueDate}`);
            return userTasks;
        }
        const userTasks = await API.get('/tasks');
        return userTasks;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const addNewTask = async(NewTask) => {
    try {
        const addTask = await API.post('/tasks',{title: NewTask.title, description: NewTask.description, dueDate: NewTask.dueDate, status: NewTask.status});
        return addTask;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const editExistedTask = async(task) => {
    try {
        const editedTask = await API.put(`/tasks/${task.id}`,{title: task.title, description: task.description, dueDate: task.dueDate, status: task.status});
        return editedTask;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteExistedTask = async(taskId) => {
    console.log('asdfdf');
    console.log(taskId);
    try {
        const deleteTask = await API.delete(`/tasks/${taskId}`);
        return deleteTask;
    } catch (error) {
        return Promise.reject(error);
    }
}