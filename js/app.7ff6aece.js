(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],d=0,u=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vuetify-coloring/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{"mini-variant":e.miniVariant,clipped:"",fixed:e.fixed,app:"",color:"panel"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",e._l(e.items,(function(t,n){return a("v-list-item",{key:n,attrs:{to:t.to,router:"",exact:""}},[a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],1),a("v-app-bar",{attrs:{"clipped-left":"",fixed:e.fixed,app:"",color:"header"}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),a("v-spacer"),"root"===e.$route.name?[e._v(" Click here "),a("v-icon",{staticClass:"ml-3 header animate-arrow"},[e._v(" mdi-arrow-right-bold-outline ")]),a("VColoring",{attrs:{colors:["header","panel","background","primary"]}})]:e._e(),"presets"===e.$route.name?[e._v(" Click here "),a("v-icon",{staticClass:"ml-3 header animate-arrow"},[e._v(" mdi-arrow-right-bold-outline ")]),a("VColoring",{attrs:{colors:["header","panel","background","primary"],presets:e.presets}})]:e._e(),"disable-picker"===e.$route.name?[e._v(" Click here "),a("v-icon",{staticClass:"ml-3 header animate-arrow"},[e._v(" mdi-arrow-right-bold-outline ")]),a("VColoring",{attrs:{colors:["header","panel","background","primary"],presets:e.presets,"disable-picker":""}})]:e._e(),"tools"===e.$route.name?[a("VColoring",{attrs:{colors:["header","panel","background","primary"],tools:""}})]:e._e()],2),a("v-main",[a("v-container",[a("v-row",[a("v-spacer"),a("v-col",{attrs:{cols:"12",xl:"7",lg:"8",md:"10",sm:"12"}},[a("v-layout",{staticClass:"xl4 lg4 md6 sm8 xs10",attrs:{column:"","justify-center":"","align-center":"",wrap:"","align-content-center":""}},[a("router-view")],1)],1),a("v-spacer")],1)],1)],1),a("v-footer",{attrs:{absolute:"",app:"",color:"header"}},[a("span",[e._v("© "+e._s((new Date).getFullYear()))])])],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-dialog",{attrs:{persistent:"","overlay-color":"#0000",width:e.$vuetify.breakpoint.xs?360:530,"content-class":"vc-panel"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[a("v-icon",e._g(e._b({staticClass:"vc-rainbow ma-3",staticStyle:{"border-radius":"50%",padding:"2px",color:"#000a","z-index":"100"},attrs:{size:"icon"}},"v-icon",o,!1),n),[e._v(" mdi-brush ")])]}}]),model:{value:e.coloringDialog,callback:function(t){e.coloringDialog=t},expression:"coloringDialog"}},[a("div",{staticClass:"vc-panel",attrs:{id:"VuetifyColoring"}},[a("v-card",{staticClass:"vc-panel"},[a("v-toolbar",{staticClass:"vc-header"},[a("v-toolbar-title",[e._v(" Coloring ")]),a("v-spacer"),a("v-toolbar-title",[a("v-dialog-position")],1)],1),a("v-card",{staticClass:"vc-panel py-0 py-sm-2"},[a("v-card-text",{staticClass:"pb-0 pt-2 vc-panel pl-0 pl-sm-2"},[a("v-tabs",{staticClass:"vc-panel",staticStyle:{display:"flex"},attrs:{vertical:""}},[e._l(e.colors,(function(t){return a("v-tab",{key:"c_tab_"+t,staticClass:"my-0 pr-1 pr-sm-2 pl-1 pl-sm-2 vc-panel",staticStyle:{"text-align":"left","justify-content":"flex-start"},style:{"text-decoration":e.isUndef(t)?"line-through":"none"},attrs:{"active-class":"vc-panel-active","exact-active-class":"vc-panel-active"},on:{click:function(a){e.currentColor=e.current[t]}},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-icon",{staticClass:"mr-2 ml-1 d-none d-sm-flex",staticStyle:{"border-radius":"50%",padding:"5px"},style:{"background-color":e.current[t]},attrs:{color:"#00000099",dense:""}},[e._v(" mdi-brush ")]),e._v(" "+e._s(t)+" ")],1)})),e._l(e.colors,(function(t){return a("v-tab-item",{key:"c_tab_item_"+t,staticClass:"vc-panel",staticStyle:{"text-align":"center"},attrs:{transition:"top","reverse-transition":"bottom"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.isUndef(t)?a("v-container",{staticClass:"py-0",attrs:{"fill-height":"",fluid:""}},[a("v-row",{style:{height:e.canvasHeight+62+"px"},attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"vc-panel"},[e._v(" Color "),a("strong",[e._v(" "+e._s(e.themeName+"."+t)+" ")]),e._v(" is not defined "),a("br"),e._v(" You must specify it in vuetify "),a("br"),a("a",{attrs:{href:"https://vuetifyjs.com/en/features/theme/#customizing",target:"_blank"}},[e._v(" theme configuration ")])])],1)],1):a("v-color-picker",{staticClass:"vc-panel",attrs:{value:e.current[t],disabled:e.isUndef(t)||e.disablePicker,"hide-mode-switch":"","hide-inputs":"",width:e.$vuetify.breakpoint.xs?240:350,"dot-size":"7","canvas-height":e.canvasHeight},on:{input:function(a){return e.setColor(t,a)}}})],1)})),a("v-card-actions",{staticClass:"pl-0 ml-0"},[a("v-switch",{staticClass:"mt-0 ml-1 ml-sm-2 vc-panel",attrs:{dense:"",disabled:e.disablePicker,"hide-details":"",color:"vc-panel"},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}}),a("v-flex",{staticClass:"ml-n1 mt-1",staticStyle:{color:"#777777","font-weight":"500","z-index":"10"},domProps:{textContent:e._s(e.themeName.toUpperCase())}}),a("v-spacer")],1)],2)],1),a("v-card-actions",{staticClass:"my-0 pt-1 pb-2"},[a("v-spacer"),e._l(e.buttons,(function(t){return a("v-btn",{key:"btn_"+t,staticStyle:{color:"#777777"},attrs:{small:"",rounded:"",color:e.matchScheme(t)?"#cccccc":"#eeeeee"},on:{click:function(a){return e.setColors(t)}}},[e._v(" "+e._s(t)+" ")])})),a("v-spacer")],2),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"vc-panel",attrs:{text:""},on:{click:function(t){return e.cancel()}}},[e._v(" "+e._s("Return")+" ")]),a("v-spacer")],1)],1)],1)],1)]),e.tools?a("v-coloring-tool",{attrs:{colors:e.colors}}):e._e()],1)},i=[],l=(a("99af"),a("caad"),a("a15b"),a("fb6a"),a("d3b7"),a("ac1f"),a("25f0"),a("2532"),a("466d"),a("b85c")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"root",staticClass:"d-none d-sm-flex"},[a("v-icon",{staticClass:"ma-2",class:[e.contentClass],attrs:{dense:""},on:{click:function(t){return e.setDialogPosition(e.dirs.left)}}},[e._v(" mdi-arrow-left-bold-outline ")]),a("v-icon",{staticClass:"ma-2",class:[e.contentClass],attrs:{dense:""},on:{click:function(t){return e.setDialogPosition(e.dirs.center)}}},[e._v(" mdi-crop-square ")]),a("v-icon",{staticClass:"ma-2",class:[e.contentClass],attrs:{dense:""},on:{click:function(t){return e.setDialogPosition(e.dirs.right)}}},[e._v(" mdi-arrow-right-bold-outline ")])],1)},p=[],d=(a("dca8"),Object.freeze({left:"left",right:"right",center:"center"})),u={name:"VDialogPosition",props:{contentClass:{type:String,default:"vdp-header"},left:{type:Boolean,default:!1},right:{type:Boolean,default:!1}},created:function(){this.right&&(this.position=d.right),this.left&&(this.position=d.left)},mounted:function(){var e=this;window.addEventListener("resize",this.setDialogPosition),this.$nextTick((function(){e.setDialogPosition(e.position)}))},destroyed:function(){window.removeEventListener("resize",this.setDialogPosition)},data:function(){return{dirs:d,position:d.center,dialog:this.getParentByClass(this.$refs["root"],"v-dialog")}},methods:{setDialogPosition:function(e){var t=this.getParentByClass(this.$refs["root"],"v-dialog");if(t){var a,n=t.clientWidth,o=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,r=parseInt(getComputedStyle(t)["margin-right"],10)||24;e===d.left?a="-".concat(o-n-4*r,"px"):e===d.right?a="".concat(o-n-2*r,"px"):(a="".concat(r,"px"),e=d.center),this.position=e,t.style["margin-left"]=a}else console.error("v-dialog-position works only inside v-dialog tag")},getParentByClass:function(e,t){while(e){if(e.classList.contains(t))return e;e=e.parentNode}return null}}},v=u,h=(a("5879"),a("2877")),f=a("6544"),m=a.n(f),b=a("132d"),g=Object(h["a"])(v,c,p,!1,null,null,null),y=g.exports;m()(g,{VIcon:b["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-dialog",{staticStyle:{"background-color":"#eeeeee"},attrs:{id:"dialog1",persistent:"","hide-overlay":"","max-width":"600px"},model:{value:e.toolDialog,callback:function(t){e.toolDialog=t},expression:"toolDialog"}},[a("div",{staticClass:"vc-panel",attrs:{id:"VuetifyColoringTool"}},[a("v-toolbar",{staticClass:"vc-header",attrs:{dense:""}},[a("v-toolbar-title",[e._v(" Coloring Tool")]),a("v-spacer"),a("v-toolbar-title",[a("v-dialog-position",{attrs:{right:""}})],1)],1),a("v-card",{staticClass:"vc-panel"},[a("v-card-actions",{staticClass:"pt-4 pb-0 vc-panel"},[a("v-spacer"),e._l(e.colors,(function(t){return a("v-btn",{key:"preset_"+t,staticStyle:{color:"#777777"},attrs:{small:"",rounded:"",color:e.currentRule===t?"#cccccc":"#eeeeee"},on:{click:function(a){e.currentRule=t}}},[e._v(" "+e._s(t)+" ")])})),a("v-spacer")],2),a("v-card-text",[a("v-expansion-panels",{model:{value:e.colored_tab,callback:function(t){e.colored_tab=t},expression:"colored_tab"}},e._l(e.colored,(function(t,n){return a("v-expansion-panel",{key:"colored_"+n,attrs:{disabled:0===t.css.length&&!t.classPath}},[a("v-expansion-panel-header",{staticClass:"vc-header py-0"},[a("v-flex",[a("v-icon",{staticStyle:{"border-radius":"50%",padding:"2px",color:"#777777"},style:{background:t.background}},[e._v(" mdi-brush ")]),e._v(" "+e._s(t.header)+" ")],1)],1),a("v-expansion-panel-content",{staticClass:"vc-panel py-0"},[a("v-simple-table",{staticClass:"vc-panel",scopedSlots:e._u([{key:"default",fn:function(){return[a("tbody",[t.classPath?a("tr",{staticClass:"clickable",on:{click:function(a){e.selector=t.classPath}}},[a("td",{staticClass:"px-1",staticStyle:{width:"42px"}},[e._v("class")]),a("td",{staticClass:"px-0"},[a("pre",{staticStyle:{"max-width":"470px",overflow:"hidden"}},[e._v(e._s(t.classPath))])]),a("td",{staticClass:"px-1"})]):e._e(),e._l(t.css,(function(t,n){return a("tr",{key:"css_"+n,staticClass:"clickable",on:{click:function(a){e.selector=t.selectorText}}},[a("td",{staticClass:"px-1",staticStyle:{width:"42px"}},[e._v("css")]),a("td",{staticClass:"px-0"},[a("pre",{staticStyle:{"max-width":"470px",overflow:"hidden"}},[e._v(e._s(e.folding(t.cssText)))])]),a("td",{staticClass:"px-1"},[t.style.getPropertyPriority("background-color")?a("v-icon",{staticStyle:{"border-radius":"50%",color:"#f00","background-color":"#ccc"},attrs:{small:"",dense:""}},[e._v(" mdi-exclamation ")]):e._e()],1)])}))],2)]},proxy:!0}],null,!0)})],1)],1)})),1),a("v-flex",{staticClass:"pt-4",staticStyle:{position:"relative"}},[a("v-flex",{ref:"infoBox",staticClass:"vc-animate-width",staticStyle:{"font-size":"14px"},style:{width:6*e.textareaLabel.length+16+"px"},domProps:{textContent:e._s(e.textareaLabel)}}),a("v-btn",{staticClass:"mx-0 my-4",staticStyle:{position:"absolute",right:"0",top:"0"},attrs:{icon:"",title:"Important"},on:{click:function(t){e.important=e.important?"":" !important"}}},[a("v-icon",{staticStyle:{"background-color":"#aaaaaa","border-radius":"50%"},style:{color:e.important?"red":"#777777"},on:{mouseenter:function(t){return e.setLabel("important")},mouseleave:function(t){return e.setLabel()}}},[e._v(" mdi-exclamation ")])],1),a("v-flex",{staticClass:"vc-prewrap clickable",staticStyle:{overflow:"hidden"},domProps:{innerHTML:e._s(e.strGenerator)},on:{click:function(t){return e.copy(e.cssGenerator)},mouseenter:function(t){return e.setLabel("css")},mouseleave:function(t){return e.setLabel()}}})],1)],1),a("v-card-actions",{staticClass:"pt-0 pb-3"},[a("v-spacer"),a("v-btn",{staticClass:"pt-0 vc-panel",attrs:{text:""},on:{click:function(t){return e.cancel()}}},[e._v(" return ")]),a("v-spacer")],1)],1)],1)]),a("v-snackbar",{staticStyle:{color:"#777777"},attrs:{color:"#777777",timeout:"2000"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[a("v-flex",{staticClass:"text-center"},[e._v(" "+e._s(e.snackbarMessage)+" ")])],1)],1)},x=[],k=(a("d81d"),a("1276"),a("eee7"),a("2ef0")),_=a.n(k),V=a("bf68"),w={name:"VColoringTools",components:{VDialogPosition:y},props:{colors:{type:Array,default:function(){return[]}}},data:function(){return{width:550,error:!1,errorMessage:"",coloringDialog:!1,tab:null,currentColor:"",currentRule:"",current:{},dark:!1,dark2:!1,colorDebugXXX:!0,colored:[],toolDialog:!1,colored_tab:null,selector:"",testCssRule:"",important:" !important",textareaLabel:"",snackbar:!1,snackbarMessage:"",dialogPosition:"",style:{},strGenerator:""}},computed:{cssGenerator:function(){return this.selector&&this.currentRule?"".concat(this.selector," {\n    background-color: var(--v-").concat(this.currentRule,"-base)").concat(this.important,";\n}"):" "}},watch:{cssGenerator:function(e,t){var a,n="",o=V.diffWords(t,e),r=Object(l["a"])(o);try{for(r.s();!(a=r.n()).done;){var s=a.value;n+=s.added?'<span class="blink">'.concat(s.value,"</span>"):s.removed?"":s.value}}catch(i){r.e(i)}finally{r.f()}this.strGenerator=n.replaceAll("\n","<br />"),this.setStyle(e)}},created:function(){},mounted:function(){this.style=document.createElement("style"),document.getElementsByTagName("head")[0].appendChild(this.style),this.setLabel(),document.addEventListener("mouseup",this.getColored)},destroyed:function(){document.removeEventListener("mouseup",this.getColored)},methods:{folding:function(e){return e.replaceAll(/([{;])/g,"$1\n").split("\n").map((function(e,t,a){return t>0&&t<a.length-1?"  "+e:e.trimLeft()})).join("\n")},setLabel:function(e){this.textareaLabel="css"===e?"Copy":"important"===e?"Important":"Possible rule"},setStyle:function(e){this.style.innerHTML=e},copy:function(e){var t=this;navigator.clipboard.writeText(e).then((function(){t.snackbarMessage="Copied",t.snackbar=!0}),(function(){t.snackbarMessage="Error",t.snackbar=!0}))},cancel:function(){this.toolDialog=!1,this.currentRule="",this.testCssRule="",this.selector="",this.colored_tab=null,this.colored=[],this.setStyle(""),this.$root.$emit("coloringToolOpened",!1)},getColored:function(e){var t=this;if(!this.toolDialog&&e.ctrlKey){var a=e.target;setTimeout((function(){t.$root.$emit("coloringToolOpened",!0);var e=[];e.push({background:getComputedStyle(a).getPropertyValue("background-color"),classPath:t.getClass(a),css:t.css(a,"background-color"),header:"clicked element"});while(a){var n=getComputedStyle(a).getPropertyValue("background-color");if(n.length>0&&"rgba(0, 0, 0, 0)"!==n)return e.push({background:n,classPath:t.getClass(a),css:t.css(a,"background-color"),header:"colored by"}),t.colored=_.a.reverse(e),t.currentRule=t.colors[0],t.selector=t.colored[0].css[0].selectorText||t.colored[0].classPath,t.toolDialog=!0,t.colored_tab=0,e;a=a.parentNode}}),1e3)}},getClass:function(e){var t,a=document.body.getElementsByTagName("*"),n={},o=Object(l["a"])(a);try{for(o.s();!(t=o.n()).done;){var r=t.value;if(r.className&&"string"===typeof r.className){var s,i=r.className.split(" "),c=Object(l["a"])(i);try{for(c.s();!(s=c.n()).done;){var p=s.value;n[p]=n[p]?n[p]+1:1}}catch(u){c.e(u)}finally{c.f()}}}}catch(u){o.e(u)}finally{o.f()}if(e.className&&"string"===typeof e.className&&e.className.length>0){var d=e.className.split(" ");return d=d.sort((function(e,t){return n[e]===n[t]?0:n[e]>n[t]?-1:1})),d=_.a.pull(d,"theme--dark","theme--light"),"."+_.a.uniq(d).join(".")}return""},css:function(e,t){var a=document.createElement(e.tagName);a.style.display="none",document.body.appendChild(a);var n=document.styleSheets,o=[];for(var r in e.matches=e.matches||e.webkitMatchesSelector,n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r].rules||n[r].cssRules}catch(l){console.warn(l.message,n[r].href);continue}for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&e.matches(s[i].selectorText)&&s[i].style.getPropertyValue(t)&&(a.style[t]=s[i].style.getPropertyValue(t),getComputedStyle(e).getPropertyValue(t)===getComputedStyle(a).getPropertyValue(t)&&o.push(s[i]))}return document.body.removeChild(a),o}}},P=w,S=(a("f562"),a("8336")),O=a("b0af"),T=a("99d9"),E=a("169a"),j=a("cd55"),$=a("49e2"),D=a("c865"),B=a("0393"),N=a("0e8f"),A=a("1f4f"),L=a("2db4"),I=a("2fa4"),M=a("71d9"),F=a("2a7f"),R=Object(h["a"])(P,C,x,!1,null,null,null),H=R.exports;m()(R,{VBtn:S["a"],VCard:O["a"],VCardActions:T["a"],VCardText:T["b"],VDialog:E["a"],VExpansionPanel:j["a"],VExpansionPanelContent:$["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:B["a"],VFlex:N["a"],VIcon:b["a"],VSimpleTable:A["a"],VSnackbar:L["a"],VSpacer:I["a"],VToolbar:M["a"],VToolbarTitle:F["a"]});var z={name:"VColoring",components:{VDialogPosition:y,VColoringTool:H},props:{tools:{type:Boolean,default:!1},colors:{type:Array,default:function(){return["header","panel","background","primary"]}},presets:{type:Object,default:function(){return{}}},disablePicker:{type:Boolean,default:!1}},data:function(){return{coloringDialog:!1,tab:null,currentColor:"",current:{},dark:!0,dialogPosition:""}},computed:{disablePickerStyle:function(){var e=".v-color-picker__controls ";return this.disablePicker?e+"{ display: none; }":""},canvasHeight:function(){var e=50*this.colors.length;return e<150?150:e},themeName:function(){return this.dark?"dark":"light"},cssVars:function(){var e=[];for(var t in this.colors)e.push("--v-".concat(this.colors[t],"-base: ").concat(this.current[this.colors[t]],";"));return":root { "+e.join("")+" }"+this.disablePickerStyle},buttons:function(){var e=[],t=this.presets;for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&"current"!==a&&e.push(a);return e}},created:function(){var e={},t=Object.prototype.hasOwnProperty;try{"undefined"!==typeof localStorage.dark?(this.dark=JSON.parse(localStorage.dark),this.$vuetify.theme.dark=this.dark):this.dark=this.$vuetify.theme.dark;var a=this.$vuetify.theme.themes[this.themeName];if("undefined"!==typeof localStorage.colors){e=JSON.parse(localStorage.colors);var n,o=Object(l["a"])(this.colors);try{for(o.s();!(n=o.n()).done;){var r=n.value;this.colors.includes(r)&&t.call(e,r)&&e[r].toString().match(/^#[abcdef\d]{6}$/i)&&(this.current[r]=e[r].toString())}}catch(p){o.e(p)}finally{o.f()}}var s,i=Object(l["a"])(this.colors);try{for(i.s();!(s=i.n()).done;){var c=s.value;t.call(a,c)&&"undefined"===typeof this.current[c]&&(this.current[c]=a[c]),this.current=JSON.parse(JSON.stringify(this.current))}}catch(p){i.e(p)}finally{i.f()}}catch(d){console.warn(d.message)}},mounted:function(){this.style=document.createElement("style"),document.getElementsByTagName("head")[0].appendChild(this.style),this.setStyle()},watch:{coloringDialog:function(){this.setStyle()},dark:function(e){this.dark=e,this.$vuetify.theme.dark=e,this.sync()}},methods:{setColors:function(e){var t=this.presets[e];if(this.dark=t.dark,Array.isArray(t.colors)){var a=t.colors.slice();for(var n in this.colors)Object.prototype.hasOwnProperty.call(this.current,this.colors[n])&&(this.current[this.colors[n]]=a[n])}this.setStyle(),this.sync()},matchScheme:function(e){if(this.presets[e].dark!==this.dark)return!1;for(var t in this.colors)if(Object.prototype.hasOwnProperty.call(this.current,this.colors[t])&&this.current[this.colors[t]].toString().toUpperCase()!==this.presets[e].colors[t].toString().toUpperCase())return!1;return!0},isUndef:function(e){var t=this.$vuetify.theme.themes[this.themeName];return!Object.prototype.hasOwnProperty.call(t,e)},sync:function(){localStorage.colors=JSON.stringify(this.current),localStorage.dark=JSON.stringify(this.dark)},setStyle:function(){this.style.innerHTML=this.cssVars},setColor:function(e,t){this.currentColor=t,this.current[e]=t,this.setStyle(),this.sync()},cancel:function(){this.coloringDialog=!1}}},J=z,U=(a("7f89"),a("62ad")),G=a("03a4"),W=a("a523"),q=a("0fd9"),X=a("b73d"),Y=a("71a3"),K=a("c671"),Q=a("fe57"),Z=Object(h["a"])(J,s,i,!1,null,null,null),ee=Z.exports;m()(Z,{VBtn:S["a"],VCard:O["a"],VCardActions:T["a"],VCardText:T["b"],VCol:U["a"],VColorPicker:G["a"],VContainer:W["a"],VDialog:E["a"],VFlex:N["a"],VIcon:b["a"],VRow:q["a"],VSpacer:I["a"],VSwitch:X["a"],VTab:Y["a"],VTabItem:K["a"],VTabs:Q["a"],VToolbar:M["a"],VToolbarTitle:F["a"]});var te=a("60c0"),ae={name:"App",components:{VColoring:ee},mounted:function(){},data:function(){return{presets:te,clipped:!0,drawer:!0,fixed:!0,items:[{icon:"mdi-rocket-launch",title:"Basic",to:{name:"root"}},{icon:"mdi-chart-bubble",title:"Presets",to:{name:"presets"}},{icon:"mdi-pen-lock",title:"Disable Picker",to:{name:"disable-picker"}},{icon:"mdi-hammer-screwdriver",title:"Tools",to:{name:"tools"}}],miniVariant:!1,title:""}}},ne=ae,oe=(a("034f"),a("7496")),re=a("40dc"),se=a("5bc1"),ie=a("553a"),le=a("a722"),ce=a("8860"),pe=a("da13"),de=a("1800"),ue=a("5d23"),ve=a("f6c4"),he=a("f774"),fe=Object(h["a"])(ne,o,r,!1,null,null,null),me=fe.exports;m()(fe,{VApp:oe["a"],VAppBar:re["a"],VAppBarNavIcon:se["a"],VCol:U["a"],VContainer:W["a"],VFooter:ie["a"],VIcon:b["a"],VLayout:le["a"],VList:ce["a"],VListItem:pe["a"],VListItemAction:de["a"],VListItemContent:ue["a"],VListItemTitle:ue["b"],VMain:ve["a"],VNavigationDrawer:he["a"],VRow:q["a"],VSpacer:I["a"],VToolbarTitle:F["a"]});var be=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ge=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"pt-6"},[e._v(" For more information on "),a("ins",{staticClass:"px-1"},[e._v("vuetify-coloring")]),e._v(", check out the "),a("a",{attrs:{href:"https://github.com/sergey-demidov/vuetify-coloring",target:"_blank",rel:"noopener noreferrer"}},[e._v(" documentation ")]),e._v(". ")])}],ye={},Ce=Object(h["a"])(ye,be,ge,!1,null,null,null),xe=Ce.exports,ke=a("f309");n["a"].use(ke["a"]);var _e=new ke["a"]({theme:{options:{customProperties:!0},dark:!0,themes:{dark:{primary:"#001122",header:"#334455",panel:"#667788",background:"#99aabb"},light:{primary:"#001122",header:"#334455",panel:"#667788",background:"#99aabb"}}}}),Ve=a("8c4f"),we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"panel"}},[a("v-card-title",[e._v(" Welcome to the Vuetify Coloring package demo ")]),a("v-card-text",[a("p",[a("ins",{staticClass:"px-1"},[e._v("vuetify-coloring")]),e._v(" package gives users the ability to change the color of interface elements. This page demonstrates the basic functionality. Elements on this page have custom colors. Click the icon in the upper right corner and try changing the colors of this page in the Coloring dialog box. Below lists the configurations of this example. ")]),a("v-expansion-panels",[a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[e._v(" template ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[e._v("<VColoring :colors=\"['header', 'panel', 'background', 'primary']\" />")])])],1),a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[e._v(" script ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[e._v("export default {\n  components: {\n    VColoring\n  }\n};")])])],1),a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[e._v(" vuetify ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[e._v('new Vuetify({\n  theme: {\n    options: {\n      customProperties: true\n    },\n    dark: true,\n    themes: {\n      dark: {\n        primary: "#001122",\n        header: "#334455",\n        panel: "#667788",\n        background: "#99aabb"\n      },\n      light: {\n        primary: "#001122",\n        header: "#334455",\n        panel: "#667788",\n        background: "#99aabb"\n      }\n    }\n  }\n});')])])],1)],1),a("vc-docs")],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",to:"/presets"}},[e._v(" Continue ")])],1)],1)},Pe=[],Se={},Oe=Object(h["a"])(Se,we,Pe,!1,null,null,null),Te=Oe.exports;m()(Oe,{VBtn:S["a"],VCard:O["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VExpansionPanel:j["a"],VExpansionPanelContent:$["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:B["a"],VSpacer:I["a"]});var Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"panel"}},[a("v-card-title",[e._v(" Presets ")]),a("v-card-text",[a("p",[e._v(" Next feature of this app is the ability to define presets. Users can set the color of each element or choose a preset. Open the dialog again and select a preset. Configurations are listed below. ")]),a("v-expansion-panels",[a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[e._v(" template ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[e._v('<VColoring\n    :colors="colors"\n    :presets="presets"\n/>\n')])])],1),a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[e._v(" script ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[e._v("import Presets from \"./presets.json\";\n\nexport default {\n  components: {\n    VColoring\n  },\n  data: () => ({\n    colors: ['header', 'panel', 'background', 'primary']\n    presets: Presets,\n  })\n};")])])],1),a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[e._v(" presets.json ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[e._v('{\n  "sky": {\n    "dark": true,\n    "colors": [\n      "#1867C0",\n      "#1697F6",\n      "#79A9E2",\n      "#113469"\n    ]\n  },\n  "aqua": {\n    "dark": false,\n    "colors": [\n      "#78b8b4",\n      "#9fCAC6",\n      "#bbd7d5",\n      "#00887d"\n    ]\n  },\n  "blood": {\n    "dark": true,\n    "colors": [\n      "#5F0404",\n      "#990B0B",\n      "#dea2a2",\n      "#ff0000"\n    ]\n  },\n  "forest": {\n    "dark": true,\n    "colors": [\n      "#2E7C42",\n      "#329655",\n      "#A8A285",\n      "#725C09"\n    ]\n  },\n  "autumn": {\n    "dark": false,\n    "colors": [\n      "#F0C466",\n      "#ECE276",\n      "#B8D8AF",\n      "#729B61"\n    ]\n  }\n}')])])],1)],1),a("vc-docs")],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",to:"/disable-picker"}},[e._v(" Continue ")])],1)],1)},je=[],$e={},De=Object(h["a"])($e,Ee,je,!1,null,null,null),Be=De.exports;m()(De,{VBtn:S["a"],VCard:O["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VExpansionPanel:j["a"],VExpansionPanelContent:$["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:B["a"],VSpacer:I["a"]});var Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"panel"}},[a("v-card-title",[e._v(" Disable Picker ")]),a("v-card-text",[a("p",[e._v(" In some cases it is necessary to forbid users to set the color, but at the same time allow them to select a preset. Try it yourself. ")]),a("v-expansion-panels",[a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[e._v(" template ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[e._v('<VColoring\n    :colors="colors"\n    :presets="presets"\n    disable-picker\n/>')])])],1)],1),a("vc-docs")],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",to:"/tools"}},[e._v(" Continue ")])],1)],1)},Ae=[],Le={},Ie=Object(h["a"])(Le,Ne,Ae,!1,null,null,null),Me=Ie.exports;m()(Ie,{VBtn:S["a"],VCard:O["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VExpansionPanel:j["a"],VExpansionPanelContent:$["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:B["a"],VSpacer:I["a"]});var Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"panel"}},[a("v-card-title",[e._v(" Coloring tool for developer ")]),a("v-card-text",[a("p",[e._v(" In the development process, sometimes a situation arises when it is impossible to set the color of an element directly. In this case, it is necessary to define the css rule for the element itself, or its class, or the element that really colors it. Usually, tools like Chrome DevTools are used for this. It is not always fast and convenient, so another feature has been added to the application. A Ctrl-click on an unpainted element will show how it works. Notice the one second delay before the dialog box appears. This is necessary in order for you to have time to change or leave the element in the desired state (like hovered or focused). Try another elements of this page. ")]),a("v-expansion-panels",[a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[e._v(" template ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[e._v("<VColoring\n    :colors=\"['header', 'panel', 'background', 'primary']\"\n    tools\n/>")])])],1)],1),a("v-simple-table",{staticClass:"mt-4"},[a("thead",{staticClass:"header"},[a("tr",[a("th",{staticClass:"text-left"},[e._v(" next element is unpainted ")])])]),a("tbody",{staticClass:"clickable"},[a("tr",{on:{mouseover:function(t){e.hovered=!0},mouseout:function(t){e.hovered=!1},click:function(t){e.clicked=!(e.toolOpened&&!e.clicked)}}},[a("td",{ref:"uncolored",domProps:{textContent:e._s(e.label)}})])])]),a("vc-docs")],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",href:"https://github.com/sergey-demidov/vuetify-coloring"}},[e._v(" finish ")])],1)],1)},Re=[],He={data:function(){return{clicked:!1,toolOpened:!1,hovered:!1,uncolored:"Ctrl-Click me and take the mouse somewhere else"}},mounted:function(){this.$root.$on("coloringToolOpened",this.setToolState)},destroyed:function(){this.$root.$off("coloringToolOpened")},methods:{setToolState:function(e){this.toolOpened=e,e||(this.clicked=!1)}},computed:{label:function(){return this.toolOpened&&this.clicked?"This element reflects changes in the tool dialog":this.hovered?"or Ctrl-Click me and leave mouse over to set :hover state":"Ctrl-Click me and take the mouse somewhere else"}}},ze=He,Je=Object(h["a"])(ze,Fe,Re,!1,null,null,null),Ue=Je.exports;m()(Je,{VBtn:S["a"],VCard:O["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VExpansionPanel:j["a"],VExpansionPanelContent:$["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:B["a"],VSimpleTable:A["a"],VSpacer:I["a"]}),n["a"].use(Ve["a"]);var Ge=new Ve["a"]({routes:[{path:"/",name:"root",component:Te},{path:"/presets",name:"presets",component:Be},{path:"/disable-picker",name:"disable-picker",component:Me},{path:"/tools",name:"tools",component:Ue}]});n["a"].component("vc-docs",xe),n["a"].config.productionTip=!1,new n["a"]({vuetify:_e,router:Ge,render:function(e){return e(me)}}).$mount("#app")},5879:function(e,t,a){"use strict";var n=a("d20e"),o=a.n(n);o.a},"60c0":function(e){e.exports=JSON.parse('{"sky":{"dark":true,"colors":["#1867C0","#1697F6","#79A9E2","#113469"]},"aqua":{"dark":false,"colors":["#78b8b4","#9fCAC6","#bbd7d5","#00887d"]},"blood":{"dark":true,"colors":["#5F0404","#990B0B","#dea2a2","#ff0000"]},"forest":{"dark":true,"colors":["#2E7C42","#329655","#A8A285","#725C09"]},"autumn":{"dark":false,"colors":["#F0C466","#ECE276","#B8D8AF","#729B61"]}}')},"7f89":function(e,t,a){"use strict";var n=a("ac13"),o=a.n(n);o.a},"85ec":function(e,t,a){},ac13:function(e,t,a){},d20e:function(e,t,a){},f562:function(e,t,a){"use strict";var n=a("fe07"),o=a.n(n);o.a},fe07:function(e,t,a){}});
//# sourceMappingURL=app.7ff6aece.js.map