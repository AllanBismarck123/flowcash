import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'
import 'material-icons';
import 'material-icons/css/material-icons.css';
import 'material-icons/css/material-icons.min.css'
import router from './router';
import store from './store';


createApp(App)
.use(store)
.use(router)
.mount('#app')
