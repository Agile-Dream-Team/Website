exports.ids = [4];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Team.vue?vue&type=template&id=5df891e2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, _vm._l(_vm.teamData, function (item, index) {
    return _vm._ssrNode("<div class=\"col-lg-3 col-md-6 mt-4 pt-2\">", "</div>", [_vm._ssrNode("<div class=\"card team text-center border-0\">", "</div>", [_vm._ssrNode("<div class=\"position-relative\">", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", `${item.image}`) + " alt class=\"img-fluid avatar avatar-ex-large rounded-circle shadow\"> "), _vm._ssrNode("<ul class=\"list-unstyled social-icon team-icon mb-0 mt-4\">", "</ul>", [_vm._ssrNode("<li class=\"list-inline-item\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\" class=\"rounded\">", "</a>", [_c('facebook-icon', {
      staticClass: "fea icon-sm fea-social"
    })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"list-inline-item ml-1\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\" class=\"rounded\">", "</a>", [_c('instagram-icon', {
      staticClass: "fea icon-sm fea-social"
    })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"list-inline-item ml-1\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\" class=\"rounded\">", "</a>", [_c('twitter-icon', {
      staticClass: "fea icon-sm fea-social"
    })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"list-inline-item ml-1\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\" class=\"rounded\">", "</a>", [_c('linkedin-icon', {
      staticClass: "fea icon-sm fea-social"
    })], 1)])], 2)], 2), _vm._ssrNode(" <div class=\"card-body py-3 px-0 content\"><h5 class=\"mb-0\"><a href=\"javascript:void(0)\" class=\"name text-dark\">" + _vm._ssrEscape(_vm._s(item.name)) + "</a></h5> <small class=\"designation text-muted\">" + _vm._ssrEscape(_vm._s(item.designation)) + "</small></div>")], 2)]);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Team.vue?vue&type=template&id=5df891e2&

// EXTERNAL MODULE: external "vue-feather-icons"
var external_vue_feather_icons_ = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Team.vue?vue&type=script&lang=js&

/* harmony default export */ var Teamvue_type_script_lang_js_ = ({
  props: {
    teamData: {
      type: Array,
      default: []
    }
  },
  components: {
    FacebookIcon: external_vue_feather_icons_["FacebookIcon"],
    InstagramIcon: external_vue_feather_icons_["InstagramIcon"],
    TwitterIcon: external_vue_feather_icons_["TwitterIcon"],
    LinkedinIcon: external_vue_feather_icons_["LinkedinIcon"]
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./components/Team.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Teamvue_type_script_lang_js_ = (Teamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Team.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Teamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "66449aad"
  
)

/* harmony default export */ var Team = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=team.js.map