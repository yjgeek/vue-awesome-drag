!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["drag-container"]=e():t["drag-container"]=e()}(this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=9)}([function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("6b21fae2",i,!0,{})},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("67d091d6",i,!0,{})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}var s,a,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);i&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],a={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}n.r(e),n.d(e,"default",(function(){return h}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,l=!1,f=function(){},d=null,c="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,o){l=n,d=o||{};var s=i(t,e);return p(s),function(e){for(var n=[],o=0;o<s.length;o++){var a=s[o];(u=r[a.id]).refs--,n.push(u)}e?p(s=i(t,e)):s=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete r[u.id]}}}}function p(t){for(var e=0;e<t.length;e++){var n=t[e],i=r[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(v(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(v(n.parts[o]));r[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function v(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(l)return f;i.parentNode.removeChild(i)}if(c){var o=u++;i=a||(a=m()),e=b.bind(null,i,o,!1),n=b.bind(null,i,o,!0)}else i=m(),e=x.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var g,y=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function b(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function x(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),d.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e,n){"use strict";n.r(e),n.d(e,"DragContainer",(function(){return r})),n.d(e,"Drag",(function(){return u}));var i={name:"vue-drag-container",props:{scaleX:{type:Number},scaleY:{type:Number},autoZindex:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},provide:function(){return{$dragContainer:this}},data:()=>({zindex:1})};n(5);function o(t,e,n,i,o,r,s,a){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var f=l.render;l.render=function(t,e){return u.call(e),f(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}var r=o(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"drag-container"},[this._t("default")],2)}),[],!1,null,"a025bc60",null).exports;var s=function(t,e,n){var i,o,r,s,a,u=function(){var l=new Date-0-s;l<e&&l>=0?i=setTimeout(u,e-l):(i=null,n||(a=t.apply(r,o),i||(r=o=null)))};return function(){r=this,o=arguments,s=new Date-0;var l=n&&!i;return i||(i=setTimeout(u,e)),l&&(a=t.apply(r,o),r=o=null),a}},a={name:"vue-drag",inject:{$dragContainer:{default:null}},props:{top:{type:Number,default:0},left:{type:Number,default:0},scaleX:{type:Number},scaleY:{type:Number},disabled:{type:Boolean,default:!1}},data(){return{currentTop:this.top,currentLeft:this.left,isDrag:!1,zindex:1,mousedownPosition:{x:0,y:0},targetdownOffset:{top:0,left:0},limit:{minTop:null,minLeft:null,maxTop:null,maxLeft:null},mousemovePosition:{x:0,y:0},mousemoveDistance:{x:0,y:0},targetmoveOffset:{top:0,left:0}}},computed:{currentScaleX(){return this.scaleX||this.$dragContainer&&this.$dragContainer.scaleX||1},currentScaleY(){return this.scaleY||this.$dragContainer&&this.$dragContainer.scaleY||1},currentAutoZindex(){return this.$dragContainer&&this.$dragContainer.autoZindex||!1},currentDisabled(){return this.disabled||this.$dragContainer&&this.$dragContainer.disabled||!1}},watch:{top(){this.currentTop=this.top},left(){this.currentLeft=this.left},currentTop(){this.watchCurrentTop()},currentLeft(){this.watchCurrentLeft()}},created(){this.handleMouseup=this.handleMouseup.bind(this),this.handleMouseup=this.handleMouseup.bind(this),this.watchCurrentTop=s(this.watchCurrentTop.bind(this),200),this.watchCurrentLeft=s(this.watchCurrentLeft.bind(this),200)},mounted(){this.handleResize(),this.handleResize=s(this.handleResize.bind(this),200),window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},methods:{watchCurrentTop(){this.$emit("update:top",this.currentTop)},watchCurrentLeft(){this.$emit("update:left",this.currentLeft)},getOffsetByBody(t){let e=0,n=0;for(;t&&"BODY"!==t.tagName;)e+=t.offsetTop,n+=t.offsetLeft,t=t.offsetParent;return{top:e,left:n}},updateLimit(){if(this.$dragContainer){const t=this.$dragContainer.$el,e=this.getOffsetByBody(t),n=this.getOffsetByBody(this.$el);this.limit.minTop=0-(n.top-e.top-this.targetdownOffset.top),this.limit.minLeft=0-(n.left-e.left-this.targetdownOffset.left),this.limit.maxTop=this.limit.minTop+t.clientHeight-this.$el.clientHeight,this.limit.maxLeft=this.limit.minLeft+t.clientWidth-this.$el.clientWidth}else this.limit.minTop=null,this.limit.minLeft=null,this.limit.maxTop=null,this.limit.maxLeft=null},handleResize(){this.handleMousedown(),this.handleMousemove(),this.handleMouseup()},handleMousedown(t){document.removeEventListener("mousemove",this.handleMousemove),document.removeEventListener("mouseup",this.handleMouseup),t&&(this.isDrag=!0),this.$dragContainer&&this.$dragContainer.autoZindex&&(this.$dragContainer.zindex+=1,this.zindex=this.$dragContainer.zindex),this.targetdownOffset.top=this.$el.offsetTop,this.targetdownOffset.left=this.$el.offsetLeft,this.mousedownPosition.x=t&&t.clientX||this.getOffsetByBody(this.$el).left,this.mousedownPosition.y=t&&t.clientY||this.getOffsetByBody(this.$el).top,this.updateLimit(),document.addEventListener("mousemove",this.handleMousemove),document.addEventListener("mouseup",this.handleMouseup)},handleMousemove(t){this.mousemovePosition.x=t&&t.clientX||this.mousedownPosition.x,this.mousemovePosition.y=t&&t.clientY||this.mousedownPosition.y,this.mousemoveDistance.x=(this.mousemovePosition.x-this.mousedownPosition.x)/this.currentScaleX,this.mousemoveDistance.y=(this.mousemovePosition.y-this.mousedownPosition.y)/this.currentScaleY,this.targetmoveOffset.top=this.targetdownOffset.top+this.mousemoveDistance.y,this.targetmoveOffset.left=this.targetdownOffset.left+this.mousemoveDistance.x,"number"==typeof this.limit.minTop&&this.targetmoveOffset.top<this.limit.minTop&&(this.targetmoveOffset.top=this.limit.minTop),"number"==typeof this.limit.maxTop&&this.targetmoveOffset.top>this.limit.maxTop&&(this.targetmoveOffset.top=this.limit.maxTop),"number"==typeof this.limit.minLeft&&this.targetmoveOffset.left<this.limit.minLeft&&(this.targetmoveOffset.left=this.limit.minLeft),"number"==typeof this.limit.maxLeft&&this.targetmoveOffset.left>this.limit.maxLeft&&(this.targetmoveOffset.left=this.limit.maxLeft),this.currentDisabled||(this.currentTop=parseInt(this.targetmoveOffset.top),this.currentLeft=parseInt(this.targetmoveOffset.left))},handleMouseup(t){t&&(this.isDrag=!1),document.removeEventListener("mousemove",this.handleMousemove),document.removeEventListener("mouseup",this.handleMouseup)}}},u=(n(7),o(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"drag",style:{top:t.currentTop+"px",left:t.currentLeft+"px","z-index":t.currentAutoZindex&&t.zindex},on:{mousedown:t.handleMousedown}},[t._t("default",null,{isDrag:t.isDrag,disabled:t.currentDisabled})],2)}),[],!1,null,"55c308ea",null).exports);r.install=function(t){t.component(r.name,r)},u.install=function(t){t.component(u.name,u)};e.default=u},function(t,e,n){"use strict";var i=n(0);n.n(i).a},function(t,e,n){(e=n(2)(!1)).push([t.i,".drag-container[data-v-a025bc60]{position:relative}\n",""]),t.exports=e},function(t,e,n){"use strict";var i=n(1);n.n(i).a},function(t,e,n){(e=n(2)(!1)).push([t.i,".drag[data-v-55c308ea]{position:absolute;left:0;top:0;user-select:none;display:inline-block}\n",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var i=n(4);n.d(e,"DragContainer",(function(){return i.default}))}])}));