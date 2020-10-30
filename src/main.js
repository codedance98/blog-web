import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/iconfont/iconfont.css"

import 'github-markdown-css/github-markdown.css'

// import Highlight from '@/utils/highlight'
// Vue.use(Highlight);
// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/default.css';
import Highlight from 'vue-markdown-highlight'
console.log(Highlight)
Vue.use(Highlight)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
