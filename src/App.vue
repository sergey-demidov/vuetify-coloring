<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      :fixed="fixed"
      app
      color="panel"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left :fixed="fixed" app color="header">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <template v-if="$route.name === 'root'">
        Click here
        <v-icon class="ml-3 header animate-arrow">
          mdi-arrow-right-bold-outline
        </v-icon>
        <VColoring :colors="['header', 'panel', 'background', 'primary']" />
      </template>
      <template v-if="$route.name === 'presets'">
        Click here
        <v-icon class="ml-3 header animate-arrow">
          mdi-arrow-right-bold-outline
        </v-icon>
        <VColoring
          :colors="['header', 'panel', 'background', 'primary']"
          :presets="presets"
        />
      </template>
      <template v-if="$route.name === 'disable-picker'">
        Click here
        <v-icon class="ml-3 header animate-arrow">
          mdi-arrow-right-bold-outline
        </v-icon>
        <VColoring
          :colors="['header', 'panel', 'background', 'primary']"
          :presets="presets"
          disable-picker
        />
      </template>
      <template v-if="$route.name === 'tools'">
        <VColoring :presets="presets" :tools="true" />
      </template>
    </v-app-bar>
    <v-main>
      <v-container style="width: 765px">
        <v-layout column justify-center align-center wrap align-content-center>
          <router-view />
        </v-layout>
      </v-container>
    </v-main>
    <v-footer absolute app color="header">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import VColoring from "./lib/VColoring";
import Presets from "./lib/presets.json";

export default {
  name: "App",
  components: {
    VColoring
  },
  mounted() {
    // console.dir(this.$route);
  },
  data: () => ({
    presets: Presets,
    clipped: true,
    drawer: true,
    fixed: true,
    items: [
      {
        icon: "mdi-rocket-launch",
        title: "Basic",
        to: { name: "root" }
      },
      {
        icon: "mdi-chart-bubble",
        title: "Presets",
        to: { name: "presets" }
      },
      {
        icon: "mdi-pen-lock",
        title: "Disable Picker",
        to: { name: "disable-picker" }
      },
      {
        icon: "mdi-hammer-screwdriver",
        title: "Tools",
        to: { name: "tools" }
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

.animate-arrow {
  /*-webkit-animation: slide 0.5s linear infinite;*/
  animation: slide 0.5s ease-in-out infinite;
  animation-direction: alternate;
}
@keyframes slide {
  from {
    padding-left: 0;
    padding-right: 10px;
  }
  to {
    padding-left: 10px;
    padding-right: 0;
  }
}
</style>
