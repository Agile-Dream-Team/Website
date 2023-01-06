<script type="text/javascript">
import { ArrowUpIcon } from "vue-feather-icons";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

/**
 * Index-developer component
 */
export default {
  name: "e-textarea",

  components: {
    Navbar,
    Footer,
    VuePhoneNumberInput
  },
  data() {
    return {
      phoneNumber: null,
      results: null,
      terminos: false
    };
  },
  methods: {
    onUpdate(payload) {
      this.results = payload
    },
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<template>
  <div>
    <Navbar />
    <section class="section-contact">
      <div class="conta-div">
        <div class="container">
          <div class="building-div-center">
            <div class="building-div">
              <p class="building-contact-vision"><span class="text-primary">VISION</span></p>
            </div>
          </div>
          <div class="con-changes-contact-vision">
          </div>
          <div class="container-vision">
            <p> We envision a <span class="text-primary">future </span> where the best ideas flourish and provide great
              choices for customers to enrich their lives. Today, a few digital-native companies are <span
                class="text-primary">disrupting</span> almost every industry. Agile Dream Team believes in democratizing
              this capability—enabling all companies to build their own digital DNA to create life-changing
              products,<span class="text-primary">engage</span> their customers and empower employees.</p>
            <p>This vision requires a <span class="text-primary">global </span> network of talented people who can
              realize their full potential. We believe the best software will be built by those who are <span
                class="text-primary">inspired</span> by their work, can choose their work environment, and are rewarded
              for pure contribution—in the company of equally <span class="text-primary">passionate</span> colleagues.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="container-mission">
      <div class="p-mission">
        <p class="container-mission-p">MISSION</p>
      </div>
      <div class="p-mission">
        <p class="container-mission-c"><span class="text-primary">Agile Dream Team</span> accelerates the delivery of
          digital transformation applications,
          giving companies the agility to thrive in a <span class="text-primary">software-defined</span> world.</p>
      </div>
    </section>
    <section>
      <div class="con-get-team-2">
        <p class="t-get-team">GET A WORLD-CLASS TEAM</p>
        <p class="t-get-team">HAND-PICKED JUST FOR YOU</p>
      </div>
      <div class="container con-get-team">
        <div class="con-get-team">
          <p class="p-get-team">We deliver projects, not bodies. A typical <span class="text-primary"> Agile Dream Team
            </span> consists of all the key stakeholders needed for
            your application <span class="text-primary"> development </span> team, e.g. a PM, 2 developers, QA, and
            UI/UX
          </p>
        </div>
      </div>
      <div class="line-color-1">
        <div class="container con-get-team-color">
        </div>
      </div>
      <div class="line-color-2">
        <div class="container con-get-team-color-1">
        </div>
      </div>
      <div class="line-color-3">
        <div class="container con-get-team-color-2">
        </div>
      </div>
      <div class="line-color-4">
        <div class="container con-get-team-color-3">
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style">
            <div class="card features fea-primary bg-white-get rounded p-4 position-relative overflow-hidden border-0">
              <span class="h1 icon2 text-primary">
                <i class="uil uil-newspaper"></i>
              </span>
              <div class="card-body p-0 content">
                <h5 class="style-Launch-get">Christian Mejía</h5>
                <p class="style-body-get mb-0">Sr Back End Developer</p>
                <img src="../assets/images/perfil-1.png" class="img-get" alt="" />
                <p class="style-body-get-com mb-0">
                  Software Architecture, Continuous Integration
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style">
            <div class="card features fea-primary bg-white-get rounded p-4 position-relative overflow-hidden border-0">
              <span class="h1 icon2 text-primary">
                <i class="uil uil-newspaper"></i>
              </span>
              <div class="card-body p-0 content">
                <h5 class="style-Launch-get">Daria Lukyanchuk</h5>
                <p class="style-body-get mb-0">Project Manager</p>
                <img src="../assets/images/perfil-2.png" class="img-get" alt="" />
                <p class="style-body-get-com mb-0">
                  Leadership, Product Design
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style">
            <div class="card features fea-primary bg-white-get rounded p-4 position-relative overflow-hidden border-0">
              <span class="h1 icon2 text-primary">
                <i class="uil uil-newspaper"></i>
              </span>
              <div class="card-body p-0 content">
                <h5 class="style-Launch-get">Camila Ardila</h5>
                <p class="style-body-get mb-0">Sr Software Developer</p>
                <img src="../assets/images/perfil-3.png" class="img-get" alt="" />
                <p class="style-body-get-com mb-0">
                  Engineering, Front End Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <img src="../assets/images/perfil-1.png" class="img-get" alt="" />
      </div>
    </section>
    <section>
      <div class="container">
        <div class="building-div-center">
          <div class="building-div">
            <p class="building-contact-game">Let’s change the <span class="text-primary"> game </span> together</p>
          </div>
        </div>
        <div class="con-changes-contact-vision">
        </div>
        <div class="mt-3 game-center">
          <a href="javascript:void(0)" class="btn btn-primary btn-game mr-5 mt-2">Contact us</a>
        </div>
      </div>
    </section>
    <section class="section-contact">
      <Footer />
    </section>
    <!-- Footer End -->
    <!-- Back to top -->
    <a href="javascript: void(0);" class="btn btn-icon btn-primary back-to-top" id="back-to-top"
      v-scroll-to="'#topnav'">
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>
<style>
.modal-content {
  background-color: transparent;
}
</style>





