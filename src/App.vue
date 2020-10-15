<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      fixed
      app
      color="panel"
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :href="item.to" exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed color="header">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-coloring :presets="presets" :tools="true" />
    </v-app-bar>
    <v-main>
      <v-container style="max-width: 876px">
        <v-layout column justify-center align-center wrap align-content-center>
          <v-card class="panel">
            <v-card-title class="headline">
              Welcome to the Vuetify + Nuxt.js template
            </v-card-title>
            <v-card-text xs12 sm8 md6>
              <v-expansion-panels>
                <v-expansion-panel v-for="i of 3" :key="'ep_' + i">
                  <v-expansion-panel-header color="header"
                    >Item</v-expansion-panel-header
                  >
                  <v-expansion-panel-content color="panel" class="py-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

              <v-simple-table fixed-header style="">
                <thead>
                  <tr>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-left">
                      Calories
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
              <p>
                Vuetify is a progressive Material Design component framework for
                Vue.js. It was designed to empower developers to create amazing
                applications.
              </p>
              <p>
                For more information on Vuetify, check out the
                <a
                  href="https://vuetifyjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  documentation </a
                >.
              </p>
              <p>
                If you have questions, please join the official
                <a
                  href="https://chat.vuetifyjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="chat"
                >
                  discord </a
                >.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" href="/inspire">
                Continue
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-container>
    </v-main>
    <v-footer absolute app color="header">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import VColoring from "./components/VColoring";
import Presets from "./lib/presets.json";

export default {
  name: "App",
  components: {
    VColoring
  },

  data: () => ({
    presets: Presets,
    clipped: true,
    drawer: true,
    fixed: false,
    items: [
      {
        icon: "mdi-apps",
        title: "Welcome",
        to: "/"
      },
      {
        icon: "mdi-chart-bubble",
        title: "Inspire",
        to: "/inspire"
      }
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159
      },
      {
        name: "Ice cream sandwich",
        calories: 237
      },
      {
        name: "Eclair",
        calories: 262
      }
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: "Vuetify.js"
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
