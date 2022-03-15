import './lib/Sip.scss'
import './index.css'
import {createApp} from 'vue'
import App from './App.vue'
import {router} from './router.ts'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown', Markdown)
