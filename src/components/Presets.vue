<template>
  <v-card class="mt-4" color="panel">
    <v-card-title>
      Presets
    </v-card-title>
    <v-card-text xs12 sm8 md6>
      <p>
        Next feature of this app is the ability to define presets. Users can set
        the color of each element or choose a preset. Open the dialog again and
        select a preset. Configurations are listed below.
      </p>

      <v-expansion-panels>
        <v-expansion-panel class="panel">
          <v-expansion-panel-header color="header">
            template
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <pre class="mt-4 pl-4 panel">
&lt;VColoring
    :colors="['header', 'panel', 'background', 'primary']"
    :presets="presets"
/>
</pre
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="panel">
          <v-expansion-panel-header color="header">
            script
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <pre class="mt-4 pl-4 panel">
import Presets from "./presets.json";

export default {
  components: {
    VColoring
  },
  data: () => ({
    colors: ['header', 'panel', 'background', 'primary'],
    presets: Presets
  })
};</pre
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="panel">
          <v-expansion-panel-header color="header">
            presets.json
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <pre class="mt-4 pl-4 panel">
{
  "sky": {
    "dark": true,
    "colors": [
      "#1867C0",
      "#1697F6",
      "#79A9E2",
      "#113469"
    ]
  },
  "aqua": {
    "dark": false,
    "colors": [
      "#78b8b4",
      "#9fCAC6",
      "#bbd7d5",
      "#00887d"
    ]
  },
  "blood": {
    "dark": true,
    "colors": [
      "#5F0404",
      "#990B0B",
      "#dea2a2",
      "#ff0000"
    ]
  },
  "forest": {
    "dark": true,
    "colors": [
      "#2E7C42",
      "#329655",
      "#A8A285",
      "#725C09"
    ]
  },
  "autumn": {
    "dark": false,
    "colors": [
      "#F0C466",
      "#ECE276",
      "#B8D8AF",
      "#729B61"
    ]
  }
}</pre
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <p class="pt-6">
        For more information on Vuetify, check out the
        <a
          href="https://vuetifyjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          vuetify documentation </a
        >.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" to="/disable-picker">
        Continue
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
