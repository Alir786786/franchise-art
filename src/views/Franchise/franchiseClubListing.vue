<template>
  <div>
    <section class="page_banner bg_18">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="pb_content text-center">
              <h2>Franchaise Club</h2>
              <p>
                <a href="index.html">Home</a><b>-</b
                ><span>Franchaise Club</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Page Banner Section End -->
    <!-- Blog Page Section Start -->
    <section class="comon_section blog_page">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-5">
            <div class="blog_sidebar">
              <div class="widget widget_search">
                <h3 class="widget-title">Search</h3>
                <form method="post" action="">
                  <input
                    type="search"
                    name="s"
                    id="s"
                    placeholder="Search Here"
                  />
                  <button type="submit"><i class="bx bx-search"></i></button>
                </form>
              </div>
              <div class="widget">
                <h3 class="widget-title">Club Categories</h3>
                <ul>
                  <li><a href="#">Business plans</a></li>
                  <li><a href="#">Competitive research</a></li>
                  <li><a href="#">Economics</a></li>
                  <li><a href="#">Finance & accounting</a></li>
                  <li><a href="#">Funding trends</a></li>
                  <li><a href="#">Innovation</a></li>
                </ul>
              </div>
              <div class="widget">
                <h3 class="widget-title">Explore Our Gallery</h3>
                <div class="gallery_images clearfix">
                  <a href="#"
                    ><img
                      :src="require('@/assets/images/widgets/2.jpg')"
                      alt=""
                  /></a>
                  <a href="#"
                    ><img
                      :src="require('@/assets/images/widgets/3.jpg')"
                      alt=""
                  /></a>
                  <a href="#"
                    ><img
                      :src="require('@/assets/images/widgets/4.jpg')"
                      alt=""
                  /></a>
                  <a href="#"
                    ><img
                      :src="require('@/assets/images/widgets/5.jpg')"
                      alt=""
                  /></a>
                  <a href="#"
                    ><img
                      :src="require('@/assets/images/widgets/6.jpg')"
                      alt=""
                  /></a>
                  <a href="#"
                    ><img
                      :src="require('@/assets/images/widgets/7.jpg')"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="widget">
                <h3 class="widget-title">Our Archives</h3>
                <ul>
                  <li><a href="#">January 2020</a></li>
                  <li><a href="#">February 2020</a></li>
                  <li><a href="#">March 2020</a></li>
                  <li><a href="#">April 2020</a></li>
                  <li><a href="#">May 2020</a></li>
                  <li><a href="#">June 2020</a></li>
                </ul>
              </div>
              <div class="widget">
                <h3 class="widget-title">Blog Tags</h3>
                <div class="tagCloud clearfix">
                  <a href="#">Advisors</a>
                  <a href="#">Benchmarks</a>
                  <a href="#">Corporate</a>
                  <a href="#">Life</a>
                  <a href="#">Finance</a>
                  <a href="#">Consulting</a>
                  <a href="#">Planning</a>
                  <a href="#">Loan</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-7">
            <div class="blog_01 blog_large">
              <div class="b01_thumb">
                <img :src="require('@/assets/images/blog/4.jpg')" alt="" />
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
                  <span class="b01m_author"
                    ><i class="bx bxs-user-circle"></i>By:
                    <a href="#">Admin</a></span
                  >
                </div>
                <h3>
                  <a href="single_blog_post.html"
                    >Why Do I Need To Use Financial Consulting Service?</a
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <a href="single_blog_post.html" class="learn_more_lnk"
                  >Read More</a
                >
              </div>
            </div>
            <div class="blog_01 blog_large">
              <div class="b01_thumb">
                <img :src="require('@/assets/images/blog/5.jpg')" alt="" />
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
                  <span class="b01m_author"
                    ><i class="bx bxs-user-circle"></i>By:
                    <a href="#">Admin</a></span
                  >
                </div>
                <h3>
                  <a href="single_blog_post.html"
                    >The Key to Efficient Commercial Loan Origination</a
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <a href="single_blog_post.html" class="learn_more_lnk"
                  >Read More</a
                >
              </div>
            </div>
            <div class="blog_01 blog_large">
              <div class="b01_thumb">
                <img :src="require('@/assets/images/blog/6.jpg')" alt="" />
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
                  <span class="b01m_author"
                    ><i class="bx bxs-user-circle"></i>By:
                    <a href="#">Admin</a></span
                  >
                </div>
                <h3>
                  <a href="single_blog_post.html"
                    >Can Your Business Grow With Our New Technology?</a
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <a href="single_blog_post.html" class="learn_more_lnk"
                  >Read More</a
                >
              </div>
            </div>
            <div class="blog_01 blog_large clearfix">
              <div class="b01_thumb">
                <img :src="require('@/assets/images/blog/7.jpg')" alt="" />
              </div>
              <div class="b01_det">
                <div class="b01_meta">
                  <span
                    ><i class="bx bxs-time-five"></i
                    ><a href="#">Jan 22, 2020</a></span
                  >
                  <span class="b01m_com"
                    ><i class="bx bxs-comment-dots"></i
                    ><a href="#">7 Comments</a></span
                  >
                  <span class="b01m_author"
                    ><i class="bx bxs-user-circle"></i>By:
                    <a href="#">Admin</a></span
                  >
                </div>
                <h3>
                  <a href="single_blog_post.html"
                    >Strategic and Commercial Approach With Issues</a
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <a href="single_blog_post.html" class="learn_more_lnk"
                  >Read More</a
                >
              </div>
            </div>
            <div class="row pt40">
              <div class="col-lg-12">
                <div class="fnc_pagination">
                  <a href="#" class="prevs"
                    ><i class="bx bx-left-arrow-alt"></i
                  ></a>
                  <a href="#">1</a>
                  <span class="current">2</span>
                  <a href="#">3</a>
                  <a href="#" class="nexts"
                    ><i class="bx bx-right-arrow-alt"></i
                  ></a>
                </div>
              </div>
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