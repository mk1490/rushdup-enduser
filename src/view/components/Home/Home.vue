<template>
  <v-container
      class="container--fluid">
    <div class="header-background">
      <div class="row justify-center header-container">
        <div class="col-md-5 col-sm-9 col-md-6 d-flex align-center">
          <div class="d-inline-block">
            <div class="d-block main__title">
              <p>با رشدآپ، در کنار آموزش، درآمد کسب کنید!</p>
            </div>
            <div class="d-flex search__bar align-center">
              <v-text-field
                  v-model="model.search"
                  item-value="id"
                  item-text="title"
                  rounded
                  :append-icon="null"
                  hide-no-data
                  filled
                  hide-details
                  placeholder="جستجوی آموزش در حوزه های مختلف">
              </v-text-field>
              <v-btn
                  @click="applySearch"
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
      <div class="full-width">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" :fill="getCssLevelForWare(1)"/>
            <use xlink:href="#gentle-wave" x="48" y="3" :fill="getCssLevelForWare(2)"/>
            <use xlink:href="#gentle-wave" x="48" y="5" :fill="getCssLevelForWare(3)"/>
            <use xlink:href="#gentle-wave" x="48" y="7" :fill="getCssLevelForWare(4)"/>
          </g>
        </svg>
      </div>
    </div>
    <template
        v-for="item in homeItems"
        class="row">
      <div class="col-12">
        <template v-if="item.type === 0">
          <div class="d-flex flex-wrap justify-center">
            <v-card
                width="250"
                v-for="childItem in item.children">
              <v-card-text style="text-align: -webkit-center">
                <div class="d-block">
                  <v-img
                      :aspect-ratio="1/1"
                      :width="120"
                      :src="serverAddress+ '/api/public' +childItem.image"></v-img>
                </div>
                <div class="d-block">
                  <h6>
                    {{ childItem.title }}
                  </h6>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </template>
        <template v-if="item.type === 2">
          <div class="d-flex flex-wrap justify-center">
            <v-card
                width="100%"
                flat>
              <v-card-title>
                <div class="col">
                  {{ item.title }}
                </div>
                <div class="col-auto">
                  <a :href="item.url">
                    {{ item.urlTitle }}
                  </a>
                </div>
              </v-card-title>
              <v-card-text style="text-align: -webkit-center">
                <div class="d-block">
                  <!--                  <v-img-->
                  <!--                      :aspect-ratio="1/1"-->
                  <!--                      :width="120"-->
                  <!--                      :src="serverAddress+ '/api/public' + childItem.image"></v-img>-->
                </div>
                <div class="d-block">
                  <h6>
                    <!--                    {{ // childItem.title }}-->
                  </h6>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </template>
      </div>
    </template>
  </v-container>
</template>

<script>
import Landing from "@/view/components/Home/Landing.vue";
import {mapGetters} from "vuex";

export default {
  name: "Home",
  components: {Landing},
  async created() {
  },
  data() {
    return {
      search: {
        find: null,
      },
      items: {
        search: [],
      },
      model: {
        search: null,
      }
    }
  },
  watch: {
    'search.find': {
      async handler(val) {
        const [err, data] = await this.to(this.http.get(`/core/search-course?q=${val}`, {
          loader: false
        }));
        if (!err) {
          this.items.search = data;
        }
      }
    }
  },
  methods: {
    async applySearch() {
      await this.$router.push(`/search?q=${this.model.search}`)
    },
    getCssLevelForWare(level) {
      let alpha = 0;
      switch (level) {
        case 1:
          alpha = 0.7;
          break;
        case 2:
          alpha = 0.5;
          break;
        case 3:
          alpha = 0.3;
          break;
        case 4:
          alpha = 0.1;
          break;
      }
      return `rgba(20, 136, 204, ${alpha})`
    }
  },
  computed: {
    ...mapGetters(['homeItems'])
  }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
@import url('@/assets/styles/waves.css');

.main__title {
  font-family: IranYekanRegular;
  font-size: 2.5rem;
  font-weight: bolder;
  color: #fff;
}

@media (min-width: 320px) {
  .header-container {
    height: 600px;
  }
}

@media (min-width: 480px) {
  .header-container {
    height: 600px;
  }
}

@media (min-width: 801px) {
  .header-container {
    height: 500px;
  }
}

@media (min-width: 1025px) {
  .header-container {
    height: 900px;
  }
}


@media (min-width: 1281px) {
  .header-container {
    height: 300px;
  }
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

.header-background {
  background: #1488CC; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2B32B2, #1488CC); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.btn-grad {
  background-image: linear-gradient(to right, #ECE9E6 0%, #FFFFFF 51%, #ECE9E6 100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

</style>