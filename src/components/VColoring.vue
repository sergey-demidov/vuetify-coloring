<template>
  <div>
    <v-dialog
      v-model="coloringDialog"
      persistent
      hide-overlay
      max-width="550"
      content-class="vc-panel"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-flex v-bind="attrs" v-on="on">
          <v-icon
            size="icon"
            class="vc-rainbow ma-3"
            style="border-radius: 50%; padding: 2px; color: #000a"
          >
            mdi-brush
          </v-icon>
        </v-flex>
      </template>
      <div id="VuetifyColoring">
        <v-card>
          <v-toolbar class="vc-header">
            <v-toolbar-title>
              Coloring
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title>
              <v-dialog-position></v-dialog-position>
            </v-toolbar-title>
          </v-toolbar>
          <v-card class="vc-panel" cla>
            <v-card-text class="pb-0 pt-2 vc-panel">
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
                  class="my-0 py-0 pl-3 vc-panel"
                >
                  <v-icon
                    class="mr-2 ml-0"
                    color="#00000099"
                    :style="{ 'background-color': current[name] }"
                    dense
                    style="border-radius: 50%; padding: 5px;"
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
                    :disabled="isUndef(name)"
                    hide-mode-switch
                    hide-inputs
                    dot-size="7"
                    width="350"
                    :canvas-height="canvasHeight"
                    @input="setColor(name, $event)"
                  />
                </v-tab-item>
                <v-card-actions class="">
                  <v-switch
                    v-model="dark"
                    dense
                    hide-details
                    class="mt-0 vc-panel"
                  />
                  <v-flex
                    style="color: #777777; font-weight: 500;"
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
  </div>
</template>

<script>
// import _ from "lodash";
// import Color from "color";
import VDialogPosition from "./VDialogPosition";

export default {
  name: "VColoring",
  components: { VDialogPosition },
  props: {
    colors: {
      type: Array,
      default: function() {
        return ["header", "panel", "background", "primary"];
      }
    },
    presets: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      // width: 550,
      // error: false,
      // errorMessage: "",
      coloringDialog: false,
      tab: null,
      currentColor: "",
      // currentRule: "",
      current: {},
      dark: false,
      // dark2: false,
      // colorDebugXXX: true,
      // colored: [],
      toolDialog: false,
      // colored_tab: null,
      dialogPosition: ""
      // style: {}
    };
  },
  computed: {
    canvasHeight() {
      let height = this.colors.length * 50;
      return height < 150 ? 150 : height;
    },
    themeName() {
      return this.dark ? "dark" : "light";
    },
    cssVars() {
      let vars = [];
      for (let col in this.colors) {
        vars.push(
          `--v-${this.colors[col]}-base: ${this.current[this.colors[col]]};`
        );
      }
      return ":root { " + vars.join("") + " }";
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
  created() {
    let colors = {};
    let hasOwnProperty = Object.prototype.hasOwnProperty;
    try {
      if (typeof localStorage.dark !== "undefined") {
        this.dark = JSON.parse(localStorage.dark);
        this.$vuetify.theme.dark = this.dark;
      } else {
        this.dark = this.$vuetify.theme.dark;
      }
      let theme = this.$vuetify.theme.themes[this.themeName];
      if (typeof localStorage.colors !== "undefined") {
        colors = JSON.parse(localStorage.colors);
        console.dir(colors);
        for (const name of this.colors) {
          if (
            this.colors.includes(name) &&
            hasOwnProperty.call(colors, name) &&
            colors[name].toString().match(/^#[abcdef\d]{6}$/i)
          ) {
            this.current[name] = colors[name].toString();
            console.log("get " + name + " " + this.current[name]);
          }
        }
      }
      for (const name of this.colors) {
        if (hasOwnProperty.call(theme, name)) {
          if (typeof this.current[name] === "undefined") {
            this.current[name] = theme[name];
          }
          console.log("set " + name + " " + this.current[name]);
        }
        this.current = JSON.parse(JSON.stringify(this.current));
        console.dir(this.current);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e.message);
    }
    this.style = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(this.style);
    this.setStyle();
    console.log("end of created");
  },
  mounted() {
    // console.dir(this.presets)
  },
  watch: {
    dark(c) {
      this.dark = c;
      this.$vuetify.theme.dark = c;
      this.sync();
    }
  },
  methods: {
    setColors(name) {
      let preset = this.presets[name];
      this.dark = preset.dark;
      if (Array.isArray(preset.colors)) {
        let colors = preset.colors.slice();
        for (const i in this.colors) {
          if (
            Object.prototype.hasOwnProperty.call(this.current, this.colors[i])
          ) {
            this.current[this.colors[i]] = colors[i];
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
      this.style.innerHTML = this.cssVars;
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

#VuetifyColoring div.v-input--switch__track,
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
  box-shadow: #000a 1px 1px 4px;
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
