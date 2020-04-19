import Vue from 'vue';
import TModal from 'vue-tailwind/src/components/TModal.vue';
import Vuelidate from 'vuelidate';
import VueHtmlToPaper from 'vue-html-to-paper';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';

Vue.use(TModal);
Vue.use(Vuelidate);
Vue.use(VueHtmlToPaper);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
