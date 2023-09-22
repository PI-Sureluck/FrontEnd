
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css'; // Here
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios, * as others from 'axios';

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
