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

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes',
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css',
  ],
};

Vue.use(VueHtmlToPaper, options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
