<template>
  <div>
    <v-dialog
      v-model="coloringDialog"
      persistent
      overlay-color="#0000"
      :width="$vuetify.breakpoint.xs ? 360 : 530"
      content-class="vc-panel"
    >
      <template v-slot:activator="{ on, attrs }">
        <!--        <v-flex v-bind="attrs" v-on="on">-->
        <v-icon
          v-bind="attrs"
          v-on="on"
          size="icon"
          class="vc-rainbow ma-3"
          style="border-radius: 50%; padding: 2px; color: #000a; z-index: 100"
        >
          mdi-brush
        </v-icon>
        <!--        </v-flex>-->
      </template>
      <div id="VuetifyColoring" class="vc-panel">
        <v-card class="vc-panel">
          <v-toolbar class="vc-header">
            <v-toolbar-title>
              Coloring
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title>
              <v-dialog-position></v-dialog-position>
            </v-toolbar-title>
          </v-toolbar>
          <v-card class="vc-panel py-0 py-sm-2">
            <v-card-text class="pb-0 pt-2 vc-panel pl-0 pl-sm-2">
              <v-tabs vertical style="display: flex;" class="vc-panel">
                <v-tab
                  active-class="vc-panel-active"
                  exact-active-class="vc-panel-active"
                  v-for="name in colors"
                  :key="'c_tab_' + name"
                  v-model="tab"
                  style="text-align: left; justify-content: flex-start;"
                  :style="{
                    'text-decoration': isUndef(name) ? 'line-through' : 'none'
                  }"
                  @click="currentColor = current[name]"
                  class="my-0 pr-1 pr-sm-2 pl-1 pl-sm-2 vc-panel"
                >
                  <v-icon
                    class="mr-2 ml-1 d-none d-sm-flex"
                    color="#00000099"
                    :style="{ 'background-color': current[name] }"
                    dense
                    style="border-radius: 50%; padding: 4px;"
                  >
                    mdi-brush
                  </v-icon>
                  {{ name }}
                </v-tab>
                <v-tab-item
                  v-for="name of colors"
                  :key="'c_tab_item_' + name"
                  v-model="tab"
                  style="text-align: center;"
                  class="vc-panel"
                  transition="top"
                  reverse-transition="bottom"
                >
                  <v-container
                    fill-height
                    fluid
                    v-if="isUndef(name)"
                    class="py-0"
                  >
                    <v-row
                      align="center"
                      justify="center"
                      :style="{ height: canvasHeight + 62 + 'px' }"
                    >
                      <v-col class="vc-panel">
                        Color <strong> {{ themeName + "." + name }} </strong> is
                        not defined <br />
                        You must specify it in vuetify <br />
                        <a
                          href="https://vuetifyjs.com/en/features/theme/#customizing"
                          target="_blank"
                        >
                          theme configuration
                        </a>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-color-picker
                    v-else
                    class="vc-panel"
                    :value="current[name]"
                    :disabled="isUndef(name) || disablePicker"
                    hide-mode-switch
                    hide-inputs
                    :width="$vuetify.breakpoint.xs ? 240 : 350"
                    dot-size="7"
                    :canvas-height="canvasHeight"
                    @input="setColor(name, $event)"
                  />
                </v-tab-item>
                <v-card-actions class="pl-0 ml-0">
                  <v-switch
                    v-model="dark"
                    dense
                    :disabled="disablePicker"
                    hide-details
                    class="mt-0 ml-1 ml-sm-2 vc-panel"
                    color="vc-panel"
                  />
                  <v-flex
                    style="color: #777777; font-weight: 500; z-index: 10;"
                    v-text="themeName.toUpperCase()"
                    class="ml-n1 mt-1"
                  />
                  <v-spacer />
                </v-card-actions>
              </v-tabs>
            </v-card-text>

            <v-card-actions class="my-0 pt-1 pb-2">
              <v-spacer />
              <v-btn
                v-for="name in buttons"
                :key="'btn_' + name"
                small
                rounded
                :color="matchScheme(name) ? '#cccccc' : '#eeeeee'"
                style="color: #777777;"
                :style="{
                  'text-decoration': !matchPresetLength(name)
                    ? 'line-through'
                    : 'none'
                }"
                @click="setColors(name)"
              >
                {{ name }}
              </v-btn>
              <v-spacer />
            </v-card-actions>
            <v-card-actions>
              <v-spacer />
              <v-btn @click="cancel()" class="vc-panel" text>
                {{ "Return" }}
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-card>
      </div>
    </v-dialog>
    <v-coloring-tool v-if="tool" :colors="colors" />
  </div>
</template>

<script type="module">
import VDialogPosition from "./VDialogPosition";
import VColoringTool from "./VColoringTool";

