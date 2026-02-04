import axios from 'axios';
//import { useTaskStore } from '@/stores/taskStore';

const api = axios.create({
  baseURL: 'http://localhost/api/',
  timeout: 10000,
  headers: { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});


api.interceptors.request.use(
  (config) => {
//    const taskStore = useTaskStore();
//    const token = taskStore.token;
    const token = localStorage.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {

  getTasks() {
    return api.get('tasks');
  },

  login(credentials) {
    return api.post('login', credentials);
  },

  logout() {
    return api.post('logout');
  }
}
