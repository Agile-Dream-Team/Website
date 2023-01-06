import { GlobalSettings } from "./store/environmentsettings.js";
const appEnv = process.env.NODE_ENV || "development";
import axios from "axios";

let dynamicRoutes = () => {
  const routes = axios.get;
  "https://jamstack.offilawyer.com//wp-json/wp/v2/posts?page=1&per_page=20"().then(
    (res) => {
      return res.data.map((post) => `/blog/${post.slug}`);
    }
  );
  // console.log(routes);
  return routes;
};

export default {
  server: {
    port: process.env.PORT || 8080,
    host: "0.0.0.0", // default: localhost
  },

  publicRuntimeConfig: {
    siteEnvironment: GlobalSettings[appEnv].siteEnvironment,
    LogRegBaseURL: GlobalSettings[appEnv].LogRegBaseURL,
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  generate: {
    fallback: true,
  },
  /*  router : {
    base: '/agiledreamteam/'
  },
 */
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Agile Dream Team",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Agile Dream Team description" },
    /*   { name: "format-detection", content: "telephone=no" }, */
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/style-dark.css",
    "~/assets/css/colors/purple.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/fontawesome.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  middleware: ["router-auth"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    ["vue-scrollto/nuxt", { duration: 300 }],
    "nuxtjs-mdi-font",
    "@nuxt/content",
    "@nuxtjs/apollo",
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://jamstack.offilawyer.com/graphql",
      },
    },
  },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
      }
    },
    babel: {
      compact: true,
    },
  },
};
