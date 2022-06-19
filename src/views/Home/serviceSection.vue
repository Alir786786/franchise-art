<template>
  <section class="service_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h5 class="sub_title">FRANCHISE ART</h5>
          <h2 class="sec_title">WorkShop & Events</h2>
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
            <div class="service_01">
              <div class="sr01_thumb">
                <img
                  :src="require('@/assets/images/home_02/events2.jpg')"
                  alt="Mutual Funds"
                />
              </div>
              <div class="sr01_dtl text-center">
                <p class="event_date">
                  <i class="bx bxs-time-five"></i> Oct 14,2022
                </p>
                <h3><a href="single_service.html">Mutual Funds</a></h3>

                <a class="learn_more_lnk" href="single_service.html"
                  >Read More</a
                >
              </div>
            </div>
            <div class="service_01">
              <div class="sr01_thumb">
                <img
                  :src="require('@/assets/images/home_02/events2.jpg')"
                  alt="Mutual Funds"
                />
              </div>
              <div class="sr01_dtl text-center">
                <p class="event_date">
                  <i class="bx bxs-time-five"></i> Oct 14,2022
                </p>
                <h3><a href="single_service.html">Mutual Funds</a></h3>

                <a class="learn_more_lnk" href="single_service.html"
                  >Read More</a
                >
              </div>
            </div>
            <div class="service_01">
              <div class="sr01_thumb">
                <img
                  :src="require('@/assets/images/home_02/events2.jpg')"
                  alt="Mutual Funds"
                />
              </div>
              <div class="sr01_dtl text-center">
                <p class="event_date">
                  <i class="bx bxs-time-five"></i> Oct 14,2022
                </p>
                <h3><a href="single_service.html">Mutual Funds</a></h3>

                <a class="learn_more_lnk" href="single_service.html"
                  >Read More</a
                >
              </div>
            </div>
            <div class="service_01">
              <div class="sr01_thumb">
                <img
                  :src="require('@/assets/images/home_02/events2.jpg')"
                  alt="Mutual Funds"
                />
              </div>
              <div class="sr01_dtl text-center">
                <p class="event_date">
                  <i class="bx bxs-time-five"></i> Oct 14,2022
                </p>
                <h3><a href="single_service.html">Mutual Funds</a></h3>

                <a class="learn_more_lnk" href="single_service.html"
                  >Read More</a
                >
              </div>
            </div>
            <div class="service_01">
              <div class="sr01_thumb">
                <img
                  :src="require('@/assets/images/home_02/events2.jpg')"
                  alt="Mutual Funds"
                />
              </div>
              <div class="sr01_dtl text-center">
                <p class="event_date">
                  <i class="bx bxs-time-five"></i> Oct 14,2022
                </p>
                <h3><a href="single_service.html">Mutual Funds</a></h3>

                <a class="learn_more_lnk" href="single_service.html"
                  >Read More</a
                >
              </div>
            </div>
            <div class="service_01">
              <div class="sr01_thumb">
                <img
                  :src="require('@/assets/images/home_02/events2.jpg')"
                  alt="Mutual Funds"
                />
              </div>
              <div class="sr01_dtl text-center">
                <p class="event_date">
                  <i class="bx bxs-time-five"></i> Oct 14,2022
                </p>
                <h3><a href="single_service.html">Mutual Funds</a></h3>

                <a class="learn_more_lnk" href="single_service.html"
                  >Read More</a
                >
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="service_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h5 class="sub_title">FRANCHISE ART</h5>
        </div>
        <h2 class="sec_title">WorkShop & Events</h2>
      </div>
      <b-card-group deck>
        <b-card
          v-for="(club, index) in currentPageClubs"
          :key="index"
          :img-src="require('@/assets/images/home_02/events2.jpg')"
          img-alt="Img"
          img-top
        >
          <div class="sr01_dtl text-center"></div>
          <p class="event_date"><i class="bx bxs-time-five"></i> Oct 14,2022</p>
          <h3><a href="single_service.html">Mutual Funds</a></h3>

          <div slot="footer">
            <a class="learn_more_lnk" @click="$router.push('/franhise-listing')">Read More</a>

          </div>
        </b-card>
      </b-card-group>

      <div class="card-pagination">
        <div
          class="page-index"
          v-for="i in nbPages"
          :key="i"
          @click="goto(i)"
          :class="{ active: currentPage(i) }"
        ></div>
      </div>
    </div>
  </section> -->
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },

  data: function () {
    return {
      clubs: [
        {
          id: 1,
          description:
            "chelsea is the best club in the world and chelsea has a great player",
          price: 1000,
          country: "england",
        },
        {
          id: 2,
          description: "liverpool has salah",
          price: 900,
          country: "england",
        },
        { id: 3, description: "mu fans", price: 800, country: "england" },
        {
          id: 4,
          description: "city has a great coach. Thas is guardiola",
          price: 700,
          country: "england",
        },
        {
          id: 5,
          description: "arsenal player",
          price: 600,
          country: "england",
        },
        {
          id: 6,
          description: "tottenham in london",
          price: 500,
          country: "england",
        },
        {
          id: 7,
          description: "juventus stadium",
          price: 400,
          country: "italy",
        },
        {
          id: 8,
          description: "madrid sell ronaldo",
          price: 300,
          country: "spain",
        },
        {
          id: 9,
          description: "barcelona in the spain",
          price: 200,
          country: "spain",
        },
        {
          id: 10,
          description: "psg buys neymar at a fantastic price",
          price: 100,
          country: "france",
        },
      ],
      paginatedClubs: [],
      nbPages: 0,
      nbRowPerPage: 4,
      currentPageIndex: 0,
    };
  },
  computed: {
    formattedClubs() {
      return this.clubs.reduce((c, n, i) => {
        if (i % 4 === 0) c.push([]);
        c[c.length - 1].push(n);
        return c;
      }, []);
    },
    currentPageClubs() {
      this.createPages();

      return this.paginatedClubs[this.currentPageIndex];
    },
  },
  methods: {
    currentPage(i) {
      return i - 1 === this.currentPageIndex;
    },
    createPages() {
      let lengthAll = Object.keys(this.clubs).length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.nbRowPerPage) {
        this.paginatedClubs[this.nbPages] = this.clubs.slice(
          i,
          i + this.nbRowPerPage
        );
        this.nbPages++;
      }
    },
    goto(i) {
      this.currentPageIndex = i - 1;
    },
  },
};
</script>
<style scoped>
.card-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.page-index {
  margin-left: 10px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: #007bff;
}
.active {
  width: 20px;
  height: 20px;
  border-radius: 20px;
}
</style>