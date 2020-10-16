<template>
  <div>
    <v-dialog
      id="dialog1"
      v-model="toolDialog"
      persistent
      hide-overlay
      max-width="600px"
      style="background-color: #eeeeee;"
    >
      <div id="VuetifyColoringTool" class="vc-panel">
        <v-toolbar class="vc-header" dense>
          <v-toolbar-title> Coloring</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <v-dialog-position></v-dialog-position>
          </v-toolbar-title>
        </v-toolbar>
        <v-card class="vc-panel">
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
                          <td style="width: 42px;" class="px-1">class</td>
                          <td class="px-0">
                            <pre style="max-width: 470px; overflow: hidden">{{
                              item.classPath
                            }}</pre>
                          </td>
                          <td class="px-1"></td>
                        </tr>
                        <tr
                          class="clickable"
                          v-for="(css, c) in item.css"
                          :key="'css_' + c"
                          @click="selector = css.selectorText"
                        >
                          <td style="width: 42px" class="px-1">css</td>
                          <td class="px-0">
                            <pre style="max-width: 470px; overflow: hidden">{{
                              folding(css.cssText)
                            }}</pre>
                          </td>
                          <td class="px-1">
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
            <v-flex class="pt-4" style="position: relative">
              <v-flex
                style="position: absolute; top: 2px; left: 10px; background-color: #eeeeee; padding: 4px;"
                v-text="textareaLabel"
              ></v-flex>
              <v-btn
                @click="important = important ? '' : ' !important'"
                icon
                style="position: absolute; right: 0; top: 0"
                class="mx-0 my-4"
                title="Important"
              >
                <v-icon
                  style="background-color: #aaaaaa; border-radius: 50%"
                  :style="{ color: important ? 'red' : '#777777' }"
                  @mouseenter="setLabel('important')"
                  @mouseleave="setLabel()"
                >
                  mdi-exclamation
                </v-icon>
              </v-btn>
              <v-flex
                @click="copy(cssGenerator)"
                class="vc-prewrap clickable"
                style="overflow: hidden"
                v-html="strGenerator"
                @mouseenter="setLabel('css')"
                @mouseleave="setLabel()"
              >
              </v-flex>
            </v-flex>
          </v-card-text>

          <v-card-actions class="pt-0 pb-3">
            <v-spacer />
            <v-btn class="pt-0 vc-panel" text @click="cancel()">
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
      style="color: #777777;"
    >
      <v-flex class="text-center">
        {{ snackbarMessage }}
      </v-flex>
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
      textareaLabel: "",
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
      // console.dir(Diff.diffWords(o, n));
      let res = "";
      let diffs = Diff.diffWords(o, n);
      for (let d of diffs) {
        // console.dir(d.value);
        res += d.added
          ? `<span class="blink">${d.value}</span>`
          : d.removed
          ? ""
          : d.value;
      }
      this.strGenerator = res.replaceAll("\n", "<br />");
      this.setStyle(n);
    }
  },
  created() {
    this.style = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(this.style);
    this.setLabel();
  },
  mounted() {
    document.addEventListener("mouseup", this.getColored);
  },
  destroyed() {
    document.removeEventListener("mouseup", this.getColored);
  },
  methods: {
    folding(str) {
      // console.dir(str);
      return str
        .replaceAll(/([{;])/g, "$1\n")
        .split("\n")
        .map((s, i, arr) => {
          return i > 0 && i < arr.length - 1 ? "  " + s : s.trimLeft();
        })
        .join("\n");
    },
    setLabel(hover) {
      this.textareaLabel =
        hover === "css"
          ? "Copy"
          : hover === "important"
          ? "Important"
          : "Possible selector";
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
      if (this.toolDialog || !e.ctrlKey) {
        return;
      }
      let el = e.target;
      let res = [];
      res.push({
        background: getComputedStyle(el).getPropertyValue("background-color"),
        classPath: this.getClass(el),
        css: this.css(el, "background-color"),
        header: "clicked element"
      });
      while (el) {
        let bg = getComputedStyle(el).getPropertyValue("background-color");
        if (bg.length > 0 && bg !== "rgba(0, 0, 0, 0)") {
          res.push({
            background: bg,
            classPath: this.getClass(el),
            css: this.css(el, "background-color"),
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
      let dummy = document.createElement(el.tagName);
      dummy.style.display = "none";
      document.body.appendChild(dummy);
      const sheets = document.styleSheets;
      let ret = [];
      el.matches = el.matches || el.webkitMatchesSelector;
      for (const i in sheets) {
        if (Object.prototype.hasOwnProperty.call(sheets, i)) {
          let rules;
          try {
            rules = sheets[i].rules || sheets[i].cssRules;
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e, sheets[i].href);
            continue;
          }
          for (const r in rules) {
            if (
              Object.prototype.hasOwnProperty.call(rules, r) &&
              el.matches(rules[r].selectorText) &&
              rules[r].style.getPropertyValue(prop)
            ) {
              dummy.style[prop] = rules[r].style.getPropertyValue(prop);
              // console.dir(rules[r].style[prop]);
              // console.dir(getComputedStyle(el).getPropertyValue(prop));
              // console.dir(dummy.style[prop]);
              // console.dir(getComputedStyle(dummy).getPropertyValue(prop));
              // console.dir(getComputedStyle(dummy));
              if (
                getComputedStyle(el).getPropertyValue(prop) ===
                getComputedStyle(dummy).getPropertyValue(prop)
              ) {
                ret.push(rules[r]);
              }
            }
          }
        }
      }
      document.body.removeChild(dummy);
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
  background-color: #eeeeee !important;
  color: #777777 !important;
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
