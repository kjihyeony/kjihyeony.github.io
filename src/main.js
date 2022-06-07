import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App)
//글로벌한 변수보관함
app.config.globalProperties.emitter = emitter;

import store from './store.js'

app.use(router).use(store).mount('#app')