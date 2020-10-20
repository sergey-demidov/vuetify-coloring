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
      <!--      <template v-slot:append>-->
      <!--        <v-btn color="panel" block @click.stop="miniVariant = !miniVariant">-->
      <!--          <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>-->
      <!--        </v-btn>-->
      <!--      </template>-->
    </v-navigation-drawer>
    <v-app-bar clipped-left :fixed="fixed" app color="header">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
        <VColoring
          :colors="['header', 'panel', 'background', 'primary']"
          tools
        />
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-spacer />
          <v-col cols="12" xl="7" lg="8" md="10" sm="12">
            <v-layout
              column
              justify-center
              align-center
              wrap
              align-content-center
              class="xl4 lg4 md6 sm8 xs10"
            >
              <router-view />
            </v-layout>
          </v-col>
          <v-spacer />
        </v-row>
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
    miniVariant: false,
    title: ""
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
