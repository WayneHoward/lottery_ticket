import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipBoard from 'vue-clipboard2' // 一键复制
// import { pinyin } from 'pinyin-pro';

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(VueClipBoard)

// Vue.use(pinyin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
