/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "42f9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".photo-gallery{max-width:555px}.photo-main{display:flex;justify-content:space-evenly;cursor:pointer}.photo-main-image{max-width:100%;align-self:center}.photo-thumbnails{margin-top:1rem;display:flex;justify-content:space-between;align-items:flex-start}.photo-thumbnail{cursor:pointer}.lightbox{position:fixed;top:0;left:0;background:rgba(0,0,0,.9);width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;justify-content:center;align-items:center;z-index:200;color:hsla(0,0%,100%,.8)}.lightbox-close{position:fixed;z-index:210;right:0;top:0;padding:1rem;font-size:1.7rem;cursor:pointer;width:4rem;height:4rem;color:#fff}.lightbox-main{width:100%}.lightbox-arrow,.lightbox-main{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;height:100%}.lightbox-arrow{cursor:pointer;justify-content:center;align-items:center;position:absolute;padding:0 2rem;width:2rem;z-index:100}.lightbox-arrow-right{right:0}.lightbox-arrow-left{left:0}.lightbox-image-container{-webkit-box-flex:1;width:20%;-webkit-flex:1;-ms-flex:1;flex:1}.lightbox-image{width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:50% 50%}.lightbox-caption{position:absolute;bottom:15px;width:100%;z-index:100;text-align:center;text-shadow:1px 1px 3px #1a1a1a}.lightbox-caption span{border-radius:12px;background-color:rgba(0,0,0,.6);padding:2px 10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.lightbox-slide-enter-active,.lightbox-slide-leave-active{transition:all .4s ease}.lightbox-slide-enter{-webkit-transform:translateX(100px);-ms-transform:translateX(100px);transform:translateX(100px);opacity:0}.lightbox-slide-leave-to{-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);opacity:0}.lightbox-fade-enter-active,.lightbox-fade-leave-active{transition:all .4s ease}.lightbox-fade-enter,.lightbox-fade-leave-to{opacity:0}", ""]);

// exports


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("2350");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./PhotoGallery.vue?vue&type=template&id=abd713f6&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"photo-gallery"},[_c('div',{staticClass:"photo-main"},[(_vm.mainImage)?_c('img',{staticClass:"photo-main-image",attrs:{"src":_vm.mediumDir + _vm.mainImage.name},on:{"click":function($event){_vm.showLightbox(_vm.mainImage.name)}}}):_vm._e()]),(_vm.randomThumbs)?_c('div',{staticClass:"photo-thumbnails"},_vm._l((_vm.randomThumbs),function(image){return _c('img',{key:image.name,staticClass:"photo-thumbnail",attrs:{"src":_vm.thumbnailDir + image.name},on:{"click":function($event){_vm.showLightbox(image.name)}}})}),0):_vm._e(),_c('lightbox',{ref:"lightbox",attrs:{"id":"mylightbox","images":_vm.images,"directory":_vm.imagesDir,"timeoutDuration":5000}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./PhotoGallery.vue?vue&type=template&id=abd713f6&shadow

// EXTERNAL MODULE: ./node_modules/node-fetch/browser.js
var browser = __webpack_require__("a18f");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/vue-my-photos/dist/lightbox.esm.js
var lightbox_esm = __webpack_require__("9917");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./PhotoGallery.vue?vue&type=script&lang=js&shadow
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




/* harmony default export */ var lib_vue_loader_options_PhotoGalleryvue_type_script_lang_js_shadow = ({
    name: "PhotoGallery",
    components: {
        'lightbox': lightbox_esm["a" /* default */],
    },
    data() {
        return {
            images: []
        }
    },
    // props: {
    //     imagesPath
    // },
    computed: {
        imagesDir() {
            // return "https://kakaravaara.fi/media/photogallery/
            return "/images/"
        },
        mainImage() {
            if (this.images.length === 0) {
                return false
            }
            return this.randomImage()
        },
        mediumDir() {
            return this.imagesDir + '_medium/'
        },
        randomThumbs() {
            if (this.images.length === 0) {
                return false
            }
            let thumbs = []
            for (let i=0; (i<5 && i < this.images.length); i++) {
                thumbs.push(this.randomImage())
            }
            return thumbs
        },
        thumbnailDir() {
            return this.imagesDir + '_thumbs/'
        },
    },
    methods: {
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max))
        },
        randomImage() {
            return this.images[this.getRandomInt(this.images.length-1)]
        },
        showLightbox(imageName) {
            this.$refs.lightbox.show(imageName)
        },
    },
    mounted() {
        browser_default()(this.imagesDir + 'manifest.json')
            .then(res => res.json())
            .then(json => this.images = json)
    },
});

