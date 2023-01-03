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
      testimonialData: [
        {
          id: 1,
          profile: "images/client/01.jpg",
          message:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          name: "Thomas Israel",
          designation: "C.E.O",
        },
        {
          id: 2,
          profile: "images/client/02.jpg",
          message:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          name: "Barbara McIntosh",
          designation: "M.D",
        },
        {
          id: 3,
          profile: "images/client/03.jpg",
          message:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          name: "Carl Oliver",
          designation: "P.A",
        },
        {
          id: 4,
          profile: "images/client/04.jpg",
          message:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          name: "Christa Smith",
          designation: "Manager",
        },
        {
          id: 5,
          profile: "images/client/05.jpg",
          message:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          name: "Dean Tolle",
          designation: "Developer",
        },
        {
          id: 6,
          profile: "images/client/05.jpg",
          message:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          name: "Jill Webb",
          designation: "Designer",
        },
      ],
      teamData: [
        {
          image: "images/medical/01.jpg",
          name: "Ronny Jofra",
          designation: "Cardiologist",
        },
        {
          image: "images/medical/04.jpg",
          name: "Micheal Carlo",
          designation: "Surgeon",
        },
        {
          image: "images/medical/02.jpg",
          name: "Aliana Rosy",
          designation: "Physician",
        },
        {
          image: "images/medical/03.jpg",
          name: "Sofia Razaq",
          designation: "Chemist",
        },
      ],
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
        <div class="con-changes-contact">
          <div class="building-div">
            <div>
              <p class="building-contact">Get in touch with the &nbsp; <span class="text-primary">Agile Dream Team</span></p>
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





