<template>
   <section class="blog_section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h5 class="sub_title">FRANCHISE ART</h5>
            <h2 class="sec_title">Latest News</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="blog_01">
              <div class="b01_thumb">
            <img :src="require('@/assets/images/blog/1.jpg')" alt="" />
              </div>
              <div class="b01_det">
                <div class="b01_meta">
                  <span
                    ><i class="bx bxs-time-five"></i
                    ><a href="#">Jan 16, 2020</a></span
                  >
                  <span class="b01m_com"
                    ><i class="bx bxs-comment-dots"></i
                    ><a href="#">3 Comments</a></span
                  >
                </div>
                <h3>
                  <a href="single_blog_post.html"
                    >Why Need To Use Financial Consulting Service?</a
                  >
                </h3>
                <a href="single_blog_post.html" class="learn_more_lnk"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="blog_01">
              <div class="b01_thumb">
                <img :src="require('@/assets/images/blog/2.jpg')" alt="" />
              </div>
              <div class="b01_det">
                <div class="b01_meta">
                  <span
                    ><i class="bx bxs-time-five"></i
                    ><a href="#">Oct 14, 2020</a></span
                  >
                  <span class="b01m_com"
                    ><i class="bx bxs-comment-dots"></i
                    ><a href="#">2 Comments</a></span
                  >
                </div>
                <h3>
                  <a href="single_blog_post.html"
                    >The Key to Efficient Loan Origination</a
                  >
                </h3>
                <a href="single_blog_post.html" class="learn_more_lnk"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="blog_01">
              <div class="b01_thumb">
                <img :src="require('@/assets/images/blog/3.jpg')" alt="" />
              </div>
              <div class="b01_det">
                <div class="b01_meta">
                  <span
                    ><i class="bx bxs-time-five"></i
                    ><a href="#">Aug 11, 2020</a></span
                  >
                  <span class="b01m_com"
                    ><i class="bx bxs-comment-dots"></i
                    ><a href="#">4 Comments</a></span
                  >
                </div>
                <h3>
                  <a href="single_blog_post.html"
                    >Can Your Business Grow With Our New Technology?</a
                  >
                </h3>
                <a href="single_blog_post.html" class="learn_more_lnk"
                  >Read More</a
                >
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