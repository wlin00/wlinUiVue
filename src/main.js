import Vue from "vue";
import Demo from "./Demo.vue";
import 'prismjs';
import 'prismjs/themes/prism.css'
import VueCompositionApi from '@vue/composition-api'
Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app").use(VueCompositionApi);
