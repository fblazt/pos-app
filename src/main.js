import Vue from 'vue';
import TModal from 'vue-tailwind/src/components/TModal.vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';

Vue.use(TModal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
