<script>
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
} from "vue-feather-icons";
export default {
  data() {
    return {};
  },
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon,
  },
};
</script>

<template>
  <div>
    <!-- Footer Start -->
    <footer class="footer" id="footer">
      <div class="container">
        <hr class="line-hr" />
        <div class="row pt-4">
          <div class="col-lg-7 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <a href="#" class="logo-footer">
              <img src="../assets/images/logo-light.png" alt="" class="rounded img-fluid d-block shadow rounded" />
            </a>
            <p class="mt-4 style-hire">
              Hire an <span class="text-primary">agile dream team </span>that can provide
              efficiency, flexibility and transparency for your organization.
            </p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded">
                  <img src="../assets/images/linkedin.png" class="" alt="" />
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <img src="../assets/images/twitter.png" class="" alt="" />
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <img src="../assets/images/facebook.png" class="" alt="" />
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <img src="../assets/images/instagram.png" class="" alt="" />
                </a>
              </li>
            </ul>
            <!--end icon-->
          </div>
          <!--end col-->
          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <p class="company-style"><span class="text-primary ">Company</span></p>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/page-aboutus" class="text-foot style-li-com">
                  Services</router-link>
              </li>
              <li>
                <router-link to="/page-services" class="text-foot style-li-com">
                  Clients</router-link>
              </li>
              <li>
                <router-link to="/page-team" class="text-foot style-li-com">
                  Approach</router-link>
              </li>
              <li>
                <router-link to="/page-pricing" class="text-foot style-li-com">
                  Hire us</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <p class="company-style"><span class="text-primary">Newsletter</span></p>
            <p class="style-li-com">Sign up and receive the
              information you need to
              launch your next project.</p>
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="foot-subscribe form-group">

                    <label class="style-li-com">Write your email </label>
                    <div class="position-relative">
                      <input type="email" name="email" id="emailsubscribe" class="form-control rounded"
                        placeholder="name@email.com" required />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <input type="submit" id="submitsubscribe" name="send" class="btn btn-primary btn-block"
                    value="Subscribe" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
    <footer class="footer">
      <hr class="line-hr" />
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-left">
              <p class="mb-0 style-text-footer">
                © {{ new Date().getFullYear() }} Agile Dream Team.
              </p>
            </div>
          </div>
          <!--end col-->
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
  </div>


</template>
