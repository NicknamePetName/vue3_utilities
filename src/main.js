import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//可以这样引入(法一)
// createApp(App).use(ElementPlus)
//法二
// createApp(App).use(router).use(ElementPlus).mount('#app')

const app = createApp(App)
app.use(router)
app.use(ElementPlus, { locale: zhCn, })
app.mount('#app')
 