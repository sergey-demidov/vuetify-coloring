<template>
  <v-card color="panel">
    <v-card-title>
      Coloring tool for developer
    </v-card-title>
    <v-card-text>
      <p>
        In the development process, sometimes a situation arises when it is
        impossible to set the color of an element directly. In this case, it is
        necessary to define the css rule for the element itself, or its class,
        or the element that really colors it. Usually, tools like Chrome
        DevTools are used for this. It is not always fast and convenient, so
        another feature has been added to the application. A Ctrl-click on an
        unpainted element will show how it works. Notice the one second delay
        before the dialog box appears. This is necessary in order for you to
        have time to change or leave the element in the desired state (like
        hovered or focused). Try another elements of this page.
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
    tools
/></pre
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-simple-table class="mt-4">
        <thead class="header">
          <tr>
            <th class="text-left">
              next element is unpainted
            </th>
          </tr>
        </thead>
        <tbody class="clickable">
          <tr
            @mouseover="hovered = true"
            @mouseout="hovered = false"
            @click="clicked = toolOpened && !clicked ? false : true"
          >
            <td class="" ref="uncolored" v-text="label"></td>
          </tr>
        </tbody>
      </v-simple-table>
      <vc-docs />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        href="https://github.com/sergey-demidov/vuetify-coloring"
      >
        finish
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    clicked: false,
    toolOpened: false,
    hovered: false,
    uncolored: "Ctrl-Click me and take the mouse somewhere else"
  }),
  mounted() {
    this.$root.$on("coloringToolOpened", this.setToolState);
  },
  destroyed() {
    this.$root.$off("coloringToolOpened");
  },
  methods: {
    setToolState(e) {
      this.toolOpened = e;
      if (!e) {
        this.clicked = false;
      }
    }
  },
  computed: {
    label() {
      return this.toolOpened && this.clicked
        ? "This element reflects changes in the tool dialog"
        : !this.hovered
        ? "Ctrl-Click me and take the mouse somewhere else"
        : "or Ctrl-Click me and leave mouse over to set :hover state";
    }
  }
};
</script>
