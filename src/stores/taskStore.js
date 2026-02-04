import  { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '@/services/taskService';

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([]);

    async function fetchTasks() {
        const { data } = await api.getTasks();
        tasks.value = data.data;
    }

    return { tasks, fetchTasks };
});