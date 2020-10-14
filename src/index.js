import VColoring from "./components/VColoring";
import VColoringTools from "./components/VColoringTools";
import VDialogPosition from "./components/VDialogPosition";

export default {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("v-coloring", VColoring);
    Vue.component("v-coloring-tools", VColoringTools);
    Vue.component("v-dialog-position", VDialogPosition);
  }
};
