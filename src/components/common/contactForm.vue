<template>
  <div>
    <section class="quote_section" id="request_quote_section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h5 class="sub_title">Get a Quote</h5>
            <h2 class="sec_title">Request a Free Quote Today</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="quote_form">
              <form method="post" action="#">
                <div class="row">
                  <div class="col-md-6 col-lg-6">
                    <input
                      type="text"
                      name="q_fname"
                      placeholder="First Name *"
                    />
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <input
                      type="text"
                      name="q_lname"
                      placeholder="Last Name *"
                    />
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <input
                      type="email"
                      name="q_email"
                      placeholder="Your Email *"
                    />
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <input
                      type="text"
                      name="q_phone"
                      placeholder="Your Phone *"
                    />
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <select name="q_type">
                      <option value="">I Would Like to Discuss</option>
                      <option value="1">
                        It's About Mutual Fund Investment
                      </option>
                      <option value="2">Bank Loan Interest</option>
                    </select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <button type="submit" name="q_submit">
                      <span
                        >Request a Quote<i class="bx bx-right-arrow-alt"></i
                      ></span>
                    </button>
                    <div class="form_note text-right">
                      Join Now! With <span>50% Discount</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h5 class="client_notes text-center">
              Trusted by the most successful clients - big and small
            </h5>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <carousel
              :items="7"
              :loop="true"
              :margin="10"
              :nav="false"
              :autoplay="true"
              :dots="false"
            >
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet1.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet2.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet3.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet4.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet5.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet6.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet7.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet8.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet9.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet10.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet11.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet12.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet13.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet14.png')"
                  alt=""
                />
              </div>
              <div class="cs_item clients_images">
                <img
                  :src="require('@/assets/images/home_02/clinet15.png')"
                  alt=""
                />
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