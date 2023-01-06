<script>
import { ArrowUpIcon, ArrowRightIcon } from "vue-feather-icons";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import Team from "@/components/team";

/**
 * Index-developer component
 */
export default {

  components: {
    Navbar,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon,
    Testimonial,
    Team
  },
  data() {
    return {
      /*      testimonialData: [
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
           ], */
    };
  }
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100 home-wrapper overflow-hidden">
      <div class="container">
        <div class="row header-solutions align-items-center">
          <div class="col-lg-10 col-md-10">
            <div class="title-heading">
              <p class="heading">
                Hire a High-Performance<br />Agile
                <span class="text-primary">Software Development</span> Team
              </p>
              <p class="para-desc mb-0">
                Our agile approach to software development will unlock
                transparency and flexibility in your organization for a holistic
                impact.
              </p>

              <div class="mt-3">
                <a href="javascript:void(0)" class="btn btn-primary btn-team mr-5 mt-2">Find a team</a>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <section class="section" id="why">
      <div class="container">
        <p class="style-Team">
          Advantages of hiring an &nbsp;
          <span class="text-primary">Agile Dream Team</span> ?
        </p>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style">
            <div class="card features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0">
              <span class="h1 icon2 text-primary">
                <i class="uil uil-newspaper"></i>
              </span>
              <div class="card-body p-0 content">
                <img src="../assets/images/Bounding.png" class="" alt="" />
                <h5 class="style-Launch">Expertise</h5>
                <p class="style-body-1 mb-0">
                  Over 5,000+ projects delivered by the world's most talented
                  engineers
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style">
            <div class="card features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0">
              <span class="h1 icon2 text-primary">
                <i class="uil uil-newspaper"></i>
              </span>
              <div class="card-body p-0 content">
                <img src="../assets/images/hub.png" class="" alt="" />
                <h5 class="style-Launch">Fully-Managed</h5>
                <p class="style-body">
                  Success rates more than 3.6X greater than traditional IT
                  projects
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0 position-style">
            <div class="card features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0">
              <span class="h1 icon2 text-primary">
                <i class="uil uil-newspaper"></i>
              </span>
              <div class="card-body p-0 content">
                <img src="../assets/images/route.png" class="" alt="" />
                <h5 class="style-Launch">Speed</h5>
                <p class="style-body-3">Your team assembled in i week</p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0 position-style">
            <div class="card features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0">
              <span class="h1 icon2 text-primary">
                <i class="uil uil-newspaper"></i>
              </span>
              <div class="card-body p-0 content">
                <img src="../assets/images/build.png" class="" alt="" />
                <h5 class="style-Launch">We Own the Risk</h5>
                <p class="style-body">
                  Fixed project pricing eliminates cost overruns
                </p>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
        <div class="mt-3 style-Schedule">
          <NuxtLink to="/contactUs">
            <a class="btn btn-primary btn-call-p mr-5 mt-2" onclick="">contact us</a>
          </NuxtLink>
        </div>
      </div>
      <!--end container-->
    </section>
    <!-- Hero End -->

    <section class="section" id="services">
      <section class="con-sec-color">
        <div class="container">
          <div class="div-img-con">
            <div class="t-div-color-cen">
              <div class="t-div-color">
                <p class="title-div-color">Building tech projects on time</p>
                <p class="texto-div-color">
                  We deliver you the &nbsp;
                  <span class="text-primary"> perfect team </span> &nbsp; and combination
                  of skill sets
                </p>
                <p class="texto-div-color">
                  to complete your next &nbsp;
                  <span class="text-primary"> complex </span> tech build
                </p>
              </div>
            </div>

            <div class="row" style="
                padding-top: 6rem !important;
                padding-bottom: 6rem !important;
              ">
              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style">
                <div
                  class="card border-card features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0">
                  <div class="card-body p-0 content">
                    <div class="img-experience-A">
                      <img src="../assets/images/lan.png" class="" alt="" />
                    </div>
                    <div class="center-div-p">
                      <p class="mb-0 style-experience-1">
                        Blockchain Technology
                      </p>
                      <p class="style-experience-2 mb-0">Development</p>
                    </div>
                    <!--    <div class="style-ipsum">
                      <a class="style-experience mb-0">Lorem Ipsum</a>
                    </div> -->
                  </div>
                </div>
              </div>
              <!--end col-->
              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style">
                <div
                  class="card border-card features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0">
                  <div class="card-body p-0 content">
                    <div class="img-experience-A">
                      <img src="../assets/images/psychology.png" class="" alt="" />
                    </div>
                    <div class="center-div-p">
                      <p class="mb-0 style-experience-1">
                        Artificial Intelligenceand
                      </p>
                      <p class="style-experience-2 mb-0">Machine Learning</p>
                    </div>
                    <!--          <div class="style-ipsum">
                      <a class="style-experience mb-0">Lorem Ipsum</a>
                    </div> -->
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style">
                <div
                  class="card border-card features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0">
                  <div class="card-body p-0 content">
                    <div class="img-experience-A">
                      <img src="../assets/images/drama.png" class="" alt="" />
                    </div>
                    <div class="center-div-p">
                      <p class="mb-0 style-experience-1">Cloud Computing</p>
                    </div>
                    <!--      <div class="style-ipsum">
                      <a class="style-experience-a mb-0">Lorem Ipsum</a>
                    </div> -->
                  </div>
                </div>
              </div>
              <!--end col-->
              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style">
                <div
                  class="card border-card features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0">
                  <div class="card-body p-0 content">
                    <div class="img-experience-A">
                      <img src="../assets/images/dashboard.png" class="" alt="" />
                    </div>
                    <div class="center-div-p">
                      <p class="mb-0 style-experience-1">Custom Enterprise</p>
                      <p class="style-experience-2 mb-0">Development</p>
                    </div>
                    <!--  <div class="style-ipsum">
                      <a class="style-experience mb-0">Lorem Ipsum</a>
                    </div> -->
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <div class="position-relative">
              <img src="../assets/images/office.png" class="rounded img-fluid mx-auto d-block shadow rounded" alt="" />
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-5">
              <p class="style-Agile">
                Why hire an <span class="text-primary"> Agile Dream Team? </span>
              </p>
              <p class="style-Agile-text">
                We deliver the highest quality solutions On-Time and On-Budget
                by applying agile principles. We establish effective structures
                and processes that unlock performance throughout the project's
                lifecycle. Fully managed and wholly committed to your project
                team of experts.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!--end container-->
    </section>

    <!-- Start -->
    <section class="section" id="clients">
      <section class="con-sec-color">
        <div class="container">
          <div class="div-img-con">
            <div class="t-div-color-cen">
              <div class="t-div-color-2">
                <p class="title-div-color">Trusted by</p>
                <p class="texto-div-color">
                  We help &nbsp;<span class="text-primary">everyone</span>&nbsp; innovate
                  and succeed
                </p>
                <p class="texto-div-color">
                  with high-quality &nbsp;
                  <span class="text-primary">software</span>&nbsp; development
                </p>
              </div>
            </div>
            <div class="row img-center-div">
              <div class="col-md-4">
                <div class="position-relative">
                  <img src="../assets/images/repfabric.png" class="rep-img-1 rounded img-fluid mx-auto d-block"
                    alt="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative">
                  <img src="../assets/images/Avanto.png" class="avan-div-img rounded img-fluid mx-auto d-block"
                    alt="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative">
                  <img src="../assets/images/franktemple.png" class="logo-img-div rounded img-fluid mx-auto d-block"
                    alt="" />
                </div>
              </div>
            </div>
            <div class="row img-center-div-2">
              <div class="col-md-6">
                <div class="position-relative">
                  <img src="../assets/images/oky.png" class="p-img-4 img-fluid mx-auto d-block" alt="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="position-relative">
                  <img src="../assets/images/debtcom.png" class="rounded img-fluid mx-auto d-block" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--end container-->
    </section>

    <section class="section" id="approach">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mt-4 pt-2">
            <div class="style-mi">
              <p class="style-Agile">
                What is our approach to
                <span class="text-primary">team</span> assignment and how do we
                promote cultural &nbsp;<span class="text-primary">changes</span>?
              </p>
            </div>

            <ul class="nav nav-pills nav-justified flex-column bg-terciary rounded shadow p-3 mb-0 sticky-bar"
              id="pills-tab" role="tablist">
              <div class="li-p-nav">
                <li class="nav-item">
                  <div class="li-p-style">
                    <a class="nav-link text-box-style" id="agilityA" data-toggle="pill" href="#agility" role="tab"
                      aria-controls="agility" aria-selected="false">
                      <div class="text-center py-1">
                        <p class="mb-0">Agility Assessment</p>
                      </div>
                    </a><!--end nav link-->
                  </div>
                </li>
                <!--end nav item-->

                <li class="nav-item mt-2">
                  <div class="li-p-style">
                    <a class="nav-link text-box-style" id="technicalA" data-toggle="pill" href="#technical" role="tab"
                      aria-controls="technical" aria-selected="false">
                      <div class="text-center py-1">
                        <p class="mb-0">Technical Assessment</p>
                      </div>
                    </a>
                  </div>
                </li>
                <!--end nav item-->

                <li class="nav-item mt-2">
                  <div class="li-p-style">
                    <a class="nav-link text-box-style" id="TeamA" data-toggle="pill" href="#Team" role="tab"
                      aria-controls="Team" aria-selected="false">
                      <div class="text-center py-1">
                        <p class="mb-0">Team Assignment</p>
                      </div>
                    </a><!--end nav link-->
                  </div>
                </li>
                <!--end nav item-->
                <!--end nav item-->
              </div>
            </ul>
          </div>
          <!--end nav pills-->
          <div class="col-md-6 col-12 mt-4 pt-2">
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade bg-terciary show active">
                <div class="position-relative">
                  <img src="../assets/images/office-2.png" class="rounded img-fluid mx-auto d-block shadow rounded"
                    alt="" />
                </div>
              </div>
              <div class="tab-pane fade bg-terciary p-4 rounded shadow" id="agility" role="tabpanel"
                aria-labelledby="agilityA">
                <div class="align-items-center">
                  <div class="">
                    <div class="position-relative">
                      <img src="../assets/images/office-2.png" class="rounded img-fluid mx-auto d-block shadow rounded"
                        alt="" />
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <p class="title-agility-style">
                        <span class="text-primary">Agility Assessment</span>
                      </p>
                      <p class="container-text">
                        We will perform a high-level assessment and propose
                        changes that will enable your organization and your new
                        Agile Dream Team to be aligned with the objectives.
                      </p>
                    </div>
                  </div>
                  <!--end col-->
                </div>
              </div>
              <!--end teb pane-->

              <div class="tab-pane fade bg-terciary p-4 rounded shadow" id="technical" role="tabpanel"
                aria-labelledby="technicalA">
                <div class="align-items-center">
                  <div class="">
                    <div class="position-relative">
                      <img src="../assets/images/office-3.png" class="rounded img-fluid mx-auto d-block shadow rounded"
                        alt="" />
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <p class="title-agility-style">
                        <span class="text-primary">Technical Assessment</span>
                      </p>
                      <p class="container-text">
                        This review will help the team prioritize and plan the
                        work effectively. It will also help in deciding on the
                        technologies to be used and the roles needed for the
                        project
                      </p>
                    </div>
                  </div>
                  <!--end col-->
                </div>
              </div>
              <!--end teb pane-->

              <div class="tab-pane fade bg-terciary p-4 rounded shadow" id="Team" role="tabpanel"
                aria-labelledby="TeamA">
                <div class="row">
                  <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div>
                      <p class="title-agility-style-4">
                        <span class="text-primary">Agility Assessment</span>
                      </p>
                      <p class="container-text-4">
                        The new team structure and roles will be based on the
                        project's needs. The team will always be composed of a
                        delivery manager and a project manager/scrum master
                      </p>
                      <p class="container-text-4">
                        The delivery manager will ensure that the project is
                        delivered on time, within budget, and to the required
                        quality standard.
                      </p>
                      <p class="container-text-4">
                        The project manager/scrum master will ensure that the
                        team works effectively and efficiently and that all
                        deliverables are met.
                      </p>
                    </div>
                    <div>
                      <p class="title-agility-style-4">
                        <span class="text-primary">Duration</span>
                      </p>
                      <p class="container-text-4">1 week</p>

                      <a class="nav-item mt-2">
                        <div class="li-p-style">
                          <a class="nav-link text-box-style-4" data-toggle="pill" role="tab">
                            <div class="text-center py-1">
                              <p class="mb-0">Agility Assessment</p>
                            </div>
                          </a>
                        </div>
                      </a>
                      <a class="nav-item mt-2">
                        <div class="li-p-style">
                          <a class="nav-link text-box-style-4" data-toggle="pill" role="tab">
                            <div class="text-center py-1">
                              <p class="mb-0">Technical Assessment</p>
                            </div>
                          </a>
                        </div>
                      </a>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="position-relative">
                      <img src="../assets/images/office-4.png" class="rounded img-fluid mx-auto d-block shadow rounded"
                        alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <!--end teb pane-->
              <!--end teb pane-->
            </div>
            <!--end tab content-->
          </div>
          <!--end col-->
        </div>
      </div>
    </section>
    <!-- Start -->
    <section class="section" id="portfolio">
      <div class="container flex-con-cen">
        <div class="con-changes-2">
          <div>
            <div>
              <p class="building-2">
                <span class="text-primary">Project Portfolio & Case Studies</span>
              </p>
            </div>
            <div>
              <p class="building-text-2">
                Check out the
                <span class="text-primary">cutting-edge</span> solutions our
                Dream Team has built
              </p>
              <p class="building-text-3">
                for some of the world's
                <span class="text-primary">best</span>companies
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--  <div class="container">
        <div class="row studies-style">
          <div
            class="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style"
          >
            <div
              class="card border-card-A features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0"
            >
              <div class="card-body p-0 content">
                <div class="center-div-p">
                  <p class="style-title-avan">Avanto</p>
                  <p class="mb-0 style-title-com">
                    Avanto provides a cloud-based platform for companies to
                    carry out functions such as records, quotations, inventory,
                    traceability...
                  </p>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="con-end">
                      <img
                        src="../assets/images/Avantoo.png"
                        class="img-experience"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="b-more">
                      <a class="a-link">read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style"
          >
            <div
              class="card border-card-A features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0"
            >
              <div class="card-body p-0 content">
                <div class="center-div-p">
                  <p class="style-title-avan">Oky</p>
                  <p class="mb-0 style-title-com">
                    The number of people that live away from their families
                    continues to grow. In 2020, due to the pandemic...
                  </p>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="con-end">
                      <img
                        src="../assets/images/OKY.png"
                        class="img-experience-oki"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="b-more-2">
                      <a class="a-link">read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div
            class="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 position-style"
          >
            <div
              class="card border-card-A features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0"
            >
              <div class="card-body p-0 content">
                <div class="center-div-p">
                  <p class="style-title-avan">Debt.com</p>
                  <p class="mb-0 style-title-com">
                    Americans owe over $4 trillion, including over $1 trillion
                    in student loans and another $1 trillion in revolving debt,
                    like credit cards...
                  </p>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="con-end">
                      <img
                        src="../assets/images/debtcomm.png"
                        class="img-experience"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="b-more">
                      <a class="a-link">read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div> -->
    </section>

    <!--   <section class="section">
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title mb-4">Our Qualified Doctors</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>

        </div>

        <Team :teamData="teamData" />
      </div>

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">What Our Patients Says</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12 mt-4">
            <Testimonial :testimonialData="testimonialData" />
          </div>
        </div>
      </div>
    </section> -->

    <!-- Start -->
    <section class="section bg-light">
      <div class="container-fluid px-0">
        <div class="py-5 bg-terciary">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-7">
                <div class="section-title">
                  <div class="media">
                    <i class="uil uil-stethoscope-alt display-4 text-white title-dark"></i>
                    <div class="media-body ml-md-4 ml-3">
                      <h4 class="font-weight-bold text-light title-dark mb-1">
                        Put Agile Dream Team Solution Delivery to work for you.
                      </h4>
                      <p class="text-white-50 mb-0">
                        Build modern looking websites fast and easy using
                        Landrick.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-5 mt-4 mt-sm-0">
                <div class="text-md-right ml-5 ml-sm-0">
                  <a href="javascript:void(0)" class="btn btn-primary mr-2 mr-lg-2 mr-md-0 my-2" data-toggle="modal"
                    data-target="#productview"><i class="uil uil-file-alt"></i>CONTACT US</a>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end container-->
        </div>
        <!--end div-->
      </div>
    </section>
    <!--end container-->
    <!-- End -->
    <section class="section">
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
