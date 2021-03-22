import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";
// import "~vuetify/src/styles/main.sass";
import dotenv from "dotenv";
import AOS from "aos";
import "aos/dist/aos.css";
import Vuelidate from "vuelidate";
import moment from "moment";
Vue.prototype.$moment = moment;

dotenv.config();

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
