<template>
  <section class="team_section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h5 class="sub_title">FRANCHISE ART</h5>
            <h2 class="sec_title">Our Business</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="team_01">
              <img
                :src="require('@/assets/images/home_02/f_opp1.jpeg')"
                alt=""
              />
              <div class="t01_details">
                <h3><a href="#">Franchises</a></h3>
                <p>
                  we seek to lead franchise industry in<span
                    style="color: #edc31b"
                  >
                    GCC</span
                  >
                </p>
                <div class="t01_social">
                  <a class="learn_more_lnk" @click="$router.push('/franhise-listing')">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team_01">
              <img
                :src="require('@/assets/images/home_02/buisness.jpg')"
                alt=""
              />
              <div class="t01_details">
                <h3><a href="#">Business Opportunities</a></h3>
                <p>
                  We Provide Sustainable
                  <span style="color: #edc31b">Business Soulution</span>
                </p>
                <div class="t01_social">
                  <a class="learn_more_lnk" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team_01">
              <img
                :src="require('@/assets/images/home_02/real_state3.jpg')"
                alt=""
              />
              <div class="t01_details">
                <h3><a href="#">Real Estate Opportunities</a></h3>
                <p>
                  We define it, decide it
                  <span style="color: #edc31b">then</span> do it
                </p>
                <div class="t01_social">
                  <a class="learn_more_lnk" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>