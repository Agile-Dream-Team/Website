exports.ids = [5];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Testimonial.vue?vue&type=template&id=556aeb17&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('carousel', {
    attrs: {
      "id": "customer-testi",
      "per-page": 3,
      "dir": "ltr",
      "autoplay": true,
      "loop": true
    }
  }, _vm._l(_vm.testimonialData, function (item) {
    return _c('Slide', {
      key: item.id
    }, [_c('div', {
      staticClass: "media customer-testi m-2"
    }, [_c('img', {
      staticClass: "avatar avatar-small mr-3 rounded shadow",
      attrs: {
        "src": `${item.profile}`,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "media-body content p-3 shadow rounded bg-white position-relative"
    }, [_c('ul', {
      staticClass: "list-unstyled mb-0"
    }, [_c('li', {
      staticClass: "list-inline-item"
    }, [_c('i', {
      staticClass: "mdi mdi-star text-warning"
    })]), _vm._v(" "), _c('li', {
      staticClass: "list-inline-item"
    }, [_c('i', {
      staticClass: "mdi mdi-star text-warning"
    })]), _vm._v(" "), _c('li', {
      staticClass: "list-inline-item"
    }, [_c('i', {
      staticClass: "mdi mdi-star text-warning"
    })]), _vm._v(" "), _c('li', {
      staticClass: "list-inline-item"
    }, [_c('i', {
      staticClass: "mdi mdi-star text-warning"
    })]), _vm._v(" "), _c('li', {
      staticClass: "list-inline-item"
    }, [_c('i', {
      staticClass: "mdi mdi-star text-warning"
    })])]), _vm._v(" "), _c('p', {
      staticClass: "text-muted mt-2"
    }, [_vm._v("\" " + _vm._s(item.message) + " \"")]), _vm._v(" "), _c('h6', {
      staticClass: "text-primary"
    }, [_vm._v("\n          - " + _vm._s(item.name) + "\n          "), _c('small', {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(item.designation))])])])])]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Testimonial.vue?vue&type=template&id=556aeb17&

// EXTERNAL MODULE: external "vue-carousel"
var external_vue_carousel_ = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Testimonial.vue?vue&type=script&lang=js&

/* harmony default export */ var Testimonialvue_type_script_lang_js_ = ({
  props: {
    testimonialData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  components: {
    Carousel: external_vue_carousel_["Carousel"],
    Slide: external_vue_carousel_["Slide"]
  }
});
// CONCATENATED MODULE: ./components/Testimonial.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Testimonialvue_type_script_lang_js_ = (Testimonialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Testimonial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Testimonialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a436b702"
  
)

/* harmony default export */ var Testimonial = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=testimonial.js.map