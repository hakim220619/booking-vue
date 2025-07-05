// src/api/axiosClient.js
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false // Atur ke true jika pakai cookies
});

// Interceptor: Tambahkan Authorization jika diperlukan
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // atau dari Redux, Context, dsb
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor (opsional)
axiosClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error('Axios Error:', error);
        return Promise.reject(error);
    }
);

export default axiosClient;
