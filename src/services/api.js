import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.113.163.96:3333/'
    
});

export default api;
