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
        header: "#334455",
        panel: "#667788",
        background: "#99aabb"
      },
      light: {
        primary: "#001122",
        header: "#334455",
        panel: "#667788",
        background: "#99aabb"
      }
    }
  }
});
