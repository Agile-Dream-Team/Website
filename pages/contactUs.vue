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
  },
  head() {
    return {
      titleTemplate: "%s - clients",
      meta: [{
        hid: "description", name: "description", content: ""
      }]
    }
  }
};
</script>

<template>
  <div>
    <Navbar />
    <section class="section-contact">
      <div class="conta-div">
        <div class="con-changes-contact">
          <div class="building-div">
            <div>
              <p class="building-contact">Get in touch with the &nbsp; <span class="text-primary">Agile Dream
                  Team</span></p>
            </div>
            <div>
              <p class="building-text-contact">We'd like to ask you a few <span class="text-primary">questions</span> to
                better
                address your needs.
              </p>
              <p class="building-text-contact"> Please fill out the <span class="text-primary">form</span> below and we
                will contact you as <span class="text-primary">soon</span> as possible
                next
                complex <span class="text-primary">tech</span>questions</p>
            </div>
          </div>

        </div>
      </div>
      <div class="container">
        <div class="position-relative pb-4">
          <input type="text" name="text" id="textName" class="form-control color-input rounded" placeholder="first name"
            required />
        </div>
        <div class="position-relative pb-4 ">
          <input type="text" name="text" id="textName" class="form-control color-input rounded" placeholder="last name"
            required />
        </div>
        <div class="position-relative pb-4">
          <input type="email" name="email" id="emailsubscribe" class="form-control color-input rounded"
            placeholder="email" required />
        </div>
        <div class="position-relative pb-4">
          <VuePhoneNumberInput id="phoneNumber1" v-model="phoneNumber" clearable @update="onUpdate"
            class="color-input" />
        </div>
        <div class="position-relative pb-4">
          <input type="text" name="text" id="textName" class="form-control color-input  rounded" placeholder="job title"
            required />
        </div>
        <div class="position-relative pb-4">
          <input type="text" name="text" id="textName" class="form-control color-input  rounded"
            placeholder="company name" required />
        </div>
        <p class="form-text-color">What is your interest in the <span class="text-primary">Agile Dream Team</span>?</p>
        <input class="color-input " type="radio" id="uno" value="Uno" v-model="picked">
        <label class="form-text-color-1" for="uno"> Agile Dream Team services</label>
        <br>
        <input class="color-input" type="radio" id="Dos" value="Dos" v-model="picked">
        <label class="form-text-color-1" for="Dos"> Other</label>
        <div class="form-group">
          <label class="form-text-color" for="e-textarea">How can we help you?</label>
          <textarea id="e-textarea" class="form-control color-input " row="3" :value="value" v-on="listeners">
    </textarea>
        </div>
      </div>
      <div class="container">
        <div class="style-Schedule-2">
          <NuxtLink to="/ContactUs">
            <a class="btn btn-primary btn-call-p" onclick="">Submit</a>
          </NuxtLink>
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





