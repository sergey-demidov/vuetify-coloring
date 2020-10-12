<template>
  <div>
    <v-dialog
      id="dialog1"
      v-model="toolDialog"
      persistent
      hide-overlay
      max-width="700px"
      style="background-color: #eeeeee;"
    >
      <div id="VuetifyColoringTool">
        <v-toolbar class="vc-header" dense>
          <v-toolbar-title> Coloring</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <v-dialog-position></v-dialog-position>
          </v-toolbar-title>
        </v-toolbar>
        <v-card class="vc-panel">
          <v-card-text>
            <v-expansion-panels v-model="colored_tab">
              <v-expansion-panel
                v-for="(item, i) in colored"
                :key="'colored_' + i"
              >
                <v-expansion-panel-header class="vc-header py-0">
                  <v-flex>
                    <v-icon
                      style="border-radius: 50%; padding: 2px; color: #777777"
                      :style="{ background: item.background }"
                    >
                      mdi-brush
                    </v-icon>
                    {{ item.header }}
                  </v-flex>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="vc-panel py-0">
                  <v-simple-table class="vc-panel">
                    <template v-slot:default>
                      <tbody>
                        <tr
                          class="clickable"
                          v-if="item.classPath"
                          @click="selector = item.classPath"
                        >
                          <td style="width:6em">class</td>
                          <td class="pl-0">
                            <pre>{{ item.classPath }} </pre>
                          </td>
                          <td class="px-0"></td>
                        </tr>
                        <tr
                          class="clickable"
                          v-for="(css, c) in item.css"
                          :key="'css_' + c"
                          @click="selector = css.selectorText"
                        >
                          <td style="width:6em">css</td>
                          <td class="pl-0">
                            <pre>{{ folding(css.cssText) }} </pre>
                          </td>
                          <td class="px-0">
                            <v-icon
                              v-if="
                                css.style.getPropertyPriority(
                                  'background-color'
                                )
                              "
                              small
                              dense
                              style="border-radius: 50%; color: #f00; background-color: #ccc;"
                            >
                              mdi-exclamation
                            </v-icon>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-row class="pt-2">
              <v-col cols="10" style="position: relative">
                <v-btn
                  @click="important = important ? '' : ' !important'"
                  icon
                  style="position: absolute; right: 0; top: 0"
                  class="ma-4"
                  title="Important"
                >
                  <v-icon
                    style="background-color: #aaaaaa; border-radius: 50%"
                    :style="{ color: important ? 'red' : '#777777' }"
                  >
                    mdi-exclamation
                  </v-icon>
                </v-btn>
                <v-flex class="vc-prewrap" v-html="strGenerator"> </v-flex>
              </v-col>
              <v-col cols="2" class="pt-4">
                <v-btn
                  class="mt-0"
                  @click="setStyle(cssGenerator)"
                  width="80"
                  height="33"
                >
                  apply
                </v-btn>
                <v-btn
                  class="mt-4"
                  @click="setStyle('')"
                  width="80"
                  height="33"
                >
                  reset
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="pt-4 pb-0 vc-panel">
            <v-spacer />
            <v-btn
              v-for="name in colors"
              :key="'preset_' + name"
              small
              rounded
              :color="currentRule === name ? '#cccccc' : '#eeeeee'"
              style="color: #777777;"
              @click="currentRule = name"
            >
              {{ name }}
            </v-btn>
            <v-spacer />
          </v-card-actions>

          <v-card-actions>
            <v-spacer />
            <v-btn class="mt-6 vc-panel" text @click="cancel()">
              return
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>

    <v-snackbar
      v-model="snackbar"
      color="#777777"
      timeout="2000"
      style="color: #777777"
    >
      {{ snackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="#eeeeee" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import _ from "lodash";
import VDialogPosition from "./VDialogPosition";
const Diff = require("diff");

export default {
  name: "VColoringTools",
  components: { VDialogPosition },
  props: {
    colors: {
      type: Array,
      default: function() {
        return ["header", "panel", "background", "primary"];
      }
    }
  },
  data() {
    return {
      width: 550,
      error: false,
      errorMessage: "",
      coloringDialog: false,
      tab: null,
      currentColor: "",
      currentRule: "",
      current: {},
      dark: false,
      dark2: false,
      colorDebugXXX: true,
      colored: [],
      toolDialog: false,
      colored_tab: null,
      selector: "",
      testCssRule: "",
      important: "",
      textareaLabel: "Possible selector",
      snackbar: false,
      snackbarMessage: "",
      dialogPosition: "",
      style: {},
      strGenerator: ""
    };
  },
  computed: {
    cssGenerator() {
      if (this.selector && this.currentRule) {
        return `${this.selector} {
    background-color: var(--v-${this.currentRule}-base)${this.important};
}`;
      } else {
        return " ";
      }
    }
  },
  watch: {
    cssGenerator(n, o) {
      console.dir(Diff.diffWords(o, n));
      let res = "";
      let diffs = Diff.diffWords(o, n);
      for (let d of diffs) {
        console.dir(d.value);
        res += d.added
          ? `<span class="blink">${d.value}</span>`
          : d.removed
          ? ""
          : d.value;
      }
      this.strGenerator = res.replaceAll("\n", "<br />");
    }
  },
  created() {
    this.style = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(this.style);
    console.log("end of created");
  },
  mounted() {
    document.addEventListener("mouseup", this.getColored);
  },
  destroyed() {
    document.removeEventListener("mouseup", this.getColored);
  },
  methods: {
    folding(str) {
      return str
        .replaceAll(/([{;])/g, "$1\n")
        .split("\n")
        .map((s, i, arr) => {
          return i > 0 && i < arr.length - 1 ? "  " + s : s;
        })
        .join("\n");
    },
    label(hover) {
      if (hover && this.cssGenerator.length > 1) {
        this.textareaLabel = "Copy";
      } else {
        this.textareaLabel = "Possible selector";
      }
    },
    setStyle(style) {
      this.style.innerHTML = style;
    },
    copy(text) {
      // console.dir(text)
      navigator.clipboard.writeText(text).then(
        () => {
          this.snackbarMessage = "Copied";
          this.snackbar = true;
        },
        () => {
          this.snackbarMessage = "Error";
          this.snackbar = true;
        }
      );
    },
    cancel() {
      this.toolDialog = false;
      this.currentRule = "";
      this.testCssRule = "";
      this.selector = "";
      this.colored_tab = null;
      this.colored = [];
      this.important = false;
      this.setStyle("");
    },
    getColored(e) {
      if (!this.colorDebugXXX || !e.ctrlKey) {
        return;
      }
      let el = e.target;
      let res = [];
      res.push({
        background: getComputedStyle(el)["background-color"],
        classPath: this.getClass(el),
        // css: this.getMatchedCSSRules(el),
        css: this.css(el, "background"),
        header: "clicked"
      });
      while (el) {
        let bg = getComputedStyle(el)["background-color"];
        if (bg.length > 0 && bg !== "rgba(0, 0, 0, 0)") {
          res.push({
            background: bg,
            classPath: this.getClass(el),
            css: this.getMatchedCSSRules(el),
            header: "colored by"
          });
          this.colored = _.reverse(res);
          this.currentRule = this.colors[0];
          this.toolDialog = true;
          this.colored_tab = 1;
          return res;
        } else {
          el = el.parentNode;
        }
      }
    },
    getClass(row) {
      const all = document.body.getElementsByTagName("*");
      const rating = {};
      for (const row of all) {
        if (row.className) {
          const cl = row.className.split(" ");
          for (const r of cl) {
            rating[r] = !rating[r] ? 1 : rating[r] + 1;
          }
        }
      }
      if (row.className && row.className.length > 0) {
        let cl = row.className.split(" ");
        cl = cl.sort((a, b) => {
          if (rating[a] === rating[b]) {
            return 0;
          }
          return rating[a] > rating[b] ? -1 : 1;
        });
        cl = _.pull(cl, "theme--dark", "theme--light");
        return "." + _.uniq(cl).join(".");
      } else {
        return "";
      }
    },
    css(el, prop) {
      console.log(prop);
      const re = new RegExp(prop, "g");
      const sheets = document.styleSheets;
      let ret = [];
      el.matches = el.matches || el.webkitMatchesSelector;
      for (const i in sheets) {
        if (
          Object.prototype.hasOwnProperty.call(sheets, i) &&
          !sheets[i].href
        ) {
          const rules = sheets[i].rules || sheets[i].cssRules;
          for (const r in rules) {
            if (
              Object.prototype.hasOwnProperty.call(rules, r) &&
              el.matches(rules[r].selectorText && rules[r].cssText.match(re))
            ) {
              ret.push(rules[r].cssText);
            }
          }
        }
      }
      return ret;
    }
  }
};
</script>

<style>
/*noinspection CssUnresolvedCustomProperty*/

.vc-prewrap {
  white-space: pre-wrap;
  border-color: #777777;
  border-radius: 7px;
  border-style: solid;
  border-width: 2px;
  height: 6em;
  padding: 1em;
  line-height: 1.2em;
  font-size: 16px;
}

.vc-animate {
  transition-property: background-color;
  transition-duration: 1s;
}

@keyframes highlight {
  0% {
    background: purple;
  }
  100% {
    background: none;
  }
}

.blink {
  animation: highlight 1s;
}

#VuetifyColoringTool .v-card__text,
#VuetifyColoringTool .v-expansion-panel,
#VuetifyColoringTool .v-sheet,
.vc-panel {
  background-color: #eeeeee !important;
  color: #777777 !important;
  border-color: #eeeeee !important;
}

#VuetifyColoringTool .v-input label,
#VuetifyColoringTool .v-input input,
#VuetifyColoringTool .v-input textarea {
  color: #777777 !important;
}

#VuetifyColoringTool fieldset {
  border-width: 1px !important;
  border-color: #777777 !important;
  color: #777777 !important;
}

#VuetifyColoringTool .v-expansion-panel-content__wrap {
  padding: 4px 12px 4px 12px !important;
}

.clickable {
  cursor: pointer !important;
}

#VuetifyColoringTool textarea {
  cursor: pointer;
  color: #777777;
}

#VuetifyColoringTool .v-expansion-panel-header {
  min-height: 48px !important;
}

#VuetifyColoringTool table > tbody > tr:hover {
  background-color: #dddddd;
}

#VuetifyColoringTool .v-text-field--solo > .v-input__control > .v-input__slot {
  background-color: #eeeeee !important;
}

#VuetifyColoringTool .v-toolbar__content,
.vc-header {
  background-color: #cccccc !important;
  color: #777777 !important;
}
</style>
