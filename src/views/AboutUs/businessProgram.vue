<template>
  <div>
    <section class="service_section_2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h5 class="sub_title">BUSINESS PROGRAMS</h5>
            <h2 class="sec_title">HERE, WE RUN OUR BUSINESS PROGRAMS</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 noPadding">
            <carousel
              class="service_02_slider"
              :items="3"
              :loop="true"
              :margin="10"
              :nav="true"
              :autoplay="true"
              :dots="false"
            >
              <div class="buisness service_02 text-center">
                <img :src="require('@/assets/images/home_02/1buisness.png')" />
                <h3>Business Brokrage</h3>
              </div>
              <div class="buisness service_02 text-center">
                <img :src="require('@/assets/images/home_02/2business.png')" />
                <h3>Technical & Innovation Acceleartion</h3>
              </div>
              <div class="buisness service_02 text-center">
                <img :src="require('@/assets/images/home_02/3buisness.png')" />
                <h3>Operation Management</h3>
              </div>
              <div class="buisness service_02 text-center">
                <img :src="require('@/assets/images/home_02/4buisness.png')" />
                <h3>Franchise Funding</h3>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
};
</script>

<style lang="scss" scoped>
</style>