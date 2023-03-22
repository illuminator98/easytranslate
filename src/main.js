import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'

createApp(App).use(store).use(router).use(moment).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'


