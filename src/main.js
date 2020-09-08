import Vue from 'vue'
import App from './App.vue'
import router from './router'
import hljs from 'highlight.js'

import 'highlight.js/styles/googlecode.css'
import 'github-markdown-css/github-markdown.css'

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
