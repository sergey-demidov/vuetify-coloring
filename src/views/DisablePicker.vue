<template>
  <v-card class="mt-4" color="panel">
    <v-card-title>
      Disable Picker
    </v-card-title>
    <v-card-text xs12 sm8 md6>
      <p>
        In some cases it is necessary to forbid users to set the color, but at
        the same time allow them to select a preset. Try it yourself.
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
    disable-picker
/></pre
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
      <v-btn color="primary" to="/tools">
        Continue
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
