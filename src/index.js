import Vue from 'vue'

import VueRouter from 'vue-router'
import App from '@/App.vue'

import '@/assets/css/index.scss'

// 全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生
import '@/components/index.js'

// 引入自定义指令
import '@/directive/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)

import router from '@/router/index.js'

import '@/assets/iconfont/iconfont.js'

import '@/mock/index.js'

import store from '@/store/index.js'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')