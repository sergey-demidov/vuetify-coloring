<template>
  <v-app color="background">
    <v-app-bar app color="header" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        color="primary"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-coloring :presets="presets" />
      <v-coloring-tools :presets="presets" />
    </v-app-bar>

    <v-main> </v-main>
  </v-app>
</template>

<script>
import VColoring from "./components/VColoring";
import Presets from "./components/presets.json";
import VColoringTools from "./components/VColoringTools";

export default {
  name: "App",
  components: {
    VColoringTools,
    VColoring
  },

  data: () => ({
    presets: Presets
    //
  })
};
</script>

<style>
/*noinspection CssUnresolvedCustomProperty*/
#app {
  background-color: var(--v-background-base);
}
</style>
