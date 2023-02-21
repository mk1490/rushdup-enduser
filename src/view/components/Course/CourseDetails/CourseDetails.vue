<template>
  <v-container fluid>
    <div class="row">
      <div class="col-3">
        <course-details_-information-side
            :data="model"
        ></course-details_-information-side>
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
    <course-details_-video-player_-modal
        v-if="modal.visible"
        :visible.sync="modal.visible"
    ></course-details_-video-player_-modal>
  </v-container>
</template>

<script>
import CourseDetails_InformationSide from "@/view/components/Course/CourseDetails/CourseDetails_InformationSide.vue";
import CourseDetails_VideoPlayer_Modal
  from "@/view/components/Course/CourseDetails/CourseDetails_VideoPlayer_Modal.vue";

export default {
  name: "CourseDetails",
  components: {CourseDetails_VideoPlayer_Modal, CourseDetails_InformationSide},
  async created() {
    const slugOrId = this.$route.params['slugOrId'];
    const [err, data] = await this.to(this.http.get(`/course/CourseDetails/${slugOrId}`));
    if (!err) {
      console.log(data)
      this.model.id = data.id;
      this.model.title = data.title;
      this.model.content = data.content;
      this.model.studentCounts = data.studentCounts;
      this.items[0].children = data.courseItems.map((f) => {
        return {
          title: f.title,
          children: f['episodeItems'].map((f) => {
            return {
              id: f.id,
              title: f.title,
            }
          })
        }
      })
    }
  },
  data() {
    return {
      modal: {
        visible: false,
      },
      model: {
        id: null,
        image: "https://iranbusinesscoach.com/wp-content/uploads/2020/09/cover-01-%D8%AF%D9%88%D8%B1%D9%87-%D9%BE%D8%A7%DB%8C%D9%87-%D8%A8%DB%8C%D8%B2%DB%8C%D9%86%D8%B3%E2%80%8C%DA%A9%D9%88%DA%86%DB%8C%D9%86%DA%AF-v3-1.jpg",
        title: null,
        content: null,
        price: 0,
        lessonCounts: 12,
        studentCounts: 12,
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
              title: 'قسمت اول',
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
      this.modal.visible = true;
      // await this.$router.push('CourseDetailsVideo/' + item.id)
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

.course__title {
  font-family: IranYekanRegular;
  font-weight: bold;
  font-size: 1.8rem !important;
}
</style>