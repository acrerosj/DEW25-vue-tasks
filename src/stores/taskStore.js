import  { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '@/services/taskService';

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([]);
    //const token = ref(null);

    async function fetchTasks() {
        const { data } = await api.getTasks();
        tasks.value = data.data;
    }

    async function login(credentials) {
        try {
            const {data} = await api.login(credentials);
            //token.value =data.token;
            localStorage.token = data.token;
            return true;
        } catch (error) {
            console.error('Login failed:', error);
        } 
        return false;
        
    }

    return { tasks, fetchTasks, login };
});