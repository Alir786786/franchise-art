<template>
  <section class="testimonial_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h5 class="sub_title">FRANCHISE ART</h5>
          <h2 class="sec_title">Our Partners</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 noPadding">
          <carousel
            class="testimonial_slider_01"
            :items="3"
            :loop="true"
            :margin="10"
            :nav="false"
            :autoplay="true"
            :dots="false"
          >
            <div class="testimonial_01 text-center">
              <div class="t01_head">
                <img
                  :src="require('@/assets/images/partners/partner1.svg')"
                  alt=""
                />
                <h3>X MARK</h3>
              </div>
            </div>
            <div class="testimonial_01 text-center">
              <div class="t01_head">
                <img
                  :src="require('@/assets/images/partners/partner2.svg')"
                  alt=""
                />
                <h3>360 X</h3>
              </div>
            </div>
            <div class="testimonial_01 text-center">
              <div class="t01_head">
                <img
                  :src="require('@/assets/images/partners/partner3.svg')"
                  alt=""
                />
                <h3>BIG LAB</h3>
              </div>
            </div>
            <div class="testimonial_01 text-center">
              <div class="t01_head">
                <img
                  :src="require('@/assets/images/partners/partner4.svg')"
                  alt=""
                />
                <h3>SHARE</h3>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
  
};
</script>

<style lang="scss" scoped>
</style>