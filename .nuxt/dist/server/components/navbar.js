exports.ids = [2];
exports.modules = {

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=53d9b88c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<header id=\"topnav\"" + _vm._ssrClass("defaultscroll sticky", {
    'bg-white': _vm.isWhiteNavbar === true
  }) + ">", "</header>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_vm.navLight !== true ? _c('router-link', {
    staticClass: "logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "images/logo-dark.png",
      "height": "24",
      "alt": ""
    }
  })]) : _c('router-link', {
    staticClass: "logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "l-dark",
    attrs: {
      "src": "images/logo-dark.png",
      "height": "24",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "l-light",
    attrs: {
      "src": "images/logo-light.png",
      "height": "24",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" " + (_vm.isIcons !== true ? "<div class=\"buy-button\"><a href=\"https://1.envato.market/4n73n\" target=\"_blank\"" + _vm._ssrClass("btn", {
    'btn-light': _vm.navLight === true,
    'btn-primary': _vm.navLight !== true
  }) + ">Buy Now</a></div>" : "<!---->") + " "), _vm.isIcons === true ? _vm._ssrNode("<ul class=\"buy-button list-inline mb-0\">", "</ul>", [_vm._ssrNode("<li class=\"list-inline-item mb-0 developer-icon\">", "</li>", [_c('b-dropdown', {
    attrs: {
      "right": "",
      "variant": "link",
      "toggle-class": "text-decoration-none p-0 pr-2",
      "menu-class": "dd-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-0"
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function () {
        return [_c('i', {
          staticClass: "mdi mdi-magnify h4 text-muted"
        })];
      },
      proxy: true
    }], null, false, 3053606442)
  }, [_vm._v(" "), _c('div', {
    staticStyle: {
      "width": "300px"
    }
  }, [_c('form', [_c('input', {
    staticClass: "form-control border bg-white",
    attrs: {
      "type": "text",
      "id": "text",
      "name": "name",
      "placeholder": "Search..."
    }
  })])])])], 1), _vm._ssrNode(" <li class=\"list-inline-item mb-0 pr-2\"><a href=\"#\" class=\"btn btn-icon btn-soft-primary\"><i class=\"mdi mdi-github mdi-18px icons\"></i></a></li> <li class=\"list-inline-item mb-0 pr-2\"><a href=\"#\" class=\"btn btn-icon btn-soft-primary\"><i class=\"mdi mdi-stack-overflow mdi-18px icons\"></i></a></li> <li class=\"list-inline-item mb-0\"><a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#productview\" class=\"btn btn-icon btn-soft-primary\"><i class=\"mdi mdi-account-outline mdi-18px icons\"></i></a></li>")], 2) : _vm._e(), _vm._ssrNode(" <div class=\"menu-extras\"><div class=\"menu-item\"><a" + _vm._ssrClass("navbar-toggle", {
    open: _vm.isCondensed === true
  }) + "><div class=\"lines\"><span></span> <span></span> <span></span></div></a></div></div> "), _vm._ssrNode("<div id=\"navigation\">", "</div>", [_vm._ssrNode("<ul" + _vm._ssrClass("navigation-menu", {
    'nav-light': _vm.navLight === true
  }) + ">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\">Landing</a><span class=\"menu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu megamenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-saas"
    }
  }, [_vm._v("Saas")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-classic-saas"
    }
  }, [_vm._v("Classic Saas")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-agency"
    }
  }, [_vm._v("Agency")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-apps"
    }
  }, [_vm._v("Application")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-classic-app"
    }
  }, [_vm._v("Classic Application")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-studio"
    }
  }, [_vm._v("Studio")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-marketing"
    }
  }, [_vm._v("Marketing")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-enterprise"
    }
  }, [_vm._v("Enterprise")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-services"
    }
  }, [_vm._v("Service")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-payments"
    }
  }, [_vm._v("Payments")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-crypto"
    }
  }, [_vm._v("Cryptocurrency")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-hosting"
    }
  }, [_vm._v("Hosting & Domain")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-it-solution"
    }
  }, [_vm._v("IT Solution\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-business"
    }
  }, [_vm._v("Business")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-modern-business"
    }
  }, [_vm._v("Modern Business")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-corporate"
    }
  }, [_vm._v("Corporate Business")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-hotel"
    }
  }, [_vm._v("Hotel")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-developer"
    }
  }, [_vm._v("Developer\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-seo-agency"
    }
  }, [_vm._v("Seo Egency\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-construction"
    }
  }, [_vm._v("Construction\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-real-estate"
    }
  }, [_vm._v("\n                      Real Estate\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-hospital"
    }
  }, [_vm._v("\n                      Hospital\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-integration"
    }
  }, [_vm._v("\n                      Integration\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-landing-four"
    }
  }, [_vm._v("\n                      Landing Four\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-task-management"
    }
  }, [_vm._v("Task Management\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-email-inbox"
    }
  }, [_vm._v("Email Inbox\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-landing-one"
    }
  }, [_vm._v("Landing One\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-landing-two"
    }
  }, [_vm._v("Landing Two\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-landing-three"
    }
  }, [_vm._v("Landing Three\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-travel"
    }
  }, [_vm._v("Travel\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-blog"
    }
  }, [_vm._v("Blog\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/forums"
    }
  }, [_vm._v("Forums\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-personal"
    }
  }, [_vm._v("Personal")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-shop"
    }
  }, [_vm._v("Shop\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-info"
  }, [_vm._v("Updated")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-insurance"
    }
  }, [_vm._v("Insurance")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-coworking"
    }
  }, [_vm._v("Coworking")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-course"
    }
  }, [_vm._v("Course")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-online-learning"
    }
  }, [_vm._v("Online Learning")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-event"
    }
  }, [_vm._v("Event")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-single-product"
    }
  }, [_vm._v("Product")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-portfolio"
    }
  }, [_vm._v("Portfolio")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-job"
    }
  }, [_vm._v("Job")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-social-marketing"
    }
  }, [_vm._v("Social Media")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-digital-agency"
    }
  }, [_vm._v("Digital Agency")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-car-riding"
    }
  }, [_vm._v("Car Ride")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-customer"
    }
  }, [_vm._v("Customer")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-software"
    }
  }, [_vm._v("Software")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-ebook"
    }
  }, [_vm._v("E-Book")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/index-onepage"
    }
  }, [_vm._v("Saas\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-warning ml-2"
  }, [_vm._v("Onepage")])])], 1)], 2)])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\">Pages</a><span class=\"menu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\"> Company </a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-aboutus"
    }
  }, [_vm._v("\n                      About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-aboutus-two"
    }
  }, [_vm._v("\n                      About Us Two\n                      "), _c('span', {
    staticClass: "badge badge-success rounded"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-services"
    }
  }, [_vm._v("Services")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-history"
    }
  }, [_vm._v("History\n                      "), _c('span', {
    staticClass: "badge badge-success rounded"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-team"
    }
  }, [_vm._v("\n                      Team")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-pricing"
    }
  }, [_vm._v("Pricing")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\"> Account </a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/account-profile"
    }
  }, [_vm._v("Profile")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/account-members"
    }
  }, [_vm._v("Members\n                      "), _c('span', {
    staticClass: "badge badge-success rounded"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/account-works"
    }
  }, [_vm._v("Works\n                      "), _c('span', {
    staticClass: "badge badge-success rounded"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/account-messages"
    }
  }, [_vm._v("Messages\n                      "), _c('span', {
    staticClass: "badge badge-success rounded"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/account-payments"
    }
  }, [_vm._v("Payments\n                      "), _c('span', {
    staticClass: "badge badge-success rounded"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/account-setting"
    }
  }, [_vm._v("Setting")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-invoice"
    }
  }, [_vm._v("Invoice")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\">\n                  Shop\n                  <span class=\"badge badge-pill badge-success\">Added</span></a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/shop-grids"
    }
  }, [_vm._v("Product Grids")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/shop-lists"
    }
  }, [_vm._v("Product List\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/shop-product-detail"
    }
  }, [_vm._v("Product Details")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/shop-cart"
    }
  }, [_vm._v("Shop Cart")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/shop-checkouts"
    }
  }, [_vm._v("Checkouts")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/shop-myaccount"
    }
  }, [_vm._v("My Account")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\">\n                  Help center </a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/helpcenter-overview"
    }
  }, [_vm._v("Helpcenter")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/helpcenter-faqs"
    }
  }, [_vm._v("Faqs")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/helpcenter-guides"
    }
  }, [_vm._v("Guides")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/helpcenter-support-request"
    }
  }, [_vm._v("Support Call")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\"> Forums </a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/forums"
    }
  }, [_vm._v("Overview\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/forums-topic"
    }
  }, [_vm._v("Forum Topic\n                    ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/forums-comments"
    }
  }, [_vm._v("Forum Comments\n                    ")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\">\n                  Email Template</a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/email-confirmation"
    }
  }, [_vm._v("Confirmation")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/email-password-reset"
    }
  }, [_vm._v("Reset Password")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/email-alert"
    }
  }, [_vm._v("Alert")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/email-invoice"
    }
  }, [_vm._v("Invoice")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\">Careers\n                  <span class=\"badge badge-success rounded\">Added</span></a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "tag": "a",
      "to": "/page-jobs"
    }
  }, [_vm._v("Jobs")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "tag": "a",
      "to": "/page-jobs-sidebar"
    }
  }, [_vm._v("Jobs - Sidebar")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "tag": "a",
      "to": "/page-job-detail"
    }
  }, [_vm._v("Job Detail")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "tag": "a",
      "to": "/page-job-apply"
    }
  }, [_vm._v("Job Apply")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-job-company-list",
      "tag": "a"
    }
  }, [_vm._v("Company Listing\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-job-company"
    }
  }, [_vm._v("Company Detail")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "tag": "a",
      "to": "/page-job-candidate-list"
    }
  }, [_vm._v("\n                      Candidate Listing\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-job-candidate"
    }
  }, [_vm._v("Candidate Detail")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\"> Blog </a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-blog-grid"
    }
  }, [_vm._v("Blog Grid")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-blog-sidebar"
    }
  }, [_vm._v("Blog with Sidebar")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-blog-list"
    }
  }, [_vm._v("Blog Listing")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-blog-list-sidebar"
    }
  }, [_vm._v("Blog List & Sidebar")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-blog-detail"
    }
  }, [_vm._v("Blog Detail")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-blog-detail-two"
    }
  }, [_vm._v("Blog Detail 2\n                      "), _c('span', {
    staticClass: "badge badge-success rounded"
  }, [_vm._v("New")])])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\">\n                  Case Study </a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-cases"
    }
  }, [_vm._v("All Cases\n                      "), _c('span', {
    staticClass: "badge badge-success rounded"
  }, [_vm._v("New")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-case-detail"
    }
  }, [_vm._v("Case Detail\n                      "), _c('span', {
    staticClass: "badge badge-success rounded"
  }, [_vm._v("New")])])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\">\n                  Portfolio</a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-portfolio-modern"
    }
  }, [_vm._v("Portfolio Modern")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-portfolio-classic"
    }
  }, [_vm._v("Portfolio Classic")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-portfolio-grid"
    }
  }, [_vm._v("Portfolio Grid")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-portfolio-masonry"
    }
  }, [_vm._v("Portfolio Masonry")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-portfolio-detail"
    }
  }, [_vm._v("Portfolio Detail")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\">\n                  Auth Pages</a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/auth-login"
    }
  }, [_vm._v("Login")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/auth-cover-login"
    }
  }, [_vm._v("Login Cover")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/auth-login-three"
    }
  }, [_vm._v("Login Simple")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/auth-signup"
    }
  }, [_vm._v("Signup")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/auth-cover-signup"
    }
  }, [_vm._v("Signup Cover")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/auth-signup-three"
    }
  }, [_vm._v("Signup Simple")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/auth-re-password"
    }
  }, [_vm._v("Reset Password")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/auth-cover-re-password"
    }
  }, [_vm._v("Reset Password Cover")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/auth-re-password-three"
    }
  }, [_vm._v("Reset Password Simple")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\"> Utility </a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-terms"
    }
  }, [_vm._v("Terms of Services")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-privacy"
    }
  }, [_vm._v("Privacy Policy")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\"> Special \n                  <span class=\"badge badge-success rounded\">Added</span></a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/page-comingsoon"
    }
  }, [_vm._v("Coming Soon")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/page-comingsoon2"
    }
  }, [_vm._v("Coming Soon Two")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/page-maintenance"
    }
  }, [_vm._v("Maintenance")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-error"
    }
  }, [_vm._v("Error")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-thankyou"
    }
  }, [_vm._v("Thank you\n                      "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("New")])])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\"> Contact </a><span class=\"submenu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-contact-detail"
    }
  }, [_vm._v("Contact Detail")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-contact-one"
    }
  }, [_vm._v("Contact One")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-contact-two"
    }
  }, [_vm._v("Contact Two")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/page-contact-three"
    }
  }, [_vm._v("Contact Three")])], 1)], 2)], 2)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-submenu\">", "</li>", [_vm._ssrNode("<a href=\"javascript:void(0)\">Docs</a><span class=\"menu-arrow\"></span> "), _vm._ssrNode("<ul class=\"submenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/documentation"
    }
  }, [_vm._v("Documentation")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/changelog"
    }
  }, [_vm._v("Changelog")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/components"
    }
  }, [_vm._v("Components")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('router-link', {
    staticClass: "side-nav-link-ref",
    attrs: {
      "to": "/widget"
    }
  }, [_vm._v("Widget")])], 1)], 2)], 2)], 2), _vm._ssrNode(" <div class=\"buy-menu-btn d-none\"><a href=\"https://1.envato.market/4n73n\" target=\"_blank\" class=\"btn btn-primary\">Buy Now</a></div>")], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=53d9b88c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&
/**
 * Navbar component
 */
/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  data() {
    return {
      isCondensed: false
    };
  },
  props: {
    isWhiteNavbar: {
      type: Boolean
    },
    navLight: {
      type: Boolean
    },
    isIcons: {
      type: Boolean
    }
  },
  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };
    function onwindowScroll() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("topnav").classList.add("nav-sticky");
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky");
      }
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");
            }
          }
        }
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      this.isCondensed = !this.isCondensed;
      if (this.isCondensed) {
        document.getElementById("navigation").style.display = "block";
      } else document.getElementById("navigation").style.display = "none";
    },
    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling.nextSibling;
      if (nextEl && !nextEl.classList.contains("open")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("open");
        }
        nextEl.classList.add("open");
      } else if (nextEl) {
        nextEl.classList.remove("open");
      }
      return false;
    }
  }
});
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "730134e0"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=navbar.js.map