import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: true,
    themes: {
      dark: {
        primary: "#012",
        header: "#234",
        panel: "#456",
        background: "#678"
      },
      light: {
        primary: "#012",
        header: "#234",
        panel: "#456",
        background: "#678"
      }
    }
  }
});
