import Vue from "vue";
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CountryFlag from 'vue-country-flag'
import "velocity-animate/velocity.ui.min.js";

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('country-flag', CountryFlag)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
