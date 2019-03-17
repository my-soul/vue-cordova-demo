import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

setInterval(() => {
  store.commit('chTimes');
  navigator.notification.beep(1);
}, 3000);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
