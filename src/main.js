import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/base.css'
import 'tw-elements';

import './style.scss'

createApp(App).use(store).use(router).mount('#app')
