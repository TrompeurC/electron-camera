
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia }  from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'ant-design-vue/dist/reset.css';
import './assets/main.css'

const store = createPinia()
store.use(piniaPluginPersistedstate)

createApp(App).use(store).mount('#app')
