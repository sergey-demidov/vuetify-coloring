<template>
  <v-card color="panel">
    <v-card-title>
      Disable Picker
    </v-card-title>
    <v-card-text>
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
    :colors="colors"
    :presets="presets"
    disable-picker
/></pre
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <vc-docs />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" to="/tools">
        Continue
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
