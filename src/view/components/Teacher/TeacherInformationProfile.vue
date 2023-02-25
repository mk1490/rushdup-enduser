<template>
  <v-container>
    <div class="d-flex">
      <div class="row">
        <div class="col-12 d-flex justify-center">
          <div>
            <div class="d-flex justify-center">
              <v-avatar
                  color="red"
                  :size="200">
                <v-img :src="model.avatar"></v-img>

              </v-avatar>
            </div>
            <div class="d-flex justify-center mt-2">
              <h2 class="teacher__title">
                {{ model.title }}
              </h2>
            </div>
            <div class="mt-8 d-flex flex-wrap">
              <v-card class="pa-6 text-center">
                <h3>
                  58 ساعت
                </h3>
                <span>sadlaspd</span>
              </v-card>
            </div>
          </div>
        </div>
      </div>


    </div>
  </v-container>
</template>

<script>
export default {
  name: "TeacherInformationProfile",
  data() {
    return {
      model: {
        avatar: null,
        title: null,
      }
    }
  },
  async created() {
    const [err, data] = await this.to(this.http.get(`/teacher/teacher-profile/${this.$route.params.slug}`));
    if (!err) {
      this.model.avatar = data.avatar;
      this.model.title = data.title;
    }
  },
  watch: {}
}
</script>

<style scoped>
.teacher__title {
  font-family: "IRAN Sans";
  font-size: 2rem !important;
}
</style>