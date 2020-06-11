import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入组件库
import Swiper from '../index.js'

// 注册组件库
Vue.use(Swiper)


new Vue({
  render: h => h(App),
}).$mount('#app')
