exports.ids = [3];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Switcher.vue?vue&type=template&id=e9fea6c8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bg-light border p-3 pt-2 pb-2",
    staticStyle: {
      "left": "0px"
    },
    style: _vm.isVisible ? 'left: 0px' : 'left: -189px',
    attrs: {
      "id": "style-switcher"
    }
  }, [_vm._ssrNode("<h6 class=\"title text-center\">Select Your Color</h6> <ul class=\"pattern text-center mb-2\"><li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"default\"></a></li> <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"green\"></a></li> <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"purple\"></a></li> <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"red\"></a></li> <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"skyblue\"></a></li> <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"skobleoff\"></a></li> <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"cyan\"></a></li> <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"slateblue\"></a></li> <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"yellow\"></a></li></ul> <h6 class=\"title text-center pt-3 mb-0 border-top\">Theme Option</h6> <div class=\"text-center\"><a href=\"javascript: void(0);\" class=\"btn btn-sm w-100 btn-primary rtl-version t-rtl-light mt-2\">RTL</a> <a href=\"javascript: void(0);\" class=\"btn btn-sm w-100 btn-primary ltr-version t-ltr-light mt-2\">LTR</a> <a href=\"javascript: void(0);\" class=\"btn btn-sm w-100 btn-primary dark-rtl-version t-rtl-dark mt-2\">RTL</a> <a href=\"javascript: void(0);\" class=\"btn btn-sm w-100 btn-primary dark-ltr-version t-ltr-dark mt-2\">LTR</a> <a href=\"javascript: void(0);\" class=\"btn btn-sm w-100 btn-dark dark-version t-dark mt-2\">Dark</a> <a href=\"javascript: void(0);\" class=\"btn btn-sm w-100 btn-dark light-version t-light mt-2\">Light</a></div> <div class=\"bottom\"><a href=\"javascript: void(0);\" class=\"settings bg-white shadow d-block\"><i class=\"mdi mdi-cog ml-1 mdi-24px position-absolute mdi-spin text-primary\"></i></a></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Switcher.vue?vue&type=template&id=e9fea6c8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Switcher.vue?vue&type=script&lang=js&
/* harmony default export */ var Switchervue_type_script_lang_js_ = ({
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    ToogleMenu() {
      this.isVisible = !this.isVisible;
    },
    setTheme(theme) {
      document.getElementById("color-opt").setAttribute("href", "./css/colors/" + theme + ".css");
    },
    setDark() {
      document.getElementById("theme-opt").setAttribute("href", "./css/style-dark.css");
    },
    setLight() {
      document.getElementById("theme-opt").setAttribute("href", "./css/style.css");
    },
    darkRtl() {
      document.getElementById("theme-opt").setAttribute("href", "./css/style-dark-rtl.css");
    },
    darkLtr() {
      document.getElementById("theme-opt").setAttribute("href", "./css/style-dark.css");
    },
    setRtl() {
      document.getElementById("theme-opt").setAttribute("href", "./css/style-rtl.css");
    },
    setLtr() {
      document.getElementById("theme-opt").setAttribute("href", "./css/style.css");
    }
  }
});
// CONCATENATED MODULE: ./components/Switcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Switchervue_type_script_lang_js_ = (Switchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Switcher.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Switchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "69fb3d9e"
  
)

/* harmony default export */ var Switcher = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=switcher.js.map