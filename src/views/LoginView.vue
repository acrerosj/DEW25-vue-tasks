<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="email">Email:</label>
                <input type="text" id="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const taskStore = useTaskStore();

const handleLogin = async () => {
    // Aquí puedes agregar la lógica de autenticación, como enviar los datos a un servidor

    try {
        const credentials = {
            email: email.value,
            password: password.value,
        };
        const auth = await taskStore.login(credentials);
        if (auth) {
            alert('Login successful!');
        } else {
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Login failed:', error);
    }
};

</script>