<template>
  <div>
    <v-container
        style="width: 900px; justify-content: center"
        class="mb-6"
    >
      <v-row
          no-gutters
      >
        <v-col
            v-for="item in items"
            :key="item"
            :sm="6"
            :md="4"
        >
          <v-card
              min-height="280"
              class="pa-2 ma-4"
              outlined
              elevation="7"
              rounded
              shaped
              @click="itemClick(item)">
            <v-card-text class="pa-0 d-inline-block">
              <div class="d-block">
                <v-img
                    :src="item.image">
                </v-img>
              </div>
              <div class="d-block d-flex justify-center my-4">
                <span class="d-flex">
                  {{ item.title }}
                </span>
              </div>
              <div class="d-block">
                <p>{{ $t('myCourses.lessonCounts', {count: item.lessonCounts}) }}</p>
              </div>
              <div class="d-block">
                <v-progress-linear
                    dir="rtl"
                    color="red"
                    :height="10"
                    :value="item.progress">
                  <template
                      v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }} درصد</strong>
                  </template>
                </v-progress-linear>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MyCourses",
  data() {
    return {
      items: [],
    }
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        id: 1,
        image: "https://iranbusinesscoach.com/wp-content/uploads/2020/09/cover-01-%D8%AF%D9%88%D8%B1%D9%87-%D9%BE%D8%A7%DB%8C%D9%87-%D8%A8%DB%8C%D8%B2%DB%8C%D9%86%D8%B3%E2%80%8C%DA%A9%D9%88%DA%86%DB%8C%D9%86%DA%AF-v3-1.jpg",
        title: 'دوره تست',
        lessonCounts: 2,
        progress: 15
      })
    }
  },
  methods: {
    async itemClick(item) {
      await this.$router.push('CourseDetails/' + item.id)
    }
  }
}
</script>

<style scoped>

span {
  font-family: "IRAN Sans";
  font-size: 1.5rem !important;
  text-align: center;
}

::v-deep .v-progress-linear__content {
  font-family: "IRAN Sans" !important;
}

::v-deep .v-progress-linear {
  border-radius: 20px !important;
}
</style>