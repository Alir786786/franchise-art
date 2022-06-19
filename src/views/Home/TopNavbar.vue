<template>
    <section class="header_up_section_3">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div class="text-start logo_02">
              <a @click="$router.push('/')">
                <img
                  :src="require('@/assets/images/logo_white.png')"
                  alt="Financeya"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-8 hide-mobile">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="info_item">
                  <i class="bx bx-support"></i>
                  <h5>Phone:</h5>
                  <h6 class="active">+966 503 422 777</h6>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="info_item">
                  <i class="bx bx-at"></i>
                  <h5>Email Us:</h5>
                  <h6>
                    <a href="mailto:ceo@franchiseart.sa"
                      >ceo@franchiseart.sa</a
                    >
                  </h6>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 noPaddingRight">
                <div class="info_item">
                  <i class="bx bxs-map"></i>
                  <h5>Visit Us:</h5>
                  <h6>Saudi Arabia</h6>
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