import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

/**
 * A instância do roteador é usada para criar a instância do aplicativo Vue.
 */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
