import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import axios from 'axios';
import ElementUI from 'element-ui';
import Routers from './routers'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routers,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
