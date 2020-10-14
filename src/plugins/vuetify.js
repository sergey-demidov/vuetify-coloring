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
        primary: "#001122",
        header: "#223344",
        panel: "#445566",
        background: "#667788"
      },
      light: {
        primary: "#001122",
        header: "#223344",
        panel: "#445566",
        background: "#667788"
      }
    }
  }
});
