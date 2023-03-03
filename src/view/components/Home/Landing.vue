<template>
  <div>
    <div class="header">
      <!--Content before waves-->
      <div class="inner-header flex">
        <div class="d-block">
          <div class="d-block">
            <h1 class="title">آموزشی متفاوت را با ما تجربه کنید!</h1>
          </div>
          <div class="d-block mt-12">
            <v-btn
                class="white--text"
                style="background-color: #0f0065"
                rounded>
              شروع تدریس
            </v-btn>
          </div>
        </div>

      </div>


      <!--Waves Container-->
      <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"/>
          </g>
        </svg>
      </div>
      <!--Waves end-->
    </div>
    <!--Header ends-->

    <!--Content starts-->
    <div class="content flex">
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

body {
  margin: 0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
}

p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.header {
  position: relative;
  text-align: center;
  background: linear-gradient(60deg, rgba(255, 87, 34, 1) 0%, rgba(255, 152, 0, 1) 100%);
  color: white;
}

.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}


.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}


.title {
  font-family: "IRAN Sans" !important;
  font-size: 3.5rem !important;
  font-weight: bold;

}

.main-paragraph {
  font-family: "IRAN Sans" !important;
  font-size: 1.5rem !important;
}

</style>