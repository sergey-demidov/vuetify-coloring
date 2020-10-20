<template>
  <v-card color="panel">
    <v-card-title>
      Welcome to the Vuetify Coloring package demo
    </v-card-title>
    <v-card-text>
      <p>
        <ins class="px-1">vuetify-coloring</ins> package gives users the ability
        to change the color of interface elements. This page demonstrates the
        basic functionality. Elements on this page have custom colors. Click the
        icon in the upper right corner and try changing the colors of this page
        in the Coloring dialog box. Below lists the configurations of this
        example.
      </p>

      <v-expansion-panels>
        <v-expansion-panel class="panel">
          <v-expansion-panel-header color="header">
            template
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <pre class="mt-4 pl-4 panel">
&lt;VColoring :colors="['header', 'panel', 'background', 'primary']" /></pre
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="panel">
          <v-expansion-panel-header color="header">
            script
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <pre class="mt-4 pl-4 panel">
import VColoring from "vuetify-coloring";

export default {
  components: {
    VColoring
  }
};</pre
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="panel">
          <v-expansion-panel-header color="header">
            vuetify
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <pre class="mt-4 pl-4 panel">
new Vuetify({
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
});</pre
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <vc-docs />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" to="/presets">
        Continue
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
