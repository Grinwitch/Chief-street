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
import './assets/css/textpage.css';
import './assets/css/error.css';
import './assets/css/profile-auth.css';
import './assets/css/adaptive.css';
import './assets/css/transition.css';

import { createApp } from 'vue'
import YmapPlugin from 'vue-yandex-maps'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'
import { settings } from './util/utils.js'

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(store)
app.use(YmapPlugin, settings)
app.use(VueAxios, axios)

app.mount('#app')
