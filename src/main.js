import './assets/css/reset.css';
import './assets/css/style.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/home.css';
import './assets/css/modal.css';
import './assets/css/cart.css';
import './assets/css/checkout.css';
import './assets/css/map.css';
import './assets/css/tracking.css'
import './assets/css/adaptive.css';
import './assets/css/transition.css';

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')
