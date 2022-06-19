<template>
  <div>
    <footer class="footer_01">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 col-xl-4">
            <div class="widget">
              <div class="about_widget">
                <div class="aw_logo">
                  <a href="#"
                    ><img
                      :src="require('@/assets/images/logo_white.png')"
                      alt=""
                  /></a>
                </div>
                <p>
                  It is an incubator and a business accelerator operating under
                  the slogan we craft Saudi franchise It seeks to create an
                  innovative entrepreneurial environment that enables companies
                  and institutions to find solutions to challenges
                </p>
                <div class="fo_social">
                  <a href="https://www.instagram.com/franchiseartco/"
                    ><i class="bx bxl-instagram"></i
                  ></a>
                  <a href="https://twitter.com/franchiseartco1"
                    ><i class="bx bxl-twitter"></i
                  ></a>
                  <a href="https://t.me/franchiseart"
                    ><i class="bx bxl-telegram"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 col-xl-2">
            <div class="widget">
              <h3 class="widget-title">Help Center</h3>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 col-xl-2">
            <div class="widget">
              <h3 class="widget-title">Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Franchise Club</a></li>
                <li><a href="#">WorkShop</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Our Team</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 col-xl-4 pdl95">
            <div class="widget subscribe_widgets">
              <h3 class="widget-title">Stay Updated</h3>
              <div class="subscribe_content">
                <p>
                  Enter your email address into our subscribe form to keep
                  yourself updating with our newslatter.
                </p>
                <form method="post" action="#">
                  <input
                    type="email"
                    placeholder="Your Email *"
                    name="s_email"
                  />
                  <button type="submit" name="s_submit">
                    <i class="bx bx-right-arrow-alt"></i>
                  </button>
                </form>
                <div class="form_note text-right">
                  Get all <span>updates and offers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>