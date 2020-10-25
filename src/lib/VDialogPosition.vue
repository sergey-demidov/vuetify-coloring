<template>
  <div ref="root" class="d-none d-sm-flex">
    <v-icon
      dense
      @click="setDialogPosition(dirs.left)"
      class="ma-2"
      :class="[contentClass]"
    >
      mdi-arrow-left-bold-outline
    </v-icon>
    <v-icon
      dense
      @click="setDialogPosition(dirs.center)"
      class="ma-2"
      :class="[contentClass]"
    >
      mdi-crop-square
    </v-icon>
    <v-icon
      dense
      @click="setDialogPosition(dirs.right)"
      class="ma-2"
      :class="[contentClass]"
    >
      mdi-arrow-right-bold-outline
    </v-icon>
  </div>
</template>

<script type="module">
const dirs = Object.freeze({
  left: "left",
  right: "right",
  center: "center"
});

export default {
  name: "VDialogPosition",
  props: {
    contentClass: {
      type: String,
      default: "vdp-header"
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (this.right) {
      this.position = dirs.right;
    }
    if (this.left) {
      this.position = dirs.left;
    }
  },
  mounted() {
    window.addEventListener("resize", this.setDialogPosition);
    this.$nextTick(() => {
      this.setDialogPosition(this.position);
    });
  },
  destroyed() {
    window.removeEventListener("resize", this.setDialogPosition);
  },
  data() {
    return {
      dirs: dirs,
      position: dirs.center,
      dialog: this.getParentByClass(this.$refs["root"], "v-dialog")
    };
  },
  methods: {
    setDialogPosition(dir) {
      // console.log(dir);
      let el = this.getParentByClass(this.$refs["root"], "v-dialog");
      if (!el) {
        // eslint-disable-next-line no-console
        console.warn("v-dialog-position works only inside v-dialog tag");
        return;
      }
      // console.dir(window.getComputedStyle(el)["display"]);
      // if (typeof dir !== "string") {
      //   if (this.position === dirs.center) return;
      //   else dir = this.position;
      // }
      let width = el.clientWidth;
      let screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      let marginRight =
        parseInt(getComputedStyle(el)["margin-right"], 10) || 24;
      let marginLeft;
      if (dir === dirs.left) {
        marginLeft = `-${screenWidth - width - marginRight * 4}px`;
      } else if (dir === dirs.right) {
        marginLeft = `${screenWidth - width - marginRight * 2}px`;
      } else {
        marginLeft = `${marginRight}px`;
        dir = dirs.center;
      }
      this.position = dir;
      el.style["margin-left"] = marginLeft;
    },
    getParentByClass(el, className) {
      while (el) {
        if (el.classList.contains(className)) {
          return el;
        } else {
          el = el.parentNode;
        }
      }
      return null;
    }
  }
};
</script>

<style>
/*noinspection CssUnresolvedCustomProperty*/

.v-dialog {
  overflow-y: visible !important;
  transition-property: left, margin-left !important;
  transition-duration: 0.777s, 0.777s !important;
}

.vdp-header {
  background-color: #0000 !important;
  color: #777777 !important;
}
</style>
