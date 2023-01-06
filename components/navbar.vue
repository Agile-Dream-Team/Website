<script>
/**
 * Navbar component
 */
export default {
  data() {
    return {
      isCondensed: false,
    };
  },
  props: {
    isWhiteNavbar: {
      type: Boolean,
    },
    navLight: {
      type: Boolean,
    },
    isIcons: {
      type: Boolean,
    },
  },

  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };

    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("topnav").classList.add("nav-sticky");
        document.getElementById("approach").classList.add("nav-approach");
        document.getElementById("clients").classList.add("nav-clients");
        document.getElementById("about").classList.add("nav-about");
        document.getElementById("footer").classList.add("nav-footer");
      } else {
        document.getElementById("clients").classList.remove("nav-clients");
        document.getElementById("topnav").classList.remove("nav-sticky");
        document.getElementById("about").classList.remove("nav-about");
        document.getElementById("approach").classList.remove("nav-approach");
        document.getElementById("footer").classList.remove("nav-footer");
      }

      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("approach-to-top").style.display = "inline";
        document.getElementById("clients-to-top").style.display = "inline";
        document.getElementById("back-to-top").style.display = "inline";
        document.getElementById("about").style.display = "inline";
        document.getElementById("footer").style.display = "inline";
      } else {
        document.getElementById("approach-to-top").style.display = "none";
        document.getElementById("back-to-top").style.display = "none";
        document.getElementById("clients-to-top").style.display = "none";
        document.getElementById("about-to-top").style.display = "none";
        document.getElementById("footer-to-top").style.display = "none";
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
    },
  },
};
</script>

<template>
  <div>
    <!-- Navbar STart -->
    <header id="topnav" class="defaultscroll sticky" :class="{ 'bg-white': isWhiteNavbar === true }">
      <div class="container">
        <!-- Logo container-->
        <div>
          <a class="logo" href="./" v-if="navLight !== true">
            <img src="../assets/images/logo-dark.png" height="65" alt="" />
          </a>
          <a class="logo" href="./" v-else>
            <img src="../assets/images/logo-dark.png" class="l-dark" height="24" alt="" />
            <img src="../assets/images/logo-light.png" class="l-light" height="24" alt="" />
          </a>
        </div>
        <ul class="buy-button list-inline mb-0" v-if="isIcons === true">
          <li class="list-inline-item mb-0 developer-icon">
            <b-dropdown right variant="link" toggle-class="text-decoration-none p-0 pr-2"
              menu-class="dd-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-0">
              <template #button-content>
                <i class="mdi mdi-magnify h4 text-muted"></i>
              </template>
              <div style="width: 300px">
                <form>
                  <input type="text" id="text" name="name" class="form-control border bg-white"
                    placeholder="Search..." />
                </form>
              </div>
            </b-dropdown>
          </li>
          <li class="list-inline-item mb-0 pr-2">
            <a href="#" class="btn btn-icon btn-soft-primary"><i class="mdi mdi-github mdi-18px icons"></i></a>
          </li>
          <li class="list-inline-item mb-0 pr-2">
            <a href="#" class="btn btn-icon btn-soft-primary"><i class="mdi mdi-stack-overflow mdi-18px icons"></i></a>
          </li>
          <li class="list-inline-item mb-0">
            <a href="javascript:void(0)" class="btn btn-icon btn-soft-primary" data-toggle="modal"
              data-target="#productview"><i class="mdi mdi-account-outline mdi-18px icons"></i></a>
          </li>
        </ul>
        <!--end login button-->
        <!--end login button-->
        <!-- End Logo container-->
        <div class="menu-extras">
          <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a class="navbar-toggle" @click="toggleMenu()" :class="{ open: isCondensed === true }">
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </div>
        </div>

        <div id="navigation">
          <!-- Navigation Menu-->
          <ul class="navigation-menu" :class="{ 'nav-light': navLight === true }">
            <li class="has-submenu">
              <a href="javascript:void(0)" id="approach-to-top" class="approach-a-li" v-scroll-to="'#services'"
                @click="null">Services</a>
            </li>

            <li class="has-submenu">
              <NuxtLink to="/clients" href="javascript:void(0)" @click="null" id="about-to-top" class="approach-a-li"
                v-scroll-to="'#clients'">Clients</NuxtLink>

            </li>
            <li class="has-submenu">
              <a href="javascript:void(0)" id="approach-to-top" class="approach-a-li" v-scroll-to="'#approach'"
                @click="null">Approach</a>
            </li>
            <li class="has-submenu">
              <a href="javascript:void(0)" @click="null" id="footer-to-top" v-scroll-to="'#footer'"
                class="approach-a-li">Hire us</a>
            </li>
          </ul>
          <!--end login button-->
        </div>
        <!--end navigation-->
      </div>
      <!--end container-->
    </header>
    <!--end header-->
    <!-- Navbar End -->
  </div>
</template>
