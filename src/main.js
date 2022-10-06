import { createApp } from 'vue'
import './indexstyle.css'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './components/router/router'
import store from './components/store/Store.js'
import '/node_modules/view-ui-plus/dist/styles/viewuiplus.css'



const app = createApp(App)

app.use(router)
    .use(store)
    .use(ViewUIPlus)
    .mount('#app')
