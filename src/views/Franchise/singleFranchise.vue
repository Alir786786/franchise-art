<template>
  <div>
    <top-navbar></top-navbar>
    <navbar></navbar>
    <!-- Page Banner Section Start -->
    <section class="page_banner bg_18">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="pb_content text-center">
              <h2>Franchises</h2>
              <p>Home <b>-</b> Franchises <b>-</b>Single Franchise</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="comon_section single_case_study">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-5 service_sidebar">
            <div class="widget service_list_widget">
              <h3 class="widget-title">Category Franchises</h3>
              <ul>
                <li>
                  <a href="">Business<i class="bx bx-right-arrow-alt"></i></a>
                </li>
                <li>
                  <a href="">Sport<i class="bx bx-right-arrow-alt"></i></a>
                </li>
                <li>
                  <a href="">Food<i class="bx bx-right-arrow-alt"></i></a>
                </li>
                <li>
                  <a href="">Finance<i class="bx bx-right-arrow-alt"></i></a>
                </li>
                <li>
                  <a href="">Clothes<i class="bx bx-right-arrow-alt"></i></a>
                </li>
              </ul>
            </div>

            <div class="widget join_team_widget">
              <div class="join_team dark_modes">
                <img src="@/assets/images/widgets/1.jpg" alt="" />
                <div class="jt_content">
                  <h5 class="sub_title">FRANCHISE ART</h5>
                  <h2 class="sec_title">
                    We Craft Saudi Arabia<br />Franchises
                  </h2>
                  <a href="#" class="fnc_btn reverses"
                    ><span
                      >Request Information<i
                        class="bx bx-right-arrow-alt"
                      ></i></span></a
                  ><br />
                  <a href="#" class="fnc_btn reverses"
                    ><span
                      >Visit Franch Website<i
                        class="bx bx-right-arrow-alt"
                      ></i></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-7">
            <div class="case_study_detail_content">
              <div class="case_meta">
                <div class="cm_item">
                  <h5>Franchise Name</h5>
                  <p>Nike</p>
                </div>
                <div class="cm_item bodered_item">
                  <h5>Member Since</h5>
                  <p>Jan 16, 2020</p>
                </div>
                <div class="cm_item">
                  <h5>Value</h5>
                  <p>$ 2.000.000 <b>-</b> $ 5.000.000</p>
                </div>
              </div>
              <div class="clearfix pdt25px mb44">
                <img
                  src="@/assets/images/case_details/9.jpg"
                  alt=""
                  class="block_img"
                />
              </div>
              <h3>Over View</h3>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the
                1960s...
              </p>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text since the 1500s.
              </p>

              <div  class="fnc_accordion" role="tablist">
                <b-card no-body class="mb-1 card">
                  <b-card-header  header-tag="header" class="p-1 card-header" role="tab">
                    <b-button class="text-start" block v-b-toggle.accordion-1 variant="light"
                      >Where To Purchase Theme License?</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    class="collapse show"
                    role="tabpanel"
                  >
                    <b-card-body class="card-body">
                      <b-card-text
                        >I start opened because <code>visible</code> is
                        <code>true</code></b-card-text
                      >
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button class="text-start" block v-b-toggle.accordion-2 variant="light"
                      >Accordion 2</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button class="text-start" block v-b-toggle.accordion-3 variant="light"
                      >Accordion 3</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
            <!-- <div class="case_related_area">
                            <h3>Related Case Study</h3>
                            <div class="row">
                                <div class="col-lg-12 noPadding">
                                    <div class="related_case_slider owl-carousel">
                                        <div class="case_01">
                                            <img src="images/case/1.jpg" alt=""/>
                                            <div class="c01_cats">
                                                <a href="#">Finance</a>, <a href="#">Leasing</a>
                                            </div>
                                            <div class="c01_det">
                                                <h2><a href="#">Business Development</a></h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <a href="#" class="learn_more_lnk">Read More</a>
                                            </div>
                                        </div>
                                        <div class="case_01">
                                            <img src="images/case/2.jpg" alt=""/>
                                            <div class="c01_cats">
                                                <a href="#">Business</a>, <a href="#">Leasing</a>
                                            </div>
                                            <div class="c01_det">
                                                <h2><a href="#">Banking Consulting</a></h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <a href="#" class="learn_more_lnk">Read More</a>
                                            </div>
                                        </div>
                                        <div class="case_01">
                                            <img src="images/case/3.jpg" alt=""/>
                                            <div class="c01_cats">
                                                <a href="#">Business</a>, <a href="#">Investing</a>
                                            </div>
                                            <div class="c01_det">
                                                <h2><a href="#">Merger & Acquisition</a></h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <a href="#" class="learn_more_lnk">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../Home/Navbar.vue";
import TopNavbar from "../Home/TopNavbar.vue";
export default {
  components: { TopNavbar, Navbar },
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>