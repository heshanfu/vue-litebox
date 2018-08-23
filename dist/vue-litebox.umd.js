(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports):'function'==typeof define&&define.amd?define(['exports'],b):b(a.VueLitebox={})})(this,function(a){'use strict';//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// A short delay between navigation triggers to give the UI 
// time to update things such as clearing iframes and removing
// animation classes
/* style inject */function b(){var a=document.head||document.getElementsByTagName('head')[0],c=b.styles||(b.styles={}),d='undefined'!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(b,e){if(!document.querySelector('style[data-vue-ssr-id~="'+b+'"]')){// SSR styles are present.
var f=d?e.media||'default':b,g=c[f]||(c[f]={ids:[],parts:[],element:void 0});if(!g.ids.includes(b)){var h=e.source,i=g.ids.length;if(g.ids.push(b),d&&(g.element=g.element||document.querySelector('style[data-group='+f+']')),!g.element){var j=g.element=document.createElement('style');j.type='text/css',e.media&&j.setAttribute('media',e.media),d&&(j.setAttribute('data-group',f),j.setAttribute('data-next-index','0')),a.appendChild(j)}if(d&&(i=parseInt(g.element.getAttribute('data-next-index')),g.element.setAttribute('data-next-index',i+1)),g.element.styleSheet)g.parts.push(h),g.element.styleSheet.cssText=g.parts.filter(Boolean).join('\n');else{var k=document.createTextNode(h),l=g.element.childNodes;l[i]&&g.element.removeChild(l[i]),l.length?g.element.insertBefore(k,l[i]):g.element.appendChild(k)}}}}}/* style inject SSR *//* component normalizer */// Import vue component
// Declare install function executed by Vue.use()
function c(a){c.installed||(c.installed=!0,a.component('VueLitebox',f))}// Create module definition for Vue.use()
var d={name:'VueLitebox',props:{items:{type:Array,required:!0},startIndex:{type:Number,default:0},closeCaption:{default:'Close'},prevCaption:{default:'Previous'},nextCaption:{default:'Next'},loadingCaption:{default:'Loading...'},videoRegex:{default:function(){return /youtube.com|vimeo.com/}},closeOnEsc:{default:!0},nextOnImageClick:{default:!0}},data:function(){var a=this;return{loading:!0,navDelayed:!1,direction:'init',currentItemIndex:a.startIndex,closeProps:{class:'vlb-close'},closeEvents:{click:function(b){b.preventDefault(),a.close()}},prevProps:{class:'vlb-arrow vlb-arrow--prev'},prevEvents:{click:function(b){b.preventDefault(),a.prev()}},nextProps:{class:'vlb-arrow vlb-arrow--next'},nextEvents:{click:function(b){b.preventDefault(),a.next()}},captionProps:{class:'vlb-caption'}}},computed:{currentItem:function(){return this.items[this.currentItemIndex]},currentItemUrl:function(){return'string'==typeof this.currentItem?this.currentItem:this.currentItem.src},directionClass:function(){return this.loading||this.navDelayed?'':'vlb-direction-'+this.direction}},methods:{_isVideo:function(a){return this.videoRegex.test(a)},_wrapIndex:function(a){return a>=this.items.length?a=0:0>a&&(a=this.items.length-1),a},_loaded:function(){this.loading=!1},_imageClick:function(){this.nextOnImageClick&&this.next()},close:function(){this.$emit('close')},prev:function(){var a=this;a.navDelayed=!0,setTimeout(function(){var b=a.currentItemIndex-1,c=a._wrapIndex(b);a.direction=(c==b?'':'wrap-')+'prev',a.currentItemIndex=c,a.navDelayed=!1},100)},next:function(){var a=this;a.navDelayed=!0,setTimeout(function(){var b=a.currentItemIndex+1,c=a._wrapIndex(b);a.direction=(c==b?'':'wrap-')+'next',a.currentItemIndex=c,a.navDelayed=!1},100)},gotTo:function(a){var b=this;b.navDelayed=!0,setTimeout(function(){var c=b._wrapIndex(a);b.direction=c>b.currentItemIndex?'next':'prev',b.currentItemIndex=c,b.navDelayed=!1},100)}},watch:{currentItemUrl:function(a){a&&(this.loading=!0)}},mounted:function(){var a=this,b=function(b){a.closeOnEsc&&27===b.keyCode&&a.close(),1<a.items.length&&((39===b.keyCode||68===b.keyCode)&&a.next(),(37===b.keyCode||65===b.keyCode)&&a.prev())};document.addEventListener('keydown',b),a.$once('hook:beforeDestroy',function(){document.removeEventListener('keydown',b)})}},e=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c('div',{staticClass:'vlb-element',class:{"vlb-element--loading":a.loading}},[c('div',{staticClass:'vlb-overlay'}),a._v(' '),c('div',{staticClass:'vlb-wrapper-outer'},[c('div',{staticClass:'vlb-wrapper-inner'},[c('div',{staticClass:'vlb-content',class:a.directionClass},[a.loading||a.navDelayed?a._e():c('div',{staticClass:'vlb-close-wrapper'},[a._t('close',[c('button',a._g(a._b({attrs:{type:'button',title:a.closeCaption}},'button',a.closeProps,!1),a.closeEvents),[a._v('x')])],{closeProps:a.closeProps,closeEvents:a.closeEvents})],2),a._v(' '),c('figure',{staticClass:'vlb-figure'},[a.navDelayed||a.loading?c('div',{staticClass:'vlb-loading'},[a._t('loading',[a._v(a._s(a.loadingCaption))])],2):a._e(),a._v(' '),a.navDelayed||!a.currentItem||a._isVideo(a.currentItemUrl)?a._e():c('div',{directives:[{name:'show',rawName:'v-show',value:!a.loading,expression:'!loading'}],staticClass:'vlb-image-wrapper'},[c('img',{staticClass:'vlb-image',attrs:{src:a.currentItemUrl},on:{load:a._loaded,click:a._imageClick}})]),a._v(' '),!a.navDelayed&&a.currentItem&&a._isVideo(a.currentItemUrl)?c('div',{directives:[{name:'show',rawName:'v-show',value:!a.loading,expression:'!loading'}],staticClass:'vlb-frame-wrapper'},[c('div',{staticClass:'vlb-frame-sizer'},[c('iframe',{staticClass:'vlb-frame',attrs:{frameborder:'0',allowfullscreen:'',src:a.currentItemUrl},on:{load:a._loaded}})])]):a._e(),a._v(' '),!a.currentItem||a.loading||a.navDelayed?a._e():a._t('caption',[c('figcaption',a._b({},'figcaption',a.captionProps,!1),[a.currentItem.title?c('div',{staticClass:'vlb-caption-title'},[a._v(a._s(a.currentItem.title))]):a._e(),a._v(' '),c('div',{staticClass:'vlb-caption-count'},[a._v(a._s(a.currentItemIndex+1)+'/'+a._s(a.items.length))])])],{captionProps:a.captionProps,currentItem:a.currentItem,currentItemIndex:a.currentItemIndex,totalItems:a.items.length})],2)]),a._v(' '),1<a.items.length?c('div',{staticClass:'vlb-arrows'},[a._t('prev',[c('button',a._g(a._b({attrs:{type:'button',title:a.prevCaption}},'button',a.prevProps,!1),a.prevEvents),[a._v('<')])],{prevProps:a.prevProps,prevEvents:a.prevEvents}),a._v(' '),a._t('next',[c('button',a._g(a._b({attrs:{type:'button',title:a.nextCaption}},'button',a.nextProps,!1),a.nextEvents),[a._v('>')])],{nextProps:a.nextProps,nextEvents:a.nextEvents})],2):a._e()])])])};/* script *//* template */e._withStripped=!0;/* style */var f=function(a,b,c,d,e,f,g){var h=('function'==typeof c?c.options:c)||{};// For security concerns, we use only base name in production mode.
h.__file='c:\\Users\\Matt\\Work\\VueLitebox\\src\\vue-litebox.vue',h.render||(h.render=a.render,h.staticRenderFns=a.staticRenderFns,h._compiled=!0,e&&(h.functional=!0)),h._scopeId=d;{var i;if(b&&(i=function(a){b.call(this,g(a))}),void 0!=i)if(h.functional){// register for functional component in vue file
var j=h.render;h.render=function(a,b){return i.call(b),j(a,b)}}else{// inject component registration as beforeCreate hook
var k=h.beforeCreate;h.beforeCreate=k?[].concat(k,i):[i]}}return h}({render:e,staticRenderFns:[]},function(a){a&&a('data-v-3a52eef0_0',{source:'\n.vlb-element {\n  box-sizing: border-box;\n}\n.vlb-element *, .vlb-element *:before, .vlb-element *:after {\n  box-sizing: inherit;\n}\n.vlb-overlay, .vlb-wrapper-outer, .vlb-wrapper-inner {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vlb-overlay {\n  background-color: #000;\n  opacity: 0.7;\n  overflow: hidden;\n  z-index: 2000;\n}\n.vlb-wrapper-outer {\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 2010;\n}\n.vlb-wrapper-inner {\n  position: absolute;\n  text-align: center;\n}\n.vlb-wrapper-inner:before {\n  content: "";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.vlb-content {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0px auto;\n  padding: 0 1rem;\n  text-align: left;\n  max-width: 100%;\n  z-index: 2020;\n}\n.vlb-figure {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  z-index: 10;\n}\n.vlb-image {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  line-height: 0;\n  margin: 0 auto;\n}\n.vlb-frame-wrapper {\n  position: relative;\n  width: 853px; /* Largest YouTube embed size */\n  max-width: 100%;\n}\n.vlb-frame-sizer {\n  position: relative;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  padding-top: 56.25%;\n}\n.vlb-frame {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vlb-caption {\n  display: block;\n}\n.vlb-close-wrapper {\n  position: relative;\n  text-align: right;\n  z-index: 20;\n}\n.vlb-arrows {\n  position: fixed;\n  top: 50%;\n  left: 0;\n  right: 0;\n  z-index: 2030;\n}\n.vlb-close, .vlb-arrow {\n  cursor: pointer;\n}\n.vlb-arrow {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  overflow: hidden;\n}\n.vlb-arrow--prev {\n  left: 0;\n}\n.vlb-arrow--next {\n  right: 0;\n}\n',map:{version:3,sources:['c:\\Users\\Matt\\Work\\VueLitebox/c:\\Users\\Matt\\Work\\VueLitebox\\src\\vue-litebox.vue'],names:[],mappings:';AAqNA;EACA,uBAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,gBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;CACA;AAEA;EACA,uBAAA;EACA,aAAA;EACA,iBAAA;EACA,cAAA;CACA;AAEA;EACA,mBAAA;EACA,iBAAA;EACA,cAAA;CACA;AAEA;EACA,mBAAA;EACA,mBAAA;CACA;AAEA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;CACA;AAEA;EACA,mBAAA;EACA,sBAAA;EACA,uBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;CACA;AAEA;EACA,mBAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;CACA;AAEA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;CACA;AAEA;EACA,mBAAA;EACA,aAAA,CAAA,gCAAA;EACA,gBAAA;CACA;AAEA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;EACA,oBAAA;CACA;AAEA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;CACA;AAEA;EACA,gBAAA;EACA,SAAA;EACA,QAAA;EACA,SAAA;EACA,cAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,mBAAA;EACA,SAAA;EACA,4BAAA;EACA,iBAAA;CACA;AAEA;EACA,QAAA;CACA;AAEA;EACA,SAAA;CACA',file:'vue-litebox.vue',sourcesContent:['<template>\r\n    <div class="vlb-element" :class="{ \'vlb-element--loading\': loading }">\r\n        <div class="vlb-overlay"></div>\r\n        <div class="vlb-wrapper-outer">\r\n            <div class="vlb-wrapper-inner">\r\n                <div class="vlb-content" :class="directionClass">\r\n                    <div class="vlb-close-wrapper" v-if="!loading && !navDelayed">\r\n                        <slot name="close" :close-props="closeProps" :close-events="closeEvents">\r\n                            <button type="button" :title="closeCaption" v-bind="closeProps" v-on="closeEvents">x</button>\r\n                        </slot>\r\n                    </div>\r\n                    <figure class="vlb-figure">\r\n                        <div class="vlb-loading" v-if="navDelayed || loading">\r\n                            <slot name="loading">{{loadingCaption}}</slot>\r\n                        </div>\r\n                        <div v-if="!navDelayed && currentItem && !_isVideo(currentItemUrl)" v-show="!loading" class="vlb-image-wrapper" ><img class="vlb-image" :src="currentItemUrl" @load="_loaded" @click="_imageClick" /></div>\r\n                        <div v-if="!navDelayed && currentItem && _isVideo(currentItemUrl)" v-show="!loading" class="vlb-frame-wrapper"><div class="vlb-frame-sizer"><iframe class="vlb-frame" frameborder="0" allowfullscreen :src="currentItemUrl" @load="_loaded"></iframe></div></div>\r\n                        <slot v-if="currentItem && !loading && !navDelayed" name="caption" :caption-props="captionProps" :current-item="currentItem" :current-item-index="currentItemIndex" :total-items="items.length">\r\n                            <figcaption v-bind="captionProps">\r\n                                <div class="vlb-caption-title" v-if="currentItem.title">{{currentItem.title}}</div>\r\n                                <div class="vlb-caption-count">{{currentItemIndex + 1}}/{{items.length}}</div>\r\n                            </figcaption>\r\n                        </slot>\r\n                    </figure>\r\n                </div>\r\n                <div class="vlb-arrows" v-if="items.length > 1">\r\n                    <slot name="prev" :prev-props="prevProps" :prev-events="prevEvents">\r\n                        <button type="button" :title="prevCaption" v-bind="prevProps" v-on="prevEvents">&lt;</button>\r\n                    </slot>\r\n                    <slot name="next" :next-props="nextProps" :next-events="nextEvents">\r\n                        <button type="button" :title="nextCaption" v-bind="nextProps" v-on="nextEvents">&gt;</button>\r\n                    </slot>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n// A short delay between navigation triggers to give the UI \r\n// time to update things such as clearing iframes and removing\r\n// animation classes\r\nlet navDelay = 100;\r\n\r\nexport default {\r\n    name: \'VueLitebox\',\r\n    props: {\r\n        items: {\r\n            type: Array,\r\n            required: true\r\n        },\r\n        startIndex: {\r\n            type: Number,\r\n            default: 0\r\n        },\r\n        closeCaption: {\r\n            default: \'Close\'\r\n        },\r\n        prevCaption: {\r\n            default: \'Previous\'\r\n        },\r\n        nextCaption: {\r\n            default: \'Next\'\r\n        },\r\n        loadingCaption: {\r\n            default: \'Loading...\'\r\n        },\r\n        videoRegex: {\r\n            default: () => /youtube.com|vimeo.com/\r\n        },\r\n        closeOnEsc: {\r\n            default: true\r\n        },\r\n        nextOnImageClick: {\r\n            default: true\r\n        }\r\n    },\r\n    data() {\r\n        let self = this;\r\n        return {\r\n            loading: true,\r\n            navDelayed: false,\r\n            direction: \'init\',\r\n            currentItemIndex: self.startIndex,\r\n            closeProps: {\r\n                class: \'vlb-close\'\r\n            },\r\n            closeEvents: {\r\n                click(e) {\r\n                    e.preventDefault();\r\n                    self.close();\r\n                }\r\n            },\r\n            prevProps: {\r\n                class: \'vlb-arrow vlb-arrow--prev\'\r\n            },\r\n            prevEvents: {\r\n                click(e) {\r\n                    e.preventDefault();\r\n                    self.prev();\r\n                }\r\n            },\r\n            nextProps: {\r\n                class: \'vlb-arrow vlb-arrow--next\'\r\n            },\r\n            nextEvents: {\r\n                click(e) {\r\n                    e.preventDefault();\r\n                    self.next();\r\n                }\r\n            },\r\n            captionProps: {\r\n                class: \'vlb-caption\'\r\n            }\r\n        }\r\n    },\r\n    computed: {\r\n        currentItem() {\r\n            return this.items[this.currentItemIndex];\r\n        },\r\n        currentItemUrl() {\r\n            return typeof this.currentItem === \'string\' ? this.currentItem : this.currentItem.src;\r\n        },\r\n        directionClass() {\r\n            if (this.loading || this.navDelayed) return \'\';\r\n            return \'vlb-direction-\' + this.direction;\r\n        }\r\n    },\r\n    methods: {\r\n        _isVideo(url) {\r\n            return this.videoRegex.test(url);\r\n        },\r\n        _wrapIndex(idx) {\r\n            if (idx >= this.items.length) {\r\n                idx = 0;\r\n            } else if (idx < 0) {\r\n                idx = this.items.length - 1;\r\n            }\r\n            return idx;\r\n        },\r\n        _loaded() {\r\n            this.loading = false;\r\n        },\r\n        _imageClick() {\r\n            if (this.nextOnImageClick) {\r\n                this.next();\r\n            }\r\n        },\r\n        close() {\r\n            this.$emit(\'close\');\r\n        },\r\n        prev() {\r\n            let self = this;\r\n            self.navDelayed = true;\r\n            setTimeout(() => {\r\n                let targetIndex = self.currentItemIndex - 1;\r\n                let nextIndex = self._wrapIndex(targetIndex);\r\n                self.direction = (nextIndex != targetIndex ? \'wrap-\' : \'\') + \'prev\';\r\n                self.currentItemIndex = nextIndex;\r\n                self.navDelayed = false;\r\n            }, navDelay);\r\n        },\r\n        next() {\r\n            let self = this;\r\n            self.navDelayed = true;\r\n            setTimeout(() => {\r\n                let targetIndex = self.currentItemIndex + 1;\r\n                let nextIndex = self._wrapIndex(targetIndex);\r\n                self.direction = (nextIndex != targetIndex ? \'wrap-\' : \'\') + \'next\';\r\n                self.currentItemIndex = nextIndex;\r\n                self.navDelayed = false;\r\n            }, navDelay);\r\n        },\r\n        gotTo(idx) {\r\n            let self = this;\r\n            self.navDelayed = true;\r\n            setTimeout(() => {\r\n                let nextIndex = self._wrapIndex(idx);\r\n                self.direction = nextIndex > self.currentItemIndex ? \'next\' : \'prev\';\r\n                self.currentItemIndex = nextIndex;\r\n                self.navDelayed = false;\r\n            }, navDelay);\r\n        }\r\n    },\r\n    watch: {\r\n        currentItemUrl(newValue) {\r\n            if (newValue) {\r\n                this.loading = true;\r\n            }\r\n        }\r\n    },\r\n    mounted() {\r\n\r\n        let self = this;\r\n\r\n        let keyHandler = (e) => {\r\n            self.closeOnEsc && e.keyCode === 27 && self.close();\r\n            if (self.items.length > 1) {\r\n                (e.keyCode === 39 || e.keyCode === 68) && self.next();\r\n                (e.keyCode === 37 || e.keyCode === 65) && self.prev();\r\n            }\r\n        }\r\n\r\n        document.addEventListener(\'keydown\', keyHandler);\r\n        self.$once(\'hook:beforeDestroy\', () => {\r\n            document.removeEventListener(\'keydown\', keyHandler);\r\n        });\r\n    }\r\n}\r\n</script>\r\n\r\n<style>\r\n  .vlb-element {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .vlb-element *, .vlb-element *:before, .vlb-element *:after {\r\n    box-sizing: inherit;\r\n  }\r\n\r\n  .vlb-overlay, .vlb-wrapper-outer, .vlb-wrapper-inner {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n  }\r\n\r\n  .vlb-overlay {\r\n    background-color: #000;\r\n    opacity: 0.7;\r\n    overflow: hidden;\r\n    z-index: 2000;\r\n  }\r\n\r\n  .vlb-wrapper-outer {\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    z-index: 2010;\r\n  }\r\n\r\n  .vlb-wrapper-inner {\r\n    position: absolute;\r\n    text-align: center;\r\n  }\r\n\r\n  .vlb-wrapper-inner:before {\r\n    content: "";\r\n    display: inline-block;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .vlb-content {\r\n    position: relative;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin: 0px auto;\r\n    padding: 0 1rem;\r\n    text-align: left;\r\n    max-width: 100%;\r\n    z-index: 2020;\r\n  }\r\n\r\n  .vlb-figure {\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 0;\r\n    z-index: 10;\r\n  }\r\n\r\n  .vlb-image {\r\n    width: auto;\r\n    max-width: 100%;\r\n    height: auto;\r\n    display: block;\r\n    line-height: 0;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .vlb-frame-wrapper {\r\n    position: relative;\r\n    width: 853px; /* Largest YouTube embed size */\r\n    max-width: 100%;\r\n  }\r\n\r\n  .vlb-frame-sizer {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding-top: 56.25%;\r\n  }\r\n\r\n  .vlb-frame {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .vlb-caption {\r\n    display: block;\r\n  }\r\n\r\n  .vlb-close-wrapper {\r\n    position: relative;\r\n    text-align: right;\r\n    z-index: 20;\r\n  }\r\n\r\n  .vlb-arrows {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 2030;\r\n  }\r\n\r\n  .vlb-close, .vlb-arrow {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .vlb-arrow {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    overflow: hidden;\r\n  }\r\n\r\n  .vlb-arrow--prev {\r\n    left: 0;\r\n  }\r\n\r\n  .vlb-arrow--next {\r\n    right: 0;\r\n  }\r\n</style>\r\n']},media:void 0})},d,void 0,!1,void 0,b,void 0),g=null;/* scoped *//* module identifier *//* functional template */// Auto-install when vue is found (eg. in browser via <script> tag)
'undefined'==typeof window?'undefined'!=typeof global&&(g=global.Vue):g=window.Vue,g&&g.use({install:c}),a.install=c,a.default=f,Object.defineProperty(a,'__esModule',{value:!0})});