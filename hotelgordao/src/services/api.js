import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7013/'
});

export default api;