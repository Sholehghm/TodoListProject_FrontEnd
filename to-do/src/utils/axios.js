import axios from 'axios';

const API = axios.create({
    baseURL:'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('authToken');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=> Promise.reject(error)
);

API.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('authToken');
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default API;