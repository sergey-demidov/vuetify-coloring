import Vue from "vue";
import App from "./App.vue";
import Docs from "./components/Docs";
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";

Vue.component("vc-docs", Docs);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
