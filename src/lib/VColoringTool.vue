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
      <div id="VuetifyColoringTool" class="vcp-panel">
        <v-toolbar class="vcp-header" dense>
          <v-toolbar-title> Coloring Tool</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <v-dialog-position right></v-dialog-position>
          </v-toolbar-title>
        </v-toolbar>
        <v-card class="vcp-panel">
          <v-card-actions class="pt-4 pb-0 vcp-panel">
            <v-spacer />
            <v-btn
              v-for="name in colors"
              :key="'preset_' + name"
              small
              rounded
              :color="currentColor === name ? '#cccccc' : '#eeeeee'"
              style="color: #777777;"
              @click="currentColor = name"
            >
              {{ name }}
            </v-btn>
            <v-spacer />
          </v-card-actions>

          <v-card-text>
            <v-expansion-panels v-model="colored_tab">
              <v-expansion-panel
                :disabled="
                  item.css.length === 0 &&
                    !item.elClass &&
                    !item.classPath &&
                    !item.id
                "
                v-for="(item, i) in colored"
                :key="'colored_' + i"
              >
                <v-expansion-panel-header class="vcp-header py-0">
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
                <v-expansion-panel-content class="vcp-panel py-0">
                  <v-simple-table class="vcp-panel">
                    <template v-slot:default>
                      <tbody>
                        <tr
                          class="clickable"
                          v-if="item.elClass"
                          @click="select(item.elClass, item.el)"
                        >
                          <td style="width: 42px;" class="vcp-panel px-1">
                            class
                          </td>
                          <td class="vcp-panel px-0">
                            <pre style="max-width: 470px; overflow: hidden">{{
                              item.elClass
                            }}</pre>
                          </td>
                          <td class="vcp-panel px-1"></td>
                        </tr>
                        <tr
                          class="clickable"
                          v-if="item.classPath"
                          @click="
                            selector = item.classPath;
                            selected = item.el;
                          "
                        >
                          <td style="width: 42px;" class="vcp-panel px-1">
                            path
                          </td>
                          <td class="vcp-panel px-0">
                            <pre style="max-width: 470px; overflow: hidden">{{
                              item.classPath
                            }}</pre>
                          </td>
                          <td class="vcp-panel px-1"></td>
                        </tr>
                        <tr
                          class="clickable"
                          v-for="(css, c) in item.css"
                          :key="'css_' + c"
                          @click="
                            selector = css.selectorText;
                            selected = item.el;
                          "
                        >
                          <td style="width: 42px" class="vcp-panel px-1">
                            css
                          </td>
                          <td class="vcp-panel px-0">
                            <pre style="max-width: 470px; overflow: hidden">{{
                              folding(css.cssText)
                            }}</pre>
                          </td>
                          <td class="vcp-panel px-1">
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
                ref="infoBox"
                v-text="textareaLabel"
                class="vc-animate-width"
                style="font-size: 14px"
                :style="{ width: textareaLabel.length * 6 + 16 + 'px' }"
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
            <v-btn class="pt-0 vcp-panel" text @click="cancel()">
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
        return [];
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
      current: {},
      dark: false,
      dark2: false,
      colorDebugXXX: true,
      colored: [],
      toolDialog: false,
      colored_tab: null,
      selector: "",
      testCssRule: "",
      important: " !important",
      textareaLabel: "",
      snackbar: false,
      snackbarMessage: "",
      dialogPosition: "",
      style: {},
      strGenerator: "",
      selected: {}
    };
  },
  computed: {
    cssGenerator() {
      if (this.selector && this.currentColor) {
        return `${this.selector} {
    background-color: var(--v-${this.currentColor}-base)${this.important};
}`;
      } else {
        return " ";
      }
    }
  },
  watch: {
    selected(elNew, elOld) {
      console.dir(elNew);
      console.dir(elOld);
      if (elOld.classList) {
        elOld.classList.remove("border");
      }
      if (elNew.classList) {
        elNew.classList.add("border");
      }
    },
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
  created() {},
  mounted() {
    this.style = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(this.style);
    this.setLabel();
    document.addEventListener("mouseup", this.getColored);
  },
  destroyed() {
    document.removeEventListener("mouseup", this.getColored);
  },
  methods: {
    select(s, el) {
      this.selector = s;
      this.selected = el;
    },
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
          : "CSS rule";
    },
    setStyle(style) {
      this.style.innerHTML = style;
    },
    copy(text) {
      // console.dir(text)
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(
          () => {
            this.snackbarMessage = "Copied";
            this.snackbar = true;
          },
          e => {
            // eslint-disable-next-line no-console
            console.warn(e);
            this.snackbarMessage = "Error";
            this.snackbar = true;
          }
        );
      } else {
        this.snackbarMessage = "Error: navigator.clipboard undefined";
        this.snackbar = true;
      }
    },

    cancel() {
      this.toolDialog = false;
      this.currentColor = "";
      this.testCssRule = "";
      this.selector = "";
      this.colored_tab = null;
      this.colored = [];
      this.setStyle("");
      this.$root.$emit("coloringToolOpened", false);
      this.selected.classList.remove("border");
      this.selected = {};
    },
    getColored(e) {
      if (this.toolDialog || !e.ctrlKey) {
        return;
      }
      let el = e.target;
      setTimeout(() => {
        this.$root.$emit("coloringToolOpened", true);
        let res = [];
        let background;
        let classPath = [];
        do {
          classPath.push(
            el.tagName.toLowerCase() +
              (el.id.length > 0 ? `#${el.id}` : "") +
              this.getClass(el)
          );
          console.dir(el);
          background = getComputedStyle(el).getPropertyValue(
            "background-color"
          );
          if (background !== "rgba(0, 0, 0, 0)" || !res[0]) {
            res.push({
              el,
              background,
              elClass: this.getClass(el),
              css: this.getCSS(el, "background-color"),
              header: res[0] ? "colored by" : "clicked element",
              classPath: ""
            });
          }
          el = el.parentNode;
        } while (el && background === "rgba(0, 0, 0, 0)");
        res[0].classPath = _.reverse(classPath).join(" > ");
        // this.colored = _.reverse(res);
        this.colored = res;
        this.currentColor = this.colors[0];
        this.colored_tab = 0;
        this.selector = res[0].classPath;
        this.selected = res[0].el;
        //   this.colored[0].css[0].selectorText || this.colored[0].elClass;
        this.toolDialog = true;

        // res.push({
        //   el,
        //   background: getComputedStyle(el).getPropertyValue("background-color"),
        //   elClass: this.getClass(el),
        //   css: this.css(el, "background-color"),
        //   header: "clicked element"
        // });
        // while (el) {
        //   let bg = getComputedStyle(el).getPropertyValue("background-color");
        //   if (bg.length > 0 && bg !== "rgba(0, 0, 0, 0)") {
        //     res.push({
        //       el,
        //       background: bg,
        //       elClass: this.getClass(el),
        //       css: this.css(el, "background-color"),
        //       header: "colored by"
        //     });
        //     this.colored = _.reverse(res);
        //     this.currentColor = this.colors[0];
        //     // console.dir(this.colored);
        //     this.selector =
        //       this.colored[0].css[0].selectorText || this.colored[0].elClass;
        //     this.toolDialog = true;
        //     this.colored_tab = 0;
        //     this.selected = el;
        //     return res;
        //   } else {
        //     el = el.parentNode;
        //   }
        // }
      }, 1000);
    },
    getClass(el) {
      const all = document.body.getElementsByTagName("*");
      const rating = {};
      for (const el of all) {
        if (el.className && typeof el.className === "string") {
          // console.dir(el);
          const cl = el.className.split(" ");
          for (const r of cl) {
            rating[r] = !rating[r] ? 1 : rating[r] + 1;
          }
        }
      }
      if (
        el.className &&
        typeof el.className === "string" &&
        el.className.length > 0
      ) {
        let cl = el.className.split(" ");
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
    getCSS(el, prop) {
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
            console.warn(e.message, sheets[i].href);
            continue;
          }
          for (const r in rules) {
            if (
              Object.prototype.hasOwnProperty.call(rules, r) &&
              el.matches(rules[r].selectorText) &&
              rules[r].style.getPropertyValue(prop)
            ) {
              dummy.style[prop] = rules[r].style.getPropertyValue(prop);
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

.border {
  /*border-color: #ff00ff;*/
  /*border-width: 1px;*/
  /*border-style: solid;*/
  z-index: 100;
  outline-width: 1px !important;
  outline-style: dotted !important;
  outline-offset: -1px !important;
  animation: border-highlight 0.4s infinite;
  /*box-sizing: content-box !important;*/
}

@keyframes border-highlight {
  0% {
    outline-color: #ee00eeee;
  }
  50% {
    outline-color: #ee00ee00;
  }
  100% {
    outline-color: #ee00eeee;
  }
}

.vc-prewrap {
  white-space: pre-wrap;
  border-color: #777777;
  border-radius: 7px;
  border-style: solid;
  border-width: 2px;
  min-height: 6em;
  padding: 1em;
  line-height: 1.2em;
  font-size: 16px;
}

.vc-animate {
  transition-property: background-color;
  transition-duration: 1s;
}

.vc-animate-width {
  position: absolute;
  top: 6px;
  left: 10px;
  background-color: #eeeeee;
  /*background-color: yellow;*/
  padding-left: 4px;
  padding-right: 4px;
  transition-property: width, opacity;
  transition-duration: 0.5s;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
  display: inline;
}

@keyframes highlight {
  from {
    background: purple;
  }
  to {
    background: none;
  }
}

.blink {
  animation: highlight 1s;
}

#VuetifyColoringTool .v-btn__content {
  background-color: #00000000 !important;
}

#VuetifyColoringTool .v-card__actions,
#VuetifyColoringTool .v-card__text,
#VuetifyColoringTool .v-expansion-panel,
#VuetifyColoringTool .v-sheet,
.vcp-panel {
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
/*  prettier-ignore */
#VuetifyColoringTool .v-data-table > .v-data-table__wrapper > table > tbody > tr,
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

/*  prettier-ignore */
#VuetifyColoringTool .v-data-table > .v-data-table__wrapper > table > tbody > tr:hover,
#VuetifyColoringTool table > tbody > tr:hover {
  background-color: #dddddd !important;
}

#VuetifyColoringTool .v-text-field--solo > .v-input__control > .v-input__slot {
  background-color: #eeeeee !important;
}

#VuetifyColoringTool .v-toolbar__content,
.vcp-header {
  background-color: #cccccc !important;
  color: #777777 !important;
}
</style>
