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
        <v-card
            class="mt-4">
          <v-card-text>
            <v-card
                class="ma-2"
                elevation="5">
              <v-card-text class="pt-9">
                <div v-for="item in items">
                  <v-card
                      v-if="!item.children || item.children.length == 0"
                      @click="certificateRequest"
                      class="mb-5">
                    <v-card-text class="row py-2">
                      <div class="col">
                        <v-icon></v-icon>
                        <span>
                        {{ item.title }}
                      </span>
                      </div>
                      <div
                          v-if="item.hasButton"
                          class="col-auto">
                        <v-btn
                            rounded
                            small
                            class="white--text"
                            color="orange">
                          {{ item.buttonTitle }}
                        </v-btn>
                      </div>
                    </v-card-text>
                  </v-card>
                  <v-expansion-panels
                      class="mb-5"
                      v-if="item.children">
                    <v-expansion-panel v-for="childItem in item.children">
                      <v-expansion-panel-header
                      >
                        {{ childItem.title }}
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-list>
                          <v-list-item
                              :ripple="false"
                              @click="itemDetailsClick(childItem)"
                              v-for="item in childItem.children">
                            {{ item.title }}
                          </v-list-item>
                        </v-list>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "CourseDetails",
  created() {
  },
  data() {
    return {
      model: {
        image: "https://iranbusinesscoach.com/wp-content/uploads/2020/09/cover-01-%D8%AF%D9%88%D8%B1%D9%87-%D9%BE%D8%A7%DB%8C%D9%87-%D8%A8%DB%8C%D8%B2%DB%8C%D9%86%D8%B3%E2%80%8C%DA%A9%D9%88%DA%86%DB%8C%D9%86%DA%AF-v3-1.jpg",
        title: null,
        lessonCounts: 12,
        progress: 20,
      },
      items: [
        {
          targetType: 1,
          title: 'برای دریافت گواهینامه کلیک کنید',
          hasButton: true,
          buttonTitle: 'دریافت گواهینامه',
        },
        {
          targetType: 1,
          title: 'فصل اول',
          hasButton: false,
          buttonTitle: null,
          children: [
            {
              id: 1,
              title: 'فصل اول',
              children: [
                {title: 'قسمت اول'}
              ]
            }
          ]
        },

      ],
    }
  },
  methods: {
    certificateRequest() {

    },
    async itemDetailsClick(item) {
      await this.$router.push('CourseDetailsVideo/' + item.id)
    }
  }
}
</script>

<style scoped>

span {
  font-family: IranYekanRegular;
  font-size: 1.2rem !important;
}

::v-deep .v-expansion-panel-header {
  font-family: IranYekanRegular;
  font-size: 1.2rem !important;
}
</style>