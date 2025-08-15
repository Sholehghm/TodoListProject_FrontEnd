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