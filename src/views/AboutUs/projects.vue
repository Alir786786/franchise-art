<template>
  <div>
    <section class="service_section_2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h5 class="sub_title">PROJECTS</h5>
            <h2 class="sec_title">HERE, WE INCUBATE AMAZING PROJECTS</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 noPadding">
            <carousel
              class="service_02_slider"
              :items="3"
              :loop="true"
              :margin="10"
              :nav="false"
              :autoplay="true"
              :dots="false"
            >
              <div class="buisness project service_02 text-center">
                <img :src="require('@/assets/images/home_02/project1.png')" />
              </div>
              <div class="buisness project service_02 text-center">
                <img :src="require('@/assets/images/home_02/project2.png')" />
              </div>
              <div class="buisness project service_02 text-center">
                <img :src="require('@/assets/images/home_02/project3.png')" />
              </div>
              <div class="buisness project service_02 text-center">
                <img :src="require('@/assets/images/home_02/project4.png')" />
              </div>
              <div class="buisness project service_02 text-center">
                <img :src="require('@/assets/images/home_02/project5.png')" />
              </div>
              <div class="buisness project service_02 text-center">
                <img :src="require('@/assets/images/home_02/project6.png')" />
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