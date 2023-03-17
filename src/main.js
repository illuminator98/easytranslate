import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(store).use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'


export async function apiFetch(url, options = {}) {
	options.headers = {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${localStorage.getItem("token")}`,
	};
	const response = await fetch(url, options);
	if (response.status === 401) {
		router.push({ name: "login" });
	}
	return response;
}