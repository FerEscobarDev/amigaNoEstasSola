import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../src/assets/styles/tailwind.css";

createApp(App).use(router).mount('#app');
