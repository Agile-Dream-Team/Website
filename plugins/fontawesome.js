import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  faClock,
  faCalendarDays,
  faChessBishop,
  faEnvelope,
  faMap,
  faUser,
} from '@fortawesome/free-regular-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  fas,
  faClock,
  faCalendarDays,
  faChessBishop,
  faEnvelope,
  faMap,
  faUser
)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
