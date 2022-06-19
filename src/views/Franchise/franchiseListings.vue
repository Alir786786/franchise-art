<template>
    <div>
             <!-- Page Banner Section Start -->
        <section class="page_banner bg_18">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="pb_content text-center">
                            <h2>Franchises</h2>
                            <p><a href="index.html">Home</a><b>-</b><span>Franchises</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section class="comon_section case_page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="folio_nav shaf_filter">
                            <li class="active" data-group="all">All</li>
                            <li data-group="business">Business</li>
                            <li data-group="service">Service</li>
                            <li data-group="loan">Loan</li>
                            <li data-group="leasing">Leasing</li>
                            <li data-group="finance">Finance</li>
                        </ul>
                    </div>
                </div>
                <div class="row shafull_container">
                    <div class="col-lg-4 col-md-6 shaf_item" data-groups='["all", "finance", "leasing"]'>
                        <div class="case_03">
                            <div class="c03_thumb">
                                <img src="@/assets/images/case/10.jpg" alt=""/>
                                <div class="c01_cats">
                                    <a href="#">Finance</a>, <a href="#">Leasing</a>
                                </div>
                            </div>
                            <div class="c03_det text-center">
                                <h2><a href="single_case_studies.html">Business Development</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a @click="$route.push('/single-franhise')" class="learn_more_lnk">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 shaf_item" data-groups='["all", "business", "leasing"]'>
                        <div class="case_03">
                            <div class="c03_thumb">
                                <img src="@/assets/images/case/11.jpg" alt=""/>
                                <div class="c01_cats">
                                    <a href="#">Business</a>, <a href="#">Leasing</a>
                                </div>
                            </div>
                            <div class="c03_det">
                                <h2><a @click="$route.push('/single-franhise')">Banking Consulting</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a @click="$route.push('/single-franhise')" class="learn_more_lnk">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 shaf_item" data-groups='["all", "business"]'>
                        <div class="case_03">
                            <div class="c03_thumb">
                            <img src="@/assets/images/case/12.jpg" alt=""/>
                            <div class="c01_cats">
                                <a href="#">Business</a>, <a href="#">Investing</a>
                            </div>
                            </div>
                            <div class="c03_det">
                                <h2><a href="single_case_studies.html">Merger & Acquisition</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="single_case_studies.html" class="learn_more_lnk">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 shaf_item" data-groups='["all", "business", "service"]'>
                        <div class="case_03">
                            <div class="c03_thumb">
                            <img src="@/assets/images/case/13.jpg" alt=""/>
                            <div class="c01_cats">
                                <a href="#">Business</a>, <a href="#">Service</a>
                            </div>
                            </div>
                            <div class="c03_det">
                                <h2><a href="single_case_studies.html">Surface Logistics</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="single_case_studies.html" class="learn_more_lnk">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 shaf_item" data-groups='["all", "finance", "loan"]'>
                        <div class="case_03">
                            <div class="c03_thumb">
                            <img src="@/assets/images/case/14.jpg" alt=""/>
                            <div class="c01_cats">
                                <a href="#">Loans</a>, <a href="#">Finance</a>
                            </div>
                            </div>
                            <div class="c03_det">
                                <h2><a href="single_case_studies.html">Consumer Products</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="single_case_studies.html" class="learn_more_lnk">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 shaf_item" data-groups='["all", "leasing", "service"]'>
                        <div class="case_03">
                            <div class="c03_thumb">
                            <img src="@/assets/images/case/15.jpg" alt=""/>
                            <div class="c01_cats">
                                <a href="#">Leasing</a>, <a href="#">Service</a>
                            </div>
                            </div>
                            <div class="c03_det">
                                <h2><a href="single_case_studies.html">Energy & Environment</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="single_case_studies.html" class="learn_more_lnk">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 shaf_item" data-groups='["all", "finance", "loan"]'>
                        <div class="case_03">
                            <div class="c03_thumb">
                            <img src="@/assets/images/case/16.jpg" alt=""/>
                            <div class="c01_cats">
                                <a href="#">Loans</a>, <a href="#">Finance</a>
                            </div>
                            </div>
                            <div class="c03_det">
                                <h2><a href="single_case_studies.html">Constructing Global Assets</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="single_case_studies.html" class="learn_more_lnk">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 shaf_item" data-groups='["all", "finance", "loan"]'>
                        <div class="case_03">
                            <div class="c03_thumb">
                            <img src="@/assets/images/case/17.jpg" alt=""/>
                            <div class="c01_cats">
                                <a href="#">Loans</a>, <a href="#">Finance</a>
                            </div>
                            </div>
                            <div class="c03_det">
                                <h2><a href="single_case_studies.html">Financial Services</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="single_case_studies.html" class="learn_more_lnk">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 shaf_item" data-groups='["all", "business", "service"]'>
                        <div class="case_03">
                            <div class="c03_thumb">
                            <img src="@/assets/images/case/18.jpg" alt=""/>
                            <div class="c01_cats">
                                <a href="single_case_studies.html">Business</a>, <a href="#">Services</a>
                            </div>
                            </div>
                            <div class="c03_det">
                                <h2><a href="#">Travel & Aviation</a></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="single_case_studies.html" class="learn_more_lnk">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mtm5">
                    <div class="col-lg-12">
                        <div class="fnc_pagination">
                            <a href="#" class="prevs"><i class="bx bx-left-arrow-alt"></i></a>
                            <a href="#">1</a>
                            <span class="current">2</span>
                            <a href="#">3</a>
                            <a href="#" class="nexts"><i class="bx bx-right-arrow-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '../Home/Navbar.vue'
import TopNavbar from '../Home/TopNavbar.vue'
    export default {
  components: { Navbar, TopNavbar },
        
    }
</script>

<style lang="scss" scoped>

</style>