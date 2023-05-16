<template>
  <v-container fluid>
    <div class="row">
      <div class="col-3">
        <v-card
            min-height="280"
            class="pa-2 mt-4 mx-3"
            outlined
            elevation="7"
            rounded
            shaped>
          <v-card-text class="pa-0 d-inline-block">
            <div class="d-block">
              <v-img
                  :src="model.image">
              </v-img>
            </div>
            <div class="d-block d-flex justify-center my-4">
                <span class="d-flex">
                  {{ model.title }}
                </span>
            </div>
            <div class="d-block">
              <p>{{ $t('myCourses.lessonCounts', {count: model.lessonCounts}) }}</p>
            </div>
            <div class="d-block">
              <v-progress-linear
                  dir="rtl"
                  color="red"
                  :height="10"
                  :value="model.progress">
                <template
                    v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }} درصد</strong>
                </template>
              </v-progress-linear>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div class="col">
        <!--        <video-player-->
        <!--            :src="model.video"-->
        <!--        />-->
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "CourseDetailsVideo",
  components: {},
  data() {
    return {
      player: null,
      model: {
        image: "https://iranbusinesscoach.com/wp-content/uploads/2020/09/cover-01-%D8%AF%D9%88%D8%B1%D9%87-%D9%BE%D8%A7%DB%8C%D9%87-%D8%A8%DB%8C%D8%B2%DB%8C%D9%86%D8%B3%E2%80%8C%DA%A9%D9%88%DA%86%DB%8C%D9%86%DA%AF-v3-1.jpg",
        title: null,
        lessonCounts: 50,
        progress: 10,
        video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      }
    }
  },
  mounted() {
    // this.player = videojs(this.$refs.videoPlayer, {}, () => {
    // });
  },
}
</script>

<style scoped>

</style>