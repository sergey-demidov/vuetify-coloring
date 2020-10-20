#vuetify-coloring

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

> Gives SPA users ability to change colors of Vuetify interface elements

### Features
- Works directly with css variables
- Stores user settings in browser `localStorage`
- Integrated lightweight developer tool

[Live demo](https://sergey-demidov.github.io/vuetify-coloring)

## Setup
- Install package
```shell script
npm install vuetify-coloring # or yarn add vuetify-coloring
```
- Enable Vuetify [customProperties](https://vuetifyjs.com/en/features/theme/#custom-properties) feature
``` javascript 
new Vuetify({
  theme: {
    options: { customProperties: true },
  },
})
```
- Define custom colors for groups of elements
```javascript
new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: true,
    themes: {
      dark: {
        primary: "#001122",
        header: "#334455",
        panel: "#667788",
        background: "#99aabb"
      },
      light: {
        primary: "#001122",
        header: "#334455",
        panel: "#667788",
        background: "#99aabb"
      }
    }
  }
});
```
## Usage 
- Import `VColoring` component to your app
```javascript
import VColoring from "vuetify-coloring";

export default {
  components: {
    VColoring
  },
  data: () => ({
    colors: [ 'primary', 'header', 'panel', 'background']
  })
};
```
- Add `VColoring` to your template
```html
<VColoring :colors="colors" />
```

#### Presets
```javascript
import Presets from "./presets.json";

export default {
  components: {
    VColoring
  },
  data: () => ({
    colors: [ 'primary', 'header', 'panel', 'background'],
    presets: Presets
  })
};
```
```html
<VColoring
    :colors="colors"
    :presets="presets"
/>
```
> Example `presets.json` file located in `node_modules/vuetify-coloring/src/lib`

#### Tools
To enable developer tool feature add `tools` prop to template
```html
<VColoring
    :colors="colors"
    :presets="presets"
    tools
/>
```

## Props list
| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
|colors|Array | []      | List of custom colors |
|presets|Object| {}     | Presets |
|tools |Boolean| false  | Enables tool feature |
|disable-picker|Boolean | false | Disables color picker |



Copyright (c) Sergey Demidov <sergey.k.demidov@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/vuetify-coloring/latest.svg
[npm-version-href]: https://npmjs.com/package/vuetify-coloring

[npm-downloads-src]: https://img.shields.io/npm/dt/vuetify-coloring.svg
[npm-downloads-href]: https://npmjs.com/package/vuetify-coloring