export default {
  name: "VColoring",
  components: { VDialogPosition, VColoringTool },
  props: {
    tool: {
      type: Boolean,
      default: false
    },
    colors: {
      type: Array,
      default: function() {
        return [];
      }
    },
    presets: {
      type: Object,
      default: function() {
        return {};
      }
    },
    disablePicker: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      coloringDialog: false,
      tab: null,
      currentColor: "",
      current: {},
      dark: true,
      dialogPosition: ""
    };
  },
  computed: {
    disablePickerStyle() {
      let cl = ".v-color-picker__controls ";
      if (this.disablePicker) {
        return cl + "{ display: none; }";
      } else {
        return "";
      }
    },
    canvasHeight() {
      let height = this.colors.length * 50;
      return height < 150 ? 150 : height;
    },
    themeName() {
      return this.dark ? "dark" : "light";
    },
    buttons() {
      const bts = [];
      const col = this.presets;
      for (const b in col) {
        if (Object.prototype.hasOwnProperty.call(col, b) && b !== "current") {
          bts.push(b);
        }
      }
      return bts;
    }
  },
  beforeMount() {
    let colors = {};
    try {
      if (
        typeof localStorage.dark !== "undefined" &&
        typeof JSON.parse(localStorage.dark) === "boolean"
      ) {
        this.dark = JSON.parse(localStorage.dark);
        this.$vuetify.theme.dark = this.dark;
      } else {
        this.dark = this.$vuetify.theme.dark;
      }
      let theme = this.$vuetify.theme.themes[this.themeName];
      let storeColors = {};
      if (typeof localStorage.colors !== "undefined") {
        storeColors = JSON.parse(localStorage.colors);
      }
      for (const name of this.colors) {
        // Set color from vuetify constructor
        if (name in theme && this.isValidColor(theme[name])) {
          colors[name] = theme[name];
          // Set color from local storage
          if (name in storeColors && this.isValidColor(storeColors[name])) {
            colors[name] = storeColors[name];
          }
        } else {
          // eslint-disable-next-line no-console
          console.warn(
            `color ${name} not properly defined in vuetify constructor`
          );
          colors[name] = "#FF00FF";
        }
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
    this.current = colors;
  },
  mounted() {
    this.style = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(this.style);
    this.setStyle();
  },
  watch: {
    coloringDialog() {
      this.setStyle();
    },
    dark(c) {
      this.dark = c;
      this.$vuetify.theme.dark = c;
      this.sync();
    }
  },
  methods: {
    isValidColor(c) {
      return !!(typeof c === "string" && c.match(/^#[abcdef\d]{6}$/i));
    },
    cssVars() {
      let vars = [];
      for (let col in this.current) {
        vars.push(`--v-${col}-base: ${this.current[col]} !important;`);
      }
      // console.dir(vars);
      return ":root { " + vars.join("") + " }" + this.disablePickerStyle;
    },
    matchPresetLength(name) {
      if (
        this.presets[name].colors.length !== Object.keys(this.current).length
      ) {
        // eslint-disable-next-line no-console
        console.warn(`preset ${name} colors length mismatch ( ${this.presets[name].colors.length} !== ${Object.keys(this.current).length} )`);
        return false;
      }
      return true;
    },
    setColors(name) {
      if (!this.matchPresetLength(name)) return;
      let preset = this.presets[name];
      this.dark = preset.dark;
      if (Array.isArray(preset.colors)) {
        let colors = preset.colors.slice();
        for (const i in this.colors) {
          if (
            Object.prototype.hasOwnProperty.call(
              this.current,
              this.colors[i]
            ) &&
            this.isValidColor(colors[i])
          ) {
            this.current[this.colors[i]] = colors[i];
          } else {
            // eslint-disable-next-line no-console
            console.warn(
              `cant set color ${this.colors[i]} to value '${colors[i]}'`
            );
          }
        }
      }
      this.setStyle();
      this.sync();
    },
    matchScheme(name) {
      if (this.presets[name].dark !== this.dark) {
        return false;
      }
      if (!this.matchPresetLength(name)) return false;
      for (const i in this.colors) {
        if (
          Object.prototype.hasOwnProperty.call(this.current, this.colors[i])
        ) {
          if (
            this.current[this.colors[i]].toString().toUpperCase() !==
            this.presets[name].colors[i].toString().toUpperCase()
          ) {
            return false;
          }
        }
      }
      return true;
    },
    isUndef(name) {
      let theme = this.$vuetify.theme.themes[this.themeName];
      return !Object.prototype.hasOwnProperty.call(theme, name);
    },
    sync() {
      localStorage.colors = JSON.stringify(this.current);
      localStorage.dark = JSON.stringify(this.dark);
    },
    setStyle() {
      this.style.innerHTML = this.cssVars();
      // console.dir(this.style);
    },
    setColor(name, c) {
      this.currentColor = c;
      this.current[name] = c;
      this.setStyle();
      this.sync();
    },
    cancel() {
      this.coloringDialog = false;
    }
  }
};
</script>

<style>
/*noinspection CssUnresolvedCustomProperty*/
#VuetifyColoring .v-sheet {
  border-radius: 0 !important;
}
#VuetifyColoring .v-item-group.v-window.v-tabs-items,
#VuetifyColoring div.v-input--switch__thumb,
#VuetifyColoring .v-tabs > .v-tabs-bar,
.vc-panel {
  background-color: #eeeeee !important;
  color: #777777 !important;
  border-color: #eeeeee !important;
}

#VuetifyColoring .v-tabs-slider-wrapper {
  background-color: #0000;
  color: #0000;
}

#VuetifyColoring .v-input--selection-controls__ripple {
  display: none;
}

#VuetifyColoring .vc-panel-active {
  background: linear-gradient(to right, #aaaaaa, #eeeeee);
  color: #555555 !important;
}

#VuetifyColoring div.v-input--switch__track,
.vc-header {
  background-color: #cccccc !important;
  color: #777777 !important;
}

.vc-rainbow {
  background: linear-gradient(to right, #ffaa00, #ffff00, #20ff20);
  box-shadow: #0007 1px 1px 2px;
  cursor: pointer;
}

.vc-rainbow:hover {
  box-shadow: #000 1px 1px 4px;
  background: linear-gradient(
    to right,
    #ff2222,
    #ffaa00,
    #ffff00,
    #22ff22,
    #2277ff
  );
}
</style>
