import axios from 'axios';

// Gunakan variabel dari environment
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // fallback opsional
});

// Interceptor untuk menambahkan Authorization jika ada token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
