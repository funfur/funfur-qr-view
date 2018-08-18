import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './style/style.scss'

import {globalVar} from './globalVar'


Vue.prototype.$http = axios


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
