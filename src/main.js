import './assets/css/app.css'
import 'animate.css';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
