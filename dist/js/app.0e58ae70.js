(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],d=0,u=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vuetify-coloring/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:"",fixed:t.fixed,app:"",color:"panel"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,(function(e,n){return a("v-list-item",{key:n,attrs:{to:e.to,router:"",exact:""}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),a("v-app-bar",{attrs:{"clipped-left":"",fixed:t.fixed,app:"",color:"header"}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[a("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[a("v-icon",[t._v("mdi-minus")])],1),a("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),a("v-spacer"),"root"===t.$route.name?[t._v(" Click here "),a("v-icon",{staticClass:"ml-3 header animate-arrow"},[t._v(" mdi-arrow-right-bold-outline ")]),a("VColoring",{attrs:{colors:["header","panel","background","primary"]}})]:t._e(),"presets"===t.$route.name?[t._v(" Click here "),a("v-icon",{staticClass:"ml-3 header animate-arrow"},[t._v(" mdi-arrow-right-bold-outline ")]),a("VColoring",{attrs:{colors:["header","panel","background","primary"],presets:t.presets}})]:t._e(),"disable-picker"===t.$route.name?[t._v(" Click here "),a("v-icon",{staticClass:"ml-3 header animate-arrow"},[t._v(" mdi-arrow-right-bold-outline ")]),a("VColoring",{attrs:{colors:["header","panel","background","primary"],presets:t.presets,"disable-picker":""}})]:t._e(),"tools"===t.$route.name?[a("VColoring",{attrs:{presets:t.presets,tools:!0}})]:t._e()],2),a("v-main",[a("v-container",{staticStyle:{width:"765px"}},[a("v-layout",{attrs:{column:"","justify-center":"","align-center":"",wrap:"","align-content-center":""}},[a("router-view")],1)],1)],1),a("v-footer",{attrs:{absolute:"",app:"",color:"header"}},[a("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{attrs:{persistent:"","overlay-color":"#0000","max-width":"550","content-class":"vc-panel"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"vc-rainbow ma-3",staticStyle:{"border-radius":"50%",padding:"2px",color:"#000a","z-index":"100"},attrs:{size:"icon"}},"v-icon",r,!1),n),[t._v(" mdi-brush ")])]}}]),model:{value:t.coloringDialog,callback:function(e){t.coloringDialog=e},expression:"coloringDialog"}},[a("div",{staticClass:"vc-panel",attrs:{id:"VuetifyColoring"}},[a("v-card",[a("v-toolbar",{staticClass:"vc-header"},[a("v-toolbar-title",[t._v(" Coloring ")]),a("v-spacer"),a("v-toolbar-title",[a("v-dialog-position")],1)],1),a("v-card",{staticClass:"vc-panel",attrs:{cla:""}},[a("v-card-text",{staticClass:"pb-0 pt-2 vc-panel"},[a("v-tabs",{staticClass:"vc-panel",staticStyle:{display:"flex"},attrs:{vertical:""}},[t._l(t.colors,(function(e){return a("v-tab",{key:"c_tab_"+e,staticClass:"my-0 py-0 pl-3 vc-panel",staticStyle:{"text-align":"left","justify-content":"flex-start"},style:{"text-decoration":t.isUndef(e)?"line-through":"none"},attrs:{"active-class":"vc-panel-active","exact-active-class":"vc-panel-active"},on:{click:function(a){t.currentColor=t.current[e]}},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-icon",{staticClass:"mr-2 ml-0",staticStyle:{"border-radius":"50%",padding:"5px"},style:{"background-color":t.current[e]},attrs:{color:"#00000099",dense:""}},[t._v(" mdi-brush ")]),t._v(" "+t._s(e)+" ")],1)})),t._l(t.colors,(function(e){return a("v-tab-item",{key:"c_tab_item_"+e,staticClass:"vc-panel",staticStyle:{"text-align":"center"},attrs:{transition:"top","reverse-transition":"bottom"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t.isUndef(e)?a("v-container",{staticClass:"py-0",attrs:{"fill-height":"",fluid:""}},[a("v-row",{style:{height:t.canvasHeight+62+"px"},attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"vc-panel"},[t._v(" Color "),a("strong",[t._v(" "+t._s(t.themeName+"."+e)+" ")]),t._v(" is not defined "),a("br"),t._v(" You must specify it in vuetify "),a("br"),a("a",{attrs:{href:"https://vuetifyjs.com/en/features/theme/#customizing",target:"_blank"}},[t._v(" theme configuration ")])])],1)],1):a("v-color-picker",{staticClass:"vc-panel",attrs:{value:t.current[e],disabled:t.isUndef(e)||t.disablePicker,"hide-mode-switch":"","hide-inputs":"","dot-size":"7",width:"350","canvas-height":t.canvasHeight},on:{input:function(a){return t.setColor(e,a)}}})],1)})),a("v-card-actions",{},[a("v-switch",{staticClass:"mt-0 vc-panel",attrs:{dense:"",disabled:t.disablePicker,"hide-details":""},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}}),a("v-flex",{staticClass:"ml-n1 mt-1",staticStyle:{color:"#777777","font-weight":"500"},domProps:{textContent:t._s(t.themeName.toUpperCase())}}),a("v-spacer")],1)],2)],1),a("v-card-actions",{staticClass:"my-0 pt-1 pb-2"},[a("v-spacer"),t._l(t.buttons,(function(e){return a("v-btn",{key:"btn_"+e,staticStyle:{color:"#777777"},attrs:{small:"",rounded:"",color:t.matchScheme(e)?"#cccccc":"#eeeeee"},on:{click:function(a){return t.setColors(e)}}},[t._v(" "+t._s(e)+" ")])})),a("v-spacer")],2),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"vc-panel",attrs:{text:""},on:{click:function(e){return t.cancel()}}},[t._v(" "+t._s("Return")+" ")]),a("v-spacer")],1)],1)],1)],1)]),t.tools?a("v-coloring-tool",{attrs:{presets:t.presets}}):t._e()],1)},i=[],l=(a("99af"),a("caad"),a("a15b"),a("fb6a"),a("d3b7"),a("ac1f"),a("25f0"),a("2532"),a("466d"),a("b85c")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"root"},[a("v-icon",{staticClass:"ma-2",class:[t.contentClass],attrs:{dense:""},on:{click:function(e){return t.setDialogPosition("left")}}},[t._v(" mdi-arrow-left-bold-outline ")]),a("v-icon",{staticClass:"ma-2",class:[t.contentClass],attrs:{dense:""},on:{click:function(e){return t.setDialogPosition("center")}}},[t._v(" mdi-crop-square ")]),a("v-icon",{staticClass:"ma-2",class:[t.contentClass],attrs:{dense:""},on:{click:function(e){return t.setDialogPosition("right")}}},[t._v(" mdi-arrow-right-bold-outline ")])],1)},p=[],d=(a("dca8"),Object.freeze({left:"left",right:"right",center:"center"})),u={name:"VDialogPosition",props:{"content-class":{type:String,default:"vdp-header"}},created:function(){window.addEventListener("resize",this.setDialogPosition)},destroyed:function(){window.removeEventListener("resize",this.setDialogPosition)},data:function(){return{position:d.center}},methods:{setDialogPosition:function(t){var e=this.getParentByClass(this.$refs["root"],"v-dialog");if(e){var a,n=e.clientWidth,r=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,o=parseInt(getComputedStyle(e)["margin-right"],10)||24;t===d.left?a="-".concat(r-n-4*o,"px"):t===d.right?a="".concat(r-n-2*o,"px"):(a="".concat(o,"px"),t=d.center),this.position=t,e.style["margin-left"]=a}else console.error("v-dialog-position works only inside v-dialog tag")},getParentByClass:function(t,e){while(t){if(t.classList.contains(e))return t;t=t.parentNode}return null}}},v=u,h=(a("5879"),a("2877")),f=a("6544"),m=a.n(f),b=a("132d"),g=Object(h["a"])(v,c,p,!1,null,null,null),y=g.exports;m()(g,{VIcon:b["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{staticStyle:{"background-color":"#eeeeee"},attrs:{id:"dialog1",persistent:"","hide-overlay":"","max-width":"600px"},model:{value:t.toolDialog,callback:function(e){t.toolDialog=e},expression:"toolDialog"}},[a("div",{staticClass:"vc-panel",attrs:{id:"VuetifyColoringTool"}},[a("v-toolbar",{staticClass:"vc-header",attrs:{dense:""}},[a("v-toolbar-title",[t._v(" Coloring")]),a("v-spacer"),a("v-toolbar-title",[a("v-dialog-position")],1)],1),a("v-card",{staticClass:"vc-panel"},[a("v-card-actions",{staticClass:"pt-4 pb-0 vc-panel"},[a("v-spacer"),t._l(t.colors,(function(e){return a("v-btn",{key:"preset_"+e,staticStyle:{color:"#777777"},attrs:{small:"",rounded:"",color:t.currentRule===e?"#cccccc":"#eeeeee"},on:{click:function(a){t.currentRule=e}}},[t._v(" "+t._s(e)+" ")])})),a("v-spacer")],2),a("v-card-text",[a("v-expansion-panels",{model:{value:t.colored_tab,callback:function(e){t.colored_tab=e},expression:"colored_tab"}},t._l(t.colored,(function(e,n){return a("v-expansion-panel",{key:"colored_"+n},[a("v-expansion-panel-header",{staticClass:"vc-header py-0"},[a("v-flex",[a("v-icon",{staticStyle:{"border-radius":"50%",padding:"2px",color:"#777777"},style:{background:e.background}},[t._v(" mdi-brush ")]),t._v(" "+t._s(e.header)+" ")],1)],1),a("v-expansion-panel-content",{staticClass:"vc-panel py-0"},[a("v-simple-table",{staticClass:"vc-panel",scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[e.classPath?a("tr",{staticClass:"clickable",on:{click:function(a){t.selector=e.classPath}}},[a("td",{staticClass:"px-1",staticStyle:{width:"42px"}},[t._v("class")]),a("td",{staticClass:"px-0"},[a("pre",{staticStyle:{"max-width":"470px",overflow:"hidden"}},[t._v(t._s(e.classPath))])]),a("td",{staticClass:"px-1"})]):t._e(),t._l(e.css,(function(e,n){return a("tr",{key:"css_"+n,staticClass:"clickable",on:{click:function(a){t.selector=e.selectorText}}},[a("td",{staticClass:"px-1",staticStyle:{width:"42px"}},[t._v("css")]),a("td",{staticClass:"px-0"},[a("pre",{staticStyle:{"max-width":"470px",overflow:"hidden"}},[t._v(t._s(t.folding(e.cssText)))])]),a("td",{staticClass:"px-1"},[e.style.getPropertyPriority("background-color")?a("v-icon",{staticStyle:{"border-radius":"50%",color:"#f00","background-color":"#ccc"},attrs:{small:"",dense:""}},[t._v(" mdi-exclamation ")]):t._e()],1)])}))],2)]},proxy:!0}],null,!0)})],1)],1)})),1),a("v-flex",{staticClass:"pt-4",staticStyle:{position:"relative"}},[a("v-flex",{staticStyle:{position:"absolute",top:"2px",left:"10px","background-color":"#eeeeee",padding:"4px"},domProps:{textContent:t._s(t.textareaLabel)}}),a("v-btn",{staticClass:"mx-0 my-4",staticStyle:{position:"absolute",right:"0",top:"0"},attrs:{icon:"",title:"Important"},on:{click:function(e){t.important=t.important?"":" !important"}}},[a("v-icon",{staticStyle:{"background-color":"#aaaaaa","border-radius":"50%"},style:{color:t.important?"red":"#777777"},on:{mouseenter:function(e){return t.setLabel("important")},mouseleave:function(e){return t.setLabel()}}},[t._v(" mdi-exclamation ")])],1),a("v-flex",{staticClass:"vc-prewrap clickable",staticStyle:{overflow:"hidden"},domProps:{innerHTML:t._s(t.strGenerator)},on:{click:function(e){return t.copy(t.cssGenerator)},mouseenter:function(e){return t.setLabel("css")},mouseleave:function(e){return t.setLabel()}}})],1)],1),a("v-card-actions",{staticClass:"pt-0 pb-3"},[a("v-spacer"),a("v-btn",{staticClass:"pt-0 vc-panel",attrs:{text:""},on:{click:function(e){return t.cancel()}}},[t._v(" return ")]),a("v-spacer")],1)],1)],1)]),a("v-snackbar",{staticStyle:{color:"#777777"},attrs:{color:"#777777",timeout:"2000"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("v-flex",{staticClass:"text-center"},[t._v(" "+t._s(t.snackbarMessage)+" ")])],1)],1)},k=[],x=(a("d81d"),a("1276"),a("eee7"),a("2ef0")),_=a.n(x),V=a("bf68"),w={name:"VColoringTools",components:{VDialogPosition:y},props:{colors:{type:Array,default:function(){return["header","panel","background","primary"]}}},data:function(){return{width:550,error:!1,errorMessage:"",coloringDialog:!1,tab:null,currentColor:"",currentRule:"",current:{},dark:!1,dark2:!1,colorDebugXXX:!0,colored:[],toolDialog:!1,colored_tab:null,selector:"",testCssRule:"",important:"",textareaLabel:"",snackbar:!1,snackbarMessage:"",dialogPosition:"",style:{},strGenerator:""}},computed:{cssGenerator:function(){return this.selector&&this.currentRule?"".concat(this.selector," {\n    background-color: var(--v-").concat(this.currentRule,"-base)").concat(this.important,";\n}"):" "}},watch:{cssGenerator:function(t,e){var a,n="",r=V.diffWords(e,t),o=Object(l["a"])(r);try{for(o.s();!(a=o.n()).done;){var s=a.value;n+=s.added?'<span class="blink">'.concat(s.value,"</span>"):s.removed?"":s.value}}catch(i){o.e(i)}finally{o.f()}this.strGenerator=n.replaceAll("\n","<br />"),this.setStyle(t)}},created:function(){this.style=document.createElement("style"),document.getElementsByTagName("head")[0].appendChild(this.style),this.setLabel()},mounted:function(){document.addEventListener("mouseup",this.getColored)},destroyed:function(){document.removeEventListener("mouseup",this.getColored)},methods:{folding:function(t){return t.replaceAll(/([{;])/g,"$1\n").split("\n").map((function(t,e,a){return e>0&&e<a.length-1?"  "+t:t.trimLeft()})).join("\n")},setLabel:function(t){this.textareaLabel="css"===t?"Copy":"important"===t?"Important":"Possible selector"},setStyle:function(t){this.style.innerHTML=t},copy:function(t){var e=this;navigator.clipboard.writeText(t).then((function(){e.snackbarMessage="Copied",e.snackbar=!0}),(function(){e.snackbarMessage="Error",e.snackbar=!0}))},cancel:function(){this.toolDialog=!1,this.currentRule="",this.testCssRule="",this.selector="",this.colored_tab=null,this.colored=[],this.important=!1,this.setStyle("")},getColored:function(t){if(!this.toolDialog&&t.ctrlKey){var e=t.target,a=[];a.push({background:getComputedStyle(e).getPropertyValue("background-color"),classPath:this.getClass(e),css:this.css(e,"background-color"),header:"clicked element"});while(e){var n=getComputedStyle(e).getPropertyValue("background-color");if(n.length>0&&"rgba(0, 0, 0, 0)"!==n)return a.push({background:n,classPath:this.getClass(e),css:this.css(e,"background-color"),header:"colored by"}),this.colored=_.a.reverse(a),this.currentRule=this.colors[0],this.toolDialog=!0,this.colored_tab=1,a;e=e.parentNode}}},getClass:function(t){var e,a=document.body.getElementsByTagName("*"),n={},r=Object(l["a"])(a);try{for(r.s();!(e=r.n()).done;){var o=e.value;if(o.className){var s,i=o.className.split(" "),c=Object(l["a"])(i);try{for(c.s();!(s=c.n()).done;){var p=s.value;n[p]=n[p]?n[p]+1:1}}catch(u){c.e(u)}finally{c.f()}}}}catch(u){r.e(u)}finally{r.f()}if(t.className&&t.className.length>0){var d=t.className.split(" ");return d=d.sort((function(t,e){return n[t]===n[e]?0:n[t]>n[e]?-1:1})),d=_.a.pull(d,"theme--dark","theme--light"),"."+_.a.uniq(d).join(".")}return""},css:function(t,e){var a=document.createElement(t.tagName);a.style.display="none",document.body.appendChild(a);var n=document.styleSheets,r=[];for(var o in t.matches=t.matches||t.webkitMatchesSelector,n)if(Object.prototype.hasOwnProperty.call(n,o)){var s=void 0;try{s=n[o].rules||n[o].cssRules}catch(l){console.error(l,n[o].href);continue}for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&t.matches(s[i].selectorText)&&s[i].style.getPropertyValue(e)&&(a.style[e]=s[i].style.getPropertyValue(e),getComputedStyle(t).getPropertyValue(e)===getComputedStyle(a).getPropertyValue(e)&&r.push(s[i]))}return document.body.removeChild(a),r}}},P=w,S=(a("f562"),a("8336")),O=a("b0af"),E=a("99d9"),j=a("169a"),T=a("cd55"),D=a("49e2"),A=a("c865"),N=a("0393"),B=a("0e8f"),L=a("1f4f"),$=a("2db4"),F=a("2fa4"),I=a("71d9"),M=a("2a7f"),R=Object(h["a"])(P,C,k,!1,null,null,null),H=R.exports;m()(R,{VBtn:S["a"],VCard:O["a"],VCardActions:E["a"],VCardText:E["b"],VDialog:j["a"],VExpansionPanel:T["a"],VExpansionPanelContent:D["a"],VExpansionPanelHeader:A["a"],VExpansionPanels:N["a"],VFlex:B["a"],VIcon:b["a"],VSimpleTable:L["a"],VSnackbar:$["a"],VSpacer:F["a"],VToolbar:I["a"],VToolbarTitle:M["a"]});var J={name:"VColoring",components:{VDialogPosition:y,VColoringTool:H},props:{tools:{type:Boolean,default:!1},colors:{type:Array,default:function(){return["header","panel","background","primary"]}},presets:{type:Object,default:function(){return{}}},disablePicker:{type:Boolean,default:!1}},data:function(){return{coloringDialog:!1,tab:null,currentColor:"",current:{},dark:!0,dialogPosition:""}},computed:{disablePickerStyle:function(){var t=".v-color-picker__controls ";return this.disablePicker?t+"{ display: none; }":""},canvasHeight:function(){var t=50*this.colors.length;return t<150?150:t},themeName:function(){return this.dark?"dark":"light"},cssVars:function(){var t=[];for(var e in this.colors)t.push("--v-".concat(this.colors[e],"-base: ").concat(this.current[this.colors[e]],";"));return":root { "+t.join("")+" }"+this.disablePickerStyle},buttons:function(){var t=[],e=this.presets;for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&"current"!==a&&t.push(a);return t}},created:function(){var t={},e=Object.prototype.hasOwnProperty;try{"undefined"!==typeof localStorage.dark?(this.dark=JSON.parse(localStorage.dark),this.$vuetify.theme.dark=this.dark):this.dark=this.$vuetify.theme.dark;var a=this.$vuetify.theme.themes[this.themeName];if("undefined"!==typeof localStorage.colors){t=JSON.parse(localStorage.colors);var n,r=Object(l["a"])(this.colors);try{for(r.s();!(n=r.n()).done;){var o=n.value;this.colors.includes(o)&&e.call(t,o)&&t[o].toString().match(/^#[abcdef\d]{6}$/i)&&(this.current[o]=t[o].toString())}}catch(p){r.e(p)}finally{r.f()}}var s,i=Object(l["a"])(this.colors);try{for(i.s();!(s=i.n()).done;){var c=s.value;e.call(a,c)&&"undefined"===typeof this.current[c]&&(this.current[c]=a[c]),this.current=JSON.parse(JSON.stringify(this.current))}}catch(p){i.e(p)}finally{i.f()}}catch(d){console.warn(d.message)}this.style=document.createElement("style"),document.getElementsByTagName("head")[0].appendChild(this.style),this.setStyle()},mounted:function(){},watch:{coloringDialog:function(){this.setStyle()},dark:function(t){this.dark=t,this.$vuetify.theme.dark=t,this.sync()}},methods:{setColors:function(t){var e=this.presets[t];if(this.dark=e.dark,Array.isArray(e.colors)){var a=e.colors.slice();for(var n in this.colors)Object.prototype.hasOwnProperty.call(this.current,this.colors[n])&&(this.current[this.colors[n]]=a[n])}this.setStyle(),this.sync()},matchScheme:function(t){if(this.presets[t].dark!==this.dark)return!1;for(var e in this.colors)if(Object.prototype.hasOwnProperty.call(this.current,this.colors[e])&&this.current[this.colors[e]].toString().toUpperCase()!==this.presets[t].colors[e].toString().toUpperCase())return!1;return!0},isUndef:function(t){var e=this.$vuetify.theme.themes[this.themeName];return!Object.prototype.hasOwnProperty.call(e,t)},sync:function(){localStorage.colors=JSON.stringify(this.current),localStorage.dark=JSON.stringify(this.dark)},setStyle:function(){this.style.innerHTML=this.cssVars},setColor:function(t,e){this.currentColor=e,this.current[t]=e,this.setStyle(),this.sync()},cancel:function(){this.coloringDialog=!1}}},z=J,U=(a("7f89"),a("62ad")),G=a("03a4"),W=a("a523"),q=a("0fd9"),X=a("b73d"),Y=a("71a3"),K=a("c671"),Q=a("fe57"),Z=Object(h["a"])(z,s,i,!1,null,null,null),tt=Z.exports;m()(Z,{VBtn:S["a"],VCard:O["a"],VCardActions:E["a"],VCardText:E["b"],VCol:U["a"],VColorPicker:G["a"],VContainer:W["a"],VDialog:j["a"],VFlex:B["a"],VIcon:b["a"],VRow:q["a"],VSpacer:F["a"],VSwitch:X["a"],VTab:Y["a"],VTabItem:K["a"],VTabs:Q["a"],VToolbar:I["a"],VToolbarTitle:M["a"]});var et=a("60c0"),at={name:"App",components:{VColoring:tt},mounted:function(){},data:function(){return{presets:et,clipped:!0,drawer:!0,fixed:!0,items:[{icon:"mdi-rocket-launch",title:"Basic",to:{name:"root"}},{icon:"mdi-chart-bubble",title:"Presets",to:{name:"presets"}},{icon:"mdi-pen-lock",title:"Disable Picker",to:{name:"disable-picker"}},{icon:"mdi-hammer-screwdriver",title:"Tools",to:{name:"tools"}}],desserts:[{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},nt=at,rt=(a("034f"),a("7496")),ot=a("40dc"),st=a("5bc1"),it=a("553a"),lt=a("a722"),ct=a("8860"),pt=a("da13"),dt=a("1800"),ut=a("5d23"),vt=a("f6c4"),ht=a("f774"),ft=Object(h["a"])(nt,r,o,!1,null,null,null),mt=ft.exports;m()(ft,{VApp:rt["a"],VAppBar:ot["a"],VAppBarNavIcon:st["a"],VBtn:S["a"],VContainer:W["a"],VFooter:it["a"],VIcon:b["a"],VLayout:lt["a"],VList:ct["a"],VListItem:pt["a"],VListItemAction:dt["a"],VListItemContent:ut["a"],VListItemTitle:ut["b"],VMain:vt["a"],VNavigationDrawer:ht["a"],VSpacer:F["a"],VToolbarTitle:M["a"]});var bt=a("f309");n["a"].use(bt["a"]);var gt=new bt["a"]({theme:{options:{customProperties:!0},dark:!0,themes:{dark:{primary:"#001122",header:"#334455",panel:"#667788",background:"#99aabb"},light:{primary:"#001122",header:"#334455",panel:"#667788",background:"#99aabb"}}}}),yt=a("8c4f"),Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mt-4",attrs:{color:"panel"}},[a("v-card-title",[t._v(" Welcome to the Vuetify Coloring package demo ")]),a("v-card-text",{attrs:{xs12:"",sm8:"",md6:""}},[a("p",[a("ins",{staticClass:"px-1"},[t._v("vuetify-coloring")]),t._v(" package gives users the ability to change the color of interface elements. This page demonstrates the basic functionality. Click the icon in the upper right corner and try changing the colors of this page in the Coloring dialog box. Below lists the configurations of this example. ")]),a("v-expansion-panels",[a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[t._v(" template ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[t._v('<VColoring :colors="colors" />')])])],1),a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[t._v(" script ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[t._v("export default {\n  components: {\n    VColoring\n  },\n  data: () => ({\n    colors: ['header', 'panel', 'background', 'primary']\n  })\n};")])])],1),a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[t._v(" vuetify ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[t._v('new Vuetify({\n  theme: {\n    options: {\n      customProperties: true\n    },\n    dark: true,\n    themes: {\n      dark: {\n        primary: "#001122",\n        header: "#334455",\n        panel: "#667788",\n        background: "#99aabb"\n      },\n      light: {\n        primary: "#001122",\n        header: "#334455",\n        panel: "#667788",\n        background: "#99aabb"\n      }\n    }\n  }\n});')])])],1)],1),a("p",{staticClass:"pt-6"},[t._v(" For more information on Vuetify, check out the "),a("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v(" vuetify documentation ")]),t._v(". ")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",to:"/presets"}},[t._v(" Continue ")])],1)],1)},kt=[],xt={},_t=Object(h["a"])(xt,Ct,kt,!1,null,null,null),Vt=_t.exports;m()(_t,{VBtn:S["a"],VCard:O["a"],VCardActions:E["a"],VCardText:E["b"],VCardTitle:E["c"],VExpansionPanel:T["a"],VExpansionPanelContent:D["a"],VExpansionPanelHeader:A["a"],VExpansionPanels:N["a"],VSpacer:F["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mt-4",attrs:{color:"panel"}},[a("v-card-title",[t._v(" Presets ")]),a("v-card-text",{attrs:{xs12:"",sm8:"",md6:""}},[a("p",[t._v(" Next feature of this app is the ability to define presets. Users can set the color of each element or choose a preset. Open the dialog again and select a preset. Configurations are listed below. ")]),a("v-expansion-panels",[a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[t._v(" template ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[t._v("<VColoring\n    :colors=\"['header', 'panel', 'background', 'primary']\"\n    :presets=\"presets\"\n/>\n")])])],1),a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[t._v(" script ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[t._v("import Presets from \"./presets.json\";\n\nexport default {\n  components: {\n    VColoring\n  },\n  data: () => ({\n    colors: ['header', 'panel', 'background', 'primary'],\n    presets: Presets\n  })\n};")])])],1),a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[t._v(" presets.json ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[t._v('{\n  "sky": {\n    "dark": true,\n    "colors": [\n      "#1867C0",\n      "#1697F6",\n      "#79A9E2",\n      "#113469"\n    ]\n  },\n  "aqua": {\n    "dark": false,\n    "colors": [\n      "#78b8b4",\n      "#9fCAC6",\n      "#bbd7d5",\n      "#00887d"\n    ]\n  },\n  "blood": {\n    "dark": true,\n    "colors": [\n      "#5F0404",\n      "#990B0B",\n      "#dea2a2",\n      "#ff0000"\n    ]\n  },\n  "forest": {\n    "dark": true,\n    "colors": [\n      "#2E7C42",\n      "#329655",\n      "#A8A285",\n      "#725C09"\n    ]\n  },\n  "autumn": {\n    "dark": false,\n    "colors": [\n      "#F0C466",\n      "#ECE276",\n      "#B8D8AF",\n      "#729B61"\n    ]\n  }\n}')])])],1)],1),a("p",{staticClass:"pt-6"},[t._v(" For more information on Vuetify, check out the "),a("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v(" vuetify documentation ")]),t._v(". ")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",to:"/disable-picker"}},[t._v(" Continue ")])],1)],1)},Pt=[],St={},Ot=Object(h["a"])(St,wt,Pt,!1,null,null,null),Et=Ot.exports;m()(Ot,{VBtn:S["a"],VCard:O["a"],VCardActions:E["a"],VCardText:E["b"],VCardTitle:E["c"],VExpansionPanel:T["a"],VExpansionPanelContent:D["a"],VExpansionPanelHeader:A["a"],VExpansionPanels:N["a"],VSpacer:F["a"]});var jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mt-4",attrs:{color:"panel"}},[a("v-card-title",[t._v(" Disable Picker ")]),a("v-card-text",{attrs:{xs12:"",sm8:"",md6:""}},[a("p",[t._v(" In some cases it is necessary to forbid users to set the color, but at the same time allow them to select a preset. Try it yourself. ")]),a("v-expansion-panels",[a("v-expansion-panel",{staticClass:"panel"},[a("v-expansion-panel-header",{attrs:{color:"header"}},[t._v(" template ")]),a("v-expansion-panel-content",[a("pre",{staticClass:"mt-4 pl-4 panel"},[t._v("<VColoring\n    :colors=\"['header', 'panel', 'background', 'primary']\"\n    :presets=\"presets\"\n    disable-picker\n/>")])])],1)],1),a("p",{staticClass:"pt-6"},[t._v(" For more information on Vuetify, check out the "),a("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v(" vuetify documentation ")]),t._v(". ")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",to:"/presets"}},[t._v(" Continue ")])],1)],1)},Tt=[],Dt={},At=Object(h["a"])(Dt,jt,Tt,!1,null,null,null),Nt=At.exports;m()(At,{VBtn:S["a"],VCard:O["a"],VCardActions:E["a"],VCardText:E["b"],VCardTitle:E["c"],VExpansionPanel:T["a"],VExpansionPanelContent:D["a"],VExpansionPanelHeader:A["a"],VExpansionPanels:N["a"],VSpacer:F["a"]}),n["a"].use(yt["a"]);var Bt=new yt["a"]({routes:[{path:"/",name:"root",component:Vt},{path:"/presets",name:"presets",component:Et},{path:"/disable-picker",name:"disable-picker",component:Nt},{path:"/tools",name:"tools"}]});n["a"].config.productionTip=!1,new n["a"]({vuetify:gt,router:Bt,render:function(t){return t(mt)}}).$mount("#app")},5879:function(t,e,a){"use strict";var n=a("d20e"),r=a.n(n);r.a},"60c0":function(t){t.exports=JSON.parse('{"sky":{"dark":true,"colors":["#1867C0","#1697F6","#79A9E2","#113469"]},"aqua":{"dark":false,"colors":["#78b8b4","#9fCAC6","#bbd7d5","#00887d"]},"blood":{"dark":true,"colors":["#5F0404","#990B0B","#dea2a2","#ff0000"]},"forest":{"dark":true,"colors":["#2E7C42","#329655","#A8A285","#725C09"]},"autumn":{"dark":false,"colors":["#F0C466","#ECE276","#B8D8AF","#729B61"]}}')},"7f89":function(t,e,a){"use strict";var n=a("ac13"),r=a.n(n);r.a},"85ec":function(t,e,a){},ac13:function(t,e,a){},d20e:function(t,e,a){},f562:function(t,e,a){"use strict";var n=a("fe07"),r=a.n(n);r.a},fe07:function(t,e,a){}});
//# sourceMappingURL=app.0e58ae70.js.map