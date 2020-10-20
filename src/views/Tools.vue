<template>
  <v-card class="mt-4" color="panel">
    <v-card-title>
      Coloring tool for developer
    </v-card-title>
    <v-card-text xs12 sm8 md6>
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
        hovered or focused)
      </p>

      <v-simple-table>
        <thead class="header">
          <tr>
            <th class="text-left">
              next element is uncolored
            </th>
          </tr>
        </thead>
        <tbody class="clickable">
          <tr
            @mouseover="
              $refs.uncolored.innerText =
                'or Ctrl-Click me and leave mouse over to set :hover state'
            "
            @mouseout="$refs.uncolored.innerText = uncolored"
          >
            <td class="" ref="uncolored" v-text="uncolored"></td>
          </tr>
        </tbody>
      </v-simple-table>
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
    uncolored: "Ctrl-Click me and take the mouse somewhere else"
  })
};
</script>
