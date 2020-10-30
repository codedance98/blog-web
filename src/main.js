import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/iconfont/iconfont.css"

import 'github-markdown-css/github-markdown.css'
import Highlight from '@/utils/highlight'
Vue.use(Highlight);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
