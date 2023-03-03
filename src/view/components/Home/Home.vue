<template>
  <v-container
      class="pa-0"
      style="width: 100%;"
      fluid>
    <div class="row justify-center gray__bg" style="height: 300px">
      <div class="col-5 d-flex align-center">
        <div class="d-inline-block">
          <div class="d-block main__title">
            <span>دوره های آموزشی تخصصی</span>
            <br/>
            <span>
            متناسب با نیاز بازار کار
          </span>
          </div>

          <div class="d-flex search__bar align-center">
            <v-text-field
                rounded
                filled
                hide-details
                placeholder="جستجوی آموزش در حوزه های مختلف"
            >
            </v-text-field>
            <v-btn
                rounded
                height="52"
                shaped
                light
                elevation="0"
                class="white--text"
                color="orange">
              پیدا کنید!
            </v-btn>
          </div>
        </div>
      </div>
      <div class="col-auto d-flex align-center">
        <img src="@/assets/man-with-laptop.jpg">
      </div>
    </div>
    <div class="row gray__bg">
      <div class="col-12">
        <div class="full-width">
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255, 145, 145,0.7"/>
              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,145,145,0.5)"/>
              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,145,145,0.3)"/>
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-center">
          <h2>موضوعات منتخب</h2>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import Landing from "@/view/components/Home/Landing.vue";

export default {
  name: "Home",
  components: {Landing}
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
@import url('@/assets/styles/waves.css');

.main__title {
  font-family: IranYekanRegular;
  font-size: 3rem;
  font-weight: bolder;
  color: rgba(38, 154, 154, 1);
}

.search__bar {
  margin-top: 25px;
}

::v-deep .v-text-field--rounded {
  border-bottom-left-radius: 0px !important;
  border-top-left-radius: 0px !important;
}

::v-deep .v-btn--rounded {
  border-bottom-right-radius: 0px !important;
  border-top-right-radius: 0px !important;
}

.waves {
  margin-top: 150px;
}

h2 {
  font-weight: bolder;
  font-size: 2rem !important;
}

.gray__bg {
  background-color: #F5F5F5;
}
</style>