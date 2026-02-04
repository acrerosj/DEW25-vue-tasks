<template>
    <div>
        <h1>Tareas</h1>
        <ul>
            <li v-for="task in taskStore.tasks" :key="task.id">
                {{ task.title }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore';
import { onMounted } from 'vue';

const taskStore = useTaskStore();

onMounted(() => {
    taskStore.fetchTasks();
});



</script>

