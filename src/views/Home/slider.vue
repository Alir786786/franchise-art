<template>
  <section class="slider_03">
    <div class="rev_slider_wrapper">
      <div
        id="carouselExample"
        class="carousel slide w-100"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <!-- <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
          ></button>
        </div> -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              :src="require('@/assets/images/slider/slider_big.jpg')"
              alt="First slide"
            />
            <div class="carousel-caption d-md-block">
              <div class="carousel-caption-container mt--30">
                We Craft Saudi <span style="color: #edc31b">Franchise</span>
              </div>
              <div class="carusel-caption-sub">
                We Provide Sustainable
                <span style="color: #edc31b">Business Soulution</span>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              :src="require('@/assets/images/slider/slider_big.jpg')"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Anastasios G. Leventis</h5>
              <p>University House</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              :src="require('@/assets/images/slider/slider_big2.jpg')"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Faculty of Engineering</h5>
              <p>University Campus</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          data-bs-target="#carouselExample"
          type="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          data-bs-target="#carouselExample"
          type="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        <div class="slider-container-button">
          <a href="#features_section" class="fnc_btn reverses"
            ><span
              >Why Franchise Art<i class="bx bx-right-arrow-alt"></i></span></a
          ><a href="#" class="fnc_btn ml-2 fnc_light"
            ><span>Media Center<i class="bx bx-right-arrow-alt"></i></span
          ></a>
        </div>
    </div>
    <!-- <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
    </div> -->
  </section>
</template>

<script>
export default {};
</script>

<style>
.mt--30 {
  margin-top: -357px !important;
}

.slider-container-button{
  margin-top: -90px !important;
}

.carousel-caption-container {
  font-size: 57px;
  font-weight: 900;
}
</style>