<template>
  <nav id="fixed-navbar-id" class="header_03 isSticky">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 noPadding">
          <div class="header_03_wrap">
            <div class="row">
              <div class="col-lg-8">
                <nav class="menu_1">
                  <div class="menuButton">
                    <a href="#">Menu<i class="bx bx-menu"></i></a>
                  </div>
                  <ul>
                    <li class="active menu-item-has-children scroll">
                      <a href="#">Menu</a>
                      <ul class="sub-menu">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/#ourServices">Services</a></li>
                        <li><a href="/our-team">Our Team</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                      </ul>
                    </li>
                    <li class="">
                      <a href="/#workShop">WorkShop & Events</a>
                    </li>
                    <li class="">
                      <a href="/franhise-club-listing">Franchise Club</a>
                    </li>
                    <li class="">
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-lg-4">
                <div class="hdr_03">
                  <div class="office_locations">
                    <a href="#"
                      ><img :src="require('@/assets/images/flags/2.png')" alt="" /><span
                        >English</span
                      ></a
                    >
                    <div class="all_off_locations">
                      <a href="#"
                        ><img :src="require('@/assets/images/flags/1.png')" alt="" /><span
                          >عربي</span
                        ></a
                      >
                    </div>
                  </div>
                  <div class="access_btns">
                    <a href="#" class="src_btn"><i class="bx bx-search"></i></a>
                  </div>
                  <div class="access_btns">
                    <a href="#"><i class="bx bx-user"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      canFixedNav: false,
    };
  },
  mounted() {
    $(window).on("scroll", function () {
      let scroll = $(window).scrollTop()
      console.log('Scroll' , scroll)
      if (scroll > 10) {
        $("#fixed-navbar-id").addClass("fixed-top bg-back");
      } else {
        $("#fixed-navbar-id").removeClass("fixed-top bg-back");
      }
    });
  },
};
</script>

<style>
.bg-back{
  background-color: black !important;
}
</style>