import Vue from 'vue';

import App from './app/App.vue';
import router from './app/router';
import VRuntimeTemplate from 'v-runtime-template';

Vue.config.productionTip = false;
Vue.component('VRuntimeTemplate', VRuntimeTemplate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
