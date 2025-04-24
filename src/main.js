import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue';
import Expenses from './components/Expenses.vue';
import SingleCategoryPage from './components/SingleCategoryPage.vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import LoginView from './components/LoginView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LoginView },
        { path: '/home', component: HomePage },
        { path: '/expenses', component: Expenses },
        { path: '/expenses/:category_id', component: SingleCategoryPage },
    ]
});

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);
const app = createApp(App)

app.use(pinia)
app.use(router);
app.mount('#app')


