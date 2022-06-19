<template>
  <div class="home">
    <!-- Navbar -->

    <div>
      <!-- Slider -->

      <Slider></Slider>

      <!-- Process section -->

      <process-section></process-section>

      <!-- Our Business -->
      <div id="ourServices">
        <team-section></team-section>
      </div>

      <!-- Work shop -->
      <div id="workShop">
        <service-section></service-section>
      </div>

      <!-- Testimonial Section Start -->
      <testimonial-section></testimonial-section>

      <!-- Testimonial Section End -->

      <!-- Franchise Club Section Start -->

      <franchise-club-section></franchise-club-section>

      <!-- Franchise Club Section End -->

      <!-- CTA Section Start -->
    </div>

    <!-- Copyright Section End -->

    <!-- Back To Top Start -->
    <a href="#" id="backtotop"><i class="bx bxs-arrow-to-top"></i></a>
    <!-- Back To Top End -->
  </div>
</template>

<script>
import CopyRightsSection from "./copyRightsSection.vue";
import Cta from "./Cta.vue";
import Footer from "./footer.vue";
import FranchiseClubSection from "./franchiseClubSection.vue";
import Slider from "./slider.vue";
import Navbar from "./Navbar.vue";
import ProcessSection from "./processSection.vue";
import ServiceSection from "./serviceSection.vue";
import TeamSection from "./teamSection.vue";
import TestimonialSection from "./testimonialSection.vue";
import TopNavbar from "./TopNavbar.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import carousel from "vue-owl-carousel";

export default {
  name: "Home",
  components: {
    TopNavbar,
    Navbar,
    ProcessSection,
    TeamSection,
    FranchiseClubSection,
    Cta,
    Footer,
    CopyRightsSection,
    ServiceSection,
    TestimonialSection,
    Slider,
    // carousel
    // HelloWorld
  },
};
</script>
