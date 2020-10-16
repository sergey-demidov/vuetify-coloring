import Vue from "vue";
import VueRouter from "vue-router";
import Basic from "../components/Basic";
import Presets from "../components/Presets";
import DisablePicker from "../components/DisablePicker";

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
    { path: "/tools", name: "tools" }
  ]
});
