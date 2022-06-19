<template>
  <div>
    <section class="page_banner bg_18">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="pb_content text-center">
              <h2>Contact Us</h2>
              <p>
                <a href="index.html">Home</a><b>-</b><span>Contact Us</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="comon_section contact_form_section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h5 class="sub_title">Contact Us</h5>
            <h2 class="sec_title">Get In Touch</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1 col-md-12">
            <div class="contact_form">
              <form method="post" action="" id="contact_form">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <input
                      type="text"
                      name="con_name"
                      class="required"
                      placeholder="Your Name *"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <input
                      type="email"
                      name="con_email"
                      class="required"
                      placeholder="Your Email *"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <input
                      type="text"
                      name="con_phone"
                      class="required"
                      placeholder="Your Phone *"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <select name="con_subject">
                      <option value="">I Would Like to Discuss</option>
                      <option value="Loan Management">Loan Management</option>
                      <option value="Investment Management">
                        Investment Management
                      </option>
                    </select>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <textarea
                      name="con_message"
                      class="required"
                      placeholder="Your Message *"
                    ></textarea>
                  </div>
                  <div class="col-lg-12 col-md-12 text-center">
                    <button
                      type="submit"
                      name="send_message"
                      class="fnc_btn reverses"
                    >
                      <span
                        >Send Message<i class="bx bx-right-arrow-alt"></i
                      ></span>
                    </button>
                    <img
                      :src="require('@/assets/images/loader.gif')"
                      alt=""
                      class="fn_loader"
                    />
                  </div>
                  <div class="col-lg-12 con_message"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Form Section End -->

    <!-- Contact Info Section Start -->
    <section class="contact_info_section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div class="icon_box_03 text-center">
              <i class="bx bxs-map"></i>
              <h3>Our Address</h3>
              <p>
                SAUDI ARABIA, RIYADH
                <br />
                Almalqa District, Aldahnaa Street
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="icon_box_03 text-center">
              <i class="bx bx-support"></i>
              <h3>Our Phones</h3>
              <p>+966 503 422 777<br />+966 501 422 999</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="icon_box_03 text-center">
              <i class="bx bx-at"></i>
              <h3>Our Emails</h3>
              <p>franchise@bdd.com.sa <br />broker@bdd.com.sa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>