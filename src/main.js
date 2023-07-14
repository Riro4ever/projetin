import {  createApp } from 'vue'
import store from './vuex'
import router from './router'

//Main app and style
import App from './App.vue'
import './style.css'

//Font awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCircle, faXmark);

//Starting the Application
const app = createApp(App);
app.use(store);
app.use(router);
app.component('fa', FontAwesomeIcon)
app.mount('#app');