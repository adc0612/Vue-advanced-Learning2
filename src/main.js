import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // routes/index.js 에서 router로 import해와 등록한다.
  router,
}).$mount('#app');