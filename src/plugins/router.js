import Vue from "vue";
import VueRouter from "vue-router";
import Basic from "../views/Basic";
import Presets from "../views/Presets";
import DisablePicker from "../views/DisablePicker";
import Tools from "../views/Tools";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", name: "root", component: Basic },
    { path: "/presets", name: "presets", component: Presets },
    {
      path: "/disable-picker",
      name: "disable-picker",
      component: DisablePicker
    },
    { path: "/tools", name: "tools", component: Tools }
  ]
});