// CONCATENATED MODULE: ./PhotoGallery.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var PhotoGalleryvue_type_script_lang_js_shadow = (lib_vue_loader_options_PhotoGalleryvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./PhotoGallery.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("bd02")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  PhotoGalleryvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

component.options.__file = "PhotoGallery.vue"
/* harmony default export */ var PhotoGalleryshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('photo-gallery', vue_wc_wrapper(external_Vue_default.a, PhotoGalleryshadow))

/***/ }),

/***/ "5a7c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("42f9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("51fb12ed", content, shadowRoot)
};

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "9917":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
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
//
//
//
//
//
//
//
//

var script = {
    props: {
        // images = [{ name:'image1.jpg', alt:'Redwoods', filter:'nature' }, ...]
        images: {
            type: Array,
            required: true
        },
        // Used to display a subset of photos. If used, images array must contain a property
        // titled 'filter' which contains the desired filter string
        filter: {
            type: String,
            default: 'all'
        },
        // Used if images are located in a separate folder (e.g. '/images/')
        directory: {
            type: String,
            default: ''
        },
        // Used to set the duration in miliseconds of key/mouse inactivity before caption
        // and arrows disappear
        timeoutDuration: {
            type: Number,
            default: 3000
        }
    },
    data: function data() {
        return {
            visible: false,        // Lightbox not visible by default
            controlsVisible: true, // Lightbox controls (arrows, caption, close button)
            index: 0,              // Index indicates which photo to display. Default to 1st photo
            timer: null          // Timer to show/hide lightbox controls           
        }
    },
    mounted: function mounted() {
        window.addEventListener('keydown', this.keyEventListener);
        window.addEventListener('mousemove',this.mouseEventListener);
        window.addEventListener('touchmove',this.mouseEventListener);
        window.addEventListener('mouseup',this.mouseEventListener);
    },
    destroyed: function destroyed() {
        window.removeEventListener('keydown', this.keyEventListener);
        window.removeEventListener('mousemove',this.mouseEventListener);
        window.removeEventListener('touchmove',this.mouseEventListener);
        window.removeEventListener('mouseup',this.mouseEventListener);
    },
    methods: {
        show: function show(imageName) {
            var this$1 = this;

            this.visible = true;
            this.controlsVisible = true;
            var that = this;

            // Find the index of the image passed to Lightbox
            for(var i = 0; i < this.filteredImages.length; i++){
                if(this$1.filteredImages[i].name == imageName) {
                    this$1.index = i;
                    break;
                }
            }
            clearTimeout(this.timer);
            this.timer = setTimeout(function() {that.controlsVisible = false;}, that.timeoutDuration);
            this.preloadNextImage();
        },
        hide: function hide() {
            this.visible = false;
            this.index = 0;
            clearTimeout(this.timer);
        },
        has_next: function has_next() {
            return (this.index + 1 < this.filteredImages.length);
        },
        has_prev: function has_prev() {
            return (this.index - 1 >= 0);
        },
        prev: function prev() {
            if (this.has_prev()) {
                this.index -= 1;
            }
        },
        next: function next() {
            if (this.has_next()) {
                this.index += 1;
                this.preloadNextImage();
            }
        },
        keyEventListener: function keyEventListener(e) {
            if (this.visible) {
                var that = this;
                this.controlsVisible = true;
                clearTimeout(this.timer);
                this.timer = setTimeout(function() {that.controlsVisible = false;}, that.timeoutDuration);

                switch (e.key) {
                    case 'ArrowRight':
                        this.next();
                        break;
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                    case ' ':
                        e.preventDefault();
                        break;
                    case 'Escape':
                        this.hide();
                        break;
                }
            }
        },
        // This event shows the arrows and caption on the lightbox when the mouse is moved or clicked.
        // Also used for touch events on touchscreen devices. The elements are set to disappear
        // after a given duration via a timer.
        mouseEventListener: function mouseEventListener(e) {
            if (this.visible) {
                var that = this;
                this.controlsVisible = true;
                clearTimeout(this.timer);
                this.timer = setTimeout(function() {that.controlsVisible = false;}, that.timeoutDuration);
            }
        },
        preloadNextImage: function preloadNextImage () {
            if (this.has_next()){
                try {
                    var _img = new Image();
                    _img.src = this.directory + this.filteredImages[this.index + 1].name;
                } catch (e) { }
            }
        }
    },
    computed: {
        filteredImages: function () {
            var that = this;
            if (that.filter === 'all' || !that.filter.length){
                return that.images;
            }
            else {
                return that.images.filter(function (item) {
                    return item.filter === that.filter;
                })
            }
        }
    }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("transition", { attrs: { name: "lightbox-fade" } }, [
        _vm.visible
          ? _c(
              "div",
              {
                staticClass: "lightbox",
                on: {
                  mousedown: function($event) {
                    $event.stopPropagation();
                    return _vm.hide($event)
                  },
                  touchdown: function($event) {
                    $event.stopPropagation();
                    return _vm.hide($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "lightbox-close",
                    on: {
                      mousedown: function($event) {
                        $event.stopPropagation();
                        return _vm.hide($event)
                      },
                      touchdown: function($event) {
                        $event.stopPropagation();
                        return _vm.hide($event)
                      }
                    }
                  },
                  [_vm._v("×")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "lightbox-arrow lightbox-arrow-left",
                    on: {
                      mousedown: function($event) {
                        $event.stopPropagation();
                        $event.preventDefault();
                        return _vm.prev($event)
                      },
                      touchdown: function($event) {
                        $event.stopPropagation();
                        $event.preventDefault();
                        return _vm.prev($event)
                      }
                    }
                  },
                  [
                    _c("transition", { attrs: { name: "lightbox-fade" } }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.has_prev() && _vm.controlsVisible,
                              expression: "has_prev() && controlsVisible"
                            }
                          ],
                          staticClass: "lightbox-arrow-left-icon"
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                height: "24",
                                viewBox: "0 0 24 24",
                                width: "24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }
                            },
                            [
                              _c("circle", {
                                attrs: {
                                  cx: "12",
                                  cy: "12",
                                  r: "12",
                                  fill: "rgba(20, 20, 20, 0.4)"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z",
                                  fill: "white"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: { d: "M0-.5h24v24H0z", fill: "none" }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "lightbox-arrow lightbox-arrow-right",
                    on: {
                      mousedown: function($event) {
                        $event.stopPropagation();
                        $event.preventDefault();
                        return _vm.next($event)
                      },
                      touchdown: function($event) {
                        $event.stopPropagation();
                        $event.preventDefault();
                        return _vm.next($event)
                      }
                    }
                  },
                  [
                    _c("transition", { attrs: { name: "lightbox-fade" } }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.has_next() && _vm.controlsVisible,
                              expression: "has_next() && controlsVisible"
                            }
                          ],
                          staticClass: "lightbox-arrow-right-icon"
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                height: "24",
                                viewBox: "0 0 24 24",
                                width: "24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }
                            },
                            [
                              _c("circle", {
                                attrs: {
                                  cx: "12",
                                  cy: "12",
                                  r: "12",
                                  fill: "rgba(20, 20, 20, 0.4)"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z",
                                  fill: "white"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: { d: "M0-.25h24v24H0z", fill: "none" }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("transition", { attrs: { name: "lightbox-fade" } }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.controlsVisible &&
                            _vm.filteredImages[_vm.index].alt,
                          expression:
                            "controlsVisible && filteredImages[index].alt"
                        }
                      ],
                      staticClass: "lightbox-caption",
                      on: {
                        mousedown: function($event) {
                          $event.stopPropagation();
                        },
                        touchdown: function($event) {
                          $event.stopPropagation();
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { unselectable: "on" } }, [
                        _vm._v(_vm._s(_vm.filteredImages[_vm.index].alt))
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "lightbox-main",
                    on: {
                      mousedown: function($event) {
                        $event.stopPropagation();
                        return _vm.hide($event)
                      },
                      touchdown: function($event) {
                        $event.stopPropagation();
                        return _vm.hide($event)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "lightbox-image-container",
                        on: {
                          mousedown: function($event) {
                            $event.stopPropagation();
                          },
                          touchdown: function($event) {
                            $event.stopPropagation();
                          }
                        }
                      },
                      [
                        _c(
                          "transition",
                          { attrs: { name: "lightbox-slide", mode: "out-in" } },
                          [
                            _c("div", {
                              key: _vm.index,
                              staticClass: "lightbox-image",
                              style: {
                                backgroundImage:
                                  "url(" +
                                  _vm.directory +
                                  _vm.filteredImages[_vm.index].name +
                                  ")"
                              }
                            })
                          ]
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-0861d65e_0", { source: "\n.lightbox {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, .9);\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 200;\n    color: rgba(255,255,255,0.8);\n}\n.lightbox-close {\n    position: fixed;\n    z-index: 210;\n    right: 0;\n    top: 0;\n    padding: 1rem;\n    font-size: 1.7rem;\n    cursor: pointer;\n    width: 4rem;\n    height: 4rem;\n    color: white;\n}\n.lightbox-main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n.lightbox-arrow {\n    padding: 0 2rem;\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    padding: 0 2rem;\n    height: 100%;\n    width: 2rem;\n    z-index: 100;\n}\n.lightbox-arrow-right { right: 0;\n}\n.lightbox-arrow-left { left: 0;\n}\n.lightbox-image-container {\n    -webkit-box-flex: 1;\n    width: 20%;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n}\n.lightbox-image {\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n}\n.lightbox-caption {\n    position: absolute;\n    bottom: 15px;\n    width: 100%;\n    z-index: 100;\n    text-align: center;\n    text-shadow: 1px 1px 3px rgb(26, 26, 26);\n}\n.lightbox-caption span {\n    border-radius: 12px;\n    background-color: rgba(0, 0, 0, .6);\n    padding: 2px 10px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.lightbox-slide-enter-active,\n.lightbox-slide-leave-active {\n    transition: all 0.4s ease;\n}\n.lightbox-slide-enter {\n    -webkit-transform: translateX(100px);\n    -ms-transform: translateX(100px);\n    transform: translateX(100px);\n    opacity: 0;\n}\n.lightbox-slide-leave-to {\n    -webkit-transform: translateX(-100px);\n    -ms-transform: translateX(-100px);\n    transform: translateX(-100px);\n    opacity: 0;\n}\n.lightbox-fade-enter-active,\n.lightbox-fade-leave-active {\n    transition: all 0.4s ease;\n}\n.lightbox-fade-enter,\n.lightbox-fade-leave-to {\n    opacity: 0;\n}\n\n", map: {"version":3,"sources":["/Users/andrew/Documents/GitHub/vue-image-lightbox/src/lightbox.vue"],"names":[],"mappings":";AAgMA;IACA,gBAAA;IACA,OAAA;IACA,QAAA;IACA,8BAAA;IACA,YAAA;IACA,aAAA;IACA,qBAAA;IACA,qBAAA;IACA,sBAAA;IACA,cAAA;IACA,wBAAA;IACA,oBAAA;IACA,aAAA;IACA,6BAAA;CACA;AAEA;IACA,gBAAA;IACA,aAAA;IACA,SAAA;IACA,OAAA;IACA,cAAA;IACA,kBAAA;IACA,gBAAA;IACA,YAAA;IACA,aAAA;IACA,aAAA;CACA;AAEA;IACA,qBAAA;IACA,qBAAA;IACA,sBAAA;IACA,cAAA;IACA,YAAA;IACA,aAAA;CACA;AAEA;IACA,gBAAA;IACA,gBAAA;IACA,qBAAA;IACA,qBAAA;IACA,sBAAA;IACA,cAAA;IACA,wBAAA;IACA,oBAAA;IACA,mBAAA;IACA,gBAAA;IACA,aAAA;IACA,YAAA;IACA,aAAA;CACA;AAEA,wBAAA,SAAA;CAAA;AAEA,uBAAA,QAAA;CAAA;AAEA;IACA,oBAAA;IACA,WAAA;IACA,gBAAA;IACA,YAAA;IACA,QAAA;CACA;AAEA;IACA,YAAA;IACA,aAAA;IACA,yBAAA;IACA,6BAAA;IACA,6BAAA;CACA;AAEA;IACA,mBAAA;IACA,aAAA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,yCAAA;CACA;AAEA;IACA,oBAAA;IACA,oCAAA;IACA,kBAAA;IACA,0BAAA;IACA,uBAAA;IACA,sBAAA;IACA,kBAAA;CACA;AAEA;;IAEA,0BAAA;CACA;AAEA;IACA,qCAAA;IACA,iCAAA;IACA,6BAAA;IACA,WAAA;CACA;AAEA;IACA,sCAAA;IACA,kCAAA;IACA,8BAAA;IACA,WAAA;CACA;AAEA;;IAEA,0BAAA;CACA;AAEA;;IAEA,WAAA;CACA","file":"lightbox.vue","sourcesContent":["<template>\n    <div>\n        <transition name=\"lightbox-fade\">\n            <div class=\"lightbox\" v-if=\"visible\" @mousedown.stop=\"hide\" @touchdown.stop=\"hide\">\n                    <div class=\"lightbox-close\" @mousedown.stop=\"hide\" @touchdown.stop=\"hide\">&times;</div>\n                    <div class=\"lightbox-arrow lightbox-arrow-left\" @mousedown.stop.prevent=\"prev\" @touchdown.stop.prevent=\"prev\">\n                        <transition name=\"lightbox-fade\">\n                            <div class=\"lightbox-arrow-left-icon\" v-show=\"has_prev() && controlsVisible\">\n                                <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"rgba(20, 20, 20, 0.4)\" />\n                                    <path d=\"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z\" fill=\"white\"/>\n                                    <path d=\"M0-.5h24v24H0z\" fill=\"none\"/>\n                                </svg>\n                            </div>\n                        </transition>\n                    </div>\n                    <div class=\"lightbox-arrow lightbox-arrow-right\" @mousedown.stop.prevent=\"next\" @touchdown.stop.prevent=\"next\" >\n                        <transition name=\"lightbox-fade\">\n                            <div class=\"lightbox-arrow-right-icon\" v-show=\"has_next() && controlsVisible\" >\n                                <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"rgba(20, 20, 20, 0.4)\" />\n                                    <path d=\"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z\" fill=\"white\" />\n                                    <path d=\"M0-.25h24v24H0z\" fill=\"none\"/>\n                                </svg>\n                            </div>\n                        </transition>\n                    </div>\n                    <transition name=\"lightbox-fade\">\n                        <div class=\"lightbox-caption\" v-show=\"controlsVisible && filteredImages[index].alt\" @mousedown.stop @touchdown.stop>\n                            <span unselectable=\"on\">{{ filteredImages[index].alt }}</span>\n                        </div>\n                    </transition>\n                <div class=\"lightbox-main\" @mousedown.stop=\"hide\" @touchdown.stop=\"hide\">\n                    <div class=\"lightbox-image-container\" @mousedown.stop @touchdown.stop>\n                        <transition name=\"lightbox-slide\" mode=\"out-in\">\n                            <div class=\"lightbox-image\" :key=\"index\" :style=\"{ 'backgroundImage':'url(' + directory + filteredImages[index].name + ')'}\">\n                            </div>\n                        </transition>\n                    </div>\n                </div>\n            </div>\n        </transition>\n    </div>\n</template>\n\n<script>\n    export default {\n        props: {\n            // images = [{ name:'image1.jpg', alt:'Redwoods', filter:'nature' }, ...]\n            images: {\n                type: Array,\n                required: true\n            },\n            // Used to display a subset of photos. If used, images array must contain a property\n            // titled 'filter' which contains the desired filter string\n            filter: {\n                type: String,\n                default: 'all'\n            },\n            // Used if images are located in a separate folder (e.g. '/images/')\n            directory: {\n                type: String,\n                default: ''\n            },\n            // Used to set the duration in miliseconds of key/mouse inactivity before caption\n            // and arrows disappear\n            timeoutDuration: {\n                type: Number,\n                default: 3000\n            }\n        },\n        data() {\n            return {\n                visible: false,        // Lightbox not visible by default\n                controlsVisible: true, // Lightbox controls (arrows, caption, close button)\n                index: 0,              // Index indicates which photo to display. Default to 1st photo\n                timer: null          // Timer to show/hide lightbox controls           \n            }\n        },\n        mounted() {\n            window.addEventListener('keydown', this.keyEventListener);\n            window.addEventListener('mousemove',this.mouseEventListener);\n            window.addEventListener('touchmove',this.mouseEventListener);\n            window.addEventListener('mouseup',this.mouseEventListener);\n        },\n        destroyed() {\n            window.removeEventListener('keydown', this.keyEventListener);\n            window.removeEventListener('mousemove',this.mouseEventListener);\n            window.removeEventListener('touchmove',this.mouseEventListener);\n            window.removeEventListener('mouseup',this.mouseEventListener);\n        },\n        methods: {\n            show(imageName) {\n                this.visible = true;\n                this.controlsVisible = true;\n                var that = this;\n\n                // Find the index of the image passed to Lightbox\n                for(var i = 0; i < this.filteredImages.length; i++){\n                    if(this.filteredImages[i].name == imageName) {\n                        this.index = i;\n                        break;\n                    }\n                }\n                clearTimeout(this.timer);\n                this.timer = setTimeout(function() {that.controlsVisible = false}, that.timeoutDuration);\n                this.preloadNextImage();\n            },\n            hide() {\n                this.visible = false;\n                this.index = 0;\n                clearTimeout(this.timer);\n            },\n            has_next() {\n                return (this.index + 1 < this.filteredImages.length);\n            },\n            has_prev() {\n                return (this.index - 1 >= 0);\n            },\n            prev() {\n                if (this.has_prev()) {\n                    this.index -= 1;\n                }\n            },\n            next() {\n                if (this.has_next()) {\n                    this.index += 1;\n                    this.preloadNextImage();\n                }\n            },\n            keyEventListener(e) {\n                if (this.visible) {\n                    var that = this;\n                    this.controlsVisible = true;\n                    clearTimeout(this.timer);\n                    this.timer = setTimeout(function() {that.controlsVisible = false}, that.timeoutDuration);\n\n                    switch (e.key) {\n                        case 'ArrowRight':\n                            this.next();\n                            break;\n                        case 'ArrowLeft':\n                            this.prev();\n                            break;\n                        case 'ArrowDown':\n                        case 'ArrowUp':\n                        case ' ':\n                            e.preventDefault();\n                            break;\n                        case 'Escape':\n                            this.hide();\n                            break;\n                    }\n                }\n            },\n            // This event shows the arrows and caption on the lightbox when the mouse is moved or clicked.\n            // Also used for touch events on touchscreen devices. The elements are set to disappear\n            // after a given duration via a timer.\n            mouseEventListener(e) {\n                if (this.visible) {\n                    var that = this;\n                    this.controlsVisible = true;\n                    clearTimeout(this.timer);\n                    this.timer = setTimeout(function() {that.controlsVisible = false}, that.timeoutDuration);\n                }\n            },\n            preloadNextImage () {\n                if (this.has_next()){\n                    try {\n                        var _img = new Image();\n                        _img.src = this.directory + this.filteredImages[this.index + 1].name;\n                    } catch (e) { }\n                }\n            }\n        },\n        computed: {\n            filteredImages: function () {\n                var that = this;\n                if (that.filter === 'all' || !that.filter.length){\n                    return that.images;\n                }\n                else {\n                    return that.images.filter(function (item) {\n                        return item.filter === that.filter;\n                    })\n                }\n            }\n        }\n    }\n</script>\n\n<style>\n    .lightbox {\n        position: fixed;\n        top: 0;\n        left: 0;\n        background: rgba(0, 0, 0, .9);\n        width: 100%;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 200;\n        color: rgba(255,255,255,0.8);\n    }\n\n    .lightbox-close {\n        position: fixed;\n        z-index: 210;\n        right: 0;\n        top: 0;\n        padding: 1rem;\n        font-size: 1.7rem;\n        cursor: pointer;\n        width: 4rem;\n        height: 4rem;\n        color: white;\n    }\n\n    .lightbox-main {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        width: 100%;\n        height: 100%;\n    }\n\n    .lightbox-arrow {\n        padding: 0 2rem;\n        cursor: pointer;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        padding: 0 2rem;\n        height: 100%;\n        width: 2rem;\n        z-index: 100;\n    }\n\n    .lightbox-arrow-right { right: 0; }\n    \n    .lightbox-arrow-left { left: 0;}\n\n    .lightbox-image-container {\n        -webkit-box-flex: 1;\n        width: 20%;\n        -webkit-flex: 1;\n        -ms-flex: 1;\n        flex: 1;\n    }\n\n    .lightbox-image {\n        width: 100%;\n        height: 100%;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: 50% 50%;\n    }\n\n    .lightbox-caption {\n        position: absolute;\n        bottom: 15px;\n        width: 100%;\n        z-index: 100;\n        text-align: center;\n        text-shadow: 1px 1px 3px rgb(26, 26, 26);\n    }\n\n    .lightbox-caption span {\n        border-radius: 12px;\n        background-color: rgba(0, 0, 0, .6);\n        padding: 2px 10px;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n\n    .lightbox-slide-enter-active,\n    .lightbox-slide-leave-active {\n        transition: all 0.4s ease;\n    }\n\n    .lightbox-slide-enter {\n        -webkit-transform: translateX(100px);\n        -ms-transform: translateX(100px);\n        transform: translateX(100px);\n        opacity: 0;\n    }\n\n    .lightbox-slide-leave-to {\n        -webkit-transform: translateX(-100px);\n        -ms-transform: translateX(-100px);\n        transform: translateX(-100px);\n        opacity: 0;\n    }\n\n    .lightbox-fade-enter-active,\n    .lightbox-fade-leave-active {\n        transition: all 0.4s ease;\n    }\n\n    .lightbox-fade-enter,\n    .lightbox-fade-leave-to {\n        opacity: 0;\n    }\n    \n</style>"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/andrew/Documents/GitHub/vue-image-lightbox/src/lightbox.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Lightbox = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('Lightbox', Lightbox);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Lightbox);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "a18f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "bd02":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5a7c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=photo-gallery.js.map