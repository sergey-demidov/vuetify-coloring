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
            template 1
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <pre class="mt-4 pl-4 panel">
&lt;VColoring
    :colors="['header', 'panel', 'background', 'primary']"
    tool
/></pre
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="panel">
          <v-expansion-panel-header color="header">
            template 2
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <pre class="mt-4 pl-4 panel">
&lt;VColoring
    :colors="['header', 'panel', 'background', 'primary']"
/>
&lt;VColoringTool
    :colors="['header', 'panel', 'background', 'primary']"
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
          <tr @click="clicked = toolOpened && !clicked ? false : true">
            <td ref="uncolored" v-text="label" />
          </tr>
        </tbody>
      </v-simple-table>
      <vc-docs />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        href="https://github.com/sergey-demidov/vuetify-coloring#readme"
      >
        return
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    clicked: false,
    toolOpened: false
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
        : "Ctrl-Click me";
    }
  }
};
</script>
