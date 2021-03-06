# vue-litebox
A lightweight, zero dependency lightbox implementation for vuejs.

![vue-litebox](https://github.com/mattbrailsford/vue-litebox/raw/master/assets/screenshot.png)

Out of the box `vue-litebox` is pretty ugly looking, but this is because it ships with the absolute minimum CSS in order to provide the lightbox functionality. The making it look pretty is left to the implementor as I find that one size doesn't always fit all.

Supports images as well as youtube and vimeo videos.

## Instalation
Install via `npm` 

````bash
npm install vue-litebox --save
````

or include via a script tag for browser based projects

````html
<script src="https://unpkg.com/vue-litebox"></script>
````

## Usage
**NB** If included via a script tag, the component will be regisered globally so the following `import` and `components` declarations in the example below won't be necesary.

````javascript
import VueLitebox from 'vue-litebox'

var app = new Vue({
  el: '#app',
  components: { VueLitebox },
  data: {
      images: [
          '/images/01.png',
          '/images/02.png',
          {
              title: 'My image title',
              src: '/images/03.png'
          }
      ],
      showLitebox: false
  },
  methods: {
      showLitebox() {
          this.showLitebox = true;
      },
      hideLitebox() {
          this.showLitebox = false;
      }
  }
})
````

````html
<div id="app">
    <vue-litebox v-if="showLitebox"
        :items="images"
        @close="hideLitebox">
    </vue-litebox>
    <button type="button" @click="showLitebox">Show Litebox</button>
</div>
````

### Options
* **items:** Array of url strings and/or objects with a `src` property
* **startAt:** The index at which to start the lightbox
* **closeCaption:** The caption to display on the close button. Defaults to 'Close'
* **prevCaption:** The caption to display on the prev arrow button. Defaults to 'Previous'
* **nextCaption:** The caption to display on the next arrow button. Defaults to 'Next'
* **loadingCaption:** The caption to display whilst loading a media item. Defaults to 'Loading...'
* **videoRegex:** The regex to match for video URLs which will displayed in a 16:9 ration iframe. Defaults to `/youtube.com|vimeo.com/`
* **closeOnEsc:** Define whether to close the lightbox on `Esc` key press. Defaults to `true`
* **nextOnImageClick:** Define whether clicking an image moves you to the next image. Defaults to `true`

### Events
* **close:** Fired when the close button is clicked or `Esc` key is pressed with `closeOnEsc` enabled

### Slots
#### loading
Provide custom markup for the loading overlay
````html
<div slot="loading">Loading...</div>
````

#### close
Provide custom markup for the close button
````html
<button type="button" 
    slot="close" slot-scope="{ closeProps, closeEvents }" 
    v-bind="closeProps" v-on="closeEvents">x</button>
````

#### prev
Provide custom markup for the prev button
````html
<button type="button" 
    slot="prev" slot-scope="{ prevProps, prevEvents }" 
    v-bind="prevProps" v-on="prevEvents">&lt;</button>
````

#### next
Provide custom markup for the next button
````html
<button type="button" 
    slot="next" slot-scope="{ nextProps, nextEvents }" 
    v-bind="nextProps" v-on="nextEvents">&lg;</button>
````

#### caption
Provide custom markup for the next button
````html
<figcaption slot="caption" slot-scope="{ captionProps, currentItem, currentItemIndex, totalItems }" 
    v-bind="captionProps">
    <div class="vlb-caption-title" v-if="currentItem.title">{{currentItem.title}}</div>
    <div class="vlb-caption-count">{{currentItemIndex + 1}}/{{totalItems}}</div>
</figcaption>
````