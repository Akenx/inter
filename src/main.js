import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex/index'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';



Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(MuseUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
