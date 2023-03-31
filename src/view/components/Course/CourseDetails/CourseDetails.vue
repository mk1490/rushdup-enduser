<template>
  <v-container
      class="d-flex justify-center"
      fluid>
    <v-card
        color="transparent"
        flat>
      <div class="row">
        <div class="col-md-12">
          <v-card
              elevation="0"
              min-height="200"
              color="#FF7043">
            <v-card-text class="pa-0">
              <v-container>
                <div class="row">
                  <div
                      v-if="model.cover != null"
                      class="col-auto">
                    <v-img
                        :aspect-ratio="4/3"
                        width="300"
                        :src="serverAddress +model.cover">
                    </v-img>
                  </div>
                  <div class="col">
                    <div class="d-block">
                      <h1 class="summary__title">{{ model.title }}</h1>
                    </div>
                    <div class="d-block">
                      <p class="summary__content">
                        {{ model.content }}
                      </p>
                    </div>
                  </div>
                </div>
              </v-container>
            </v-card-text>
          </v-card>
        </div>
        <div class="col-md-3 col-sm-12">
          <course-details_-information-side
              :id="model.id"
              v-if="model"
              :data="model"
          ></course-details_-information-side>
          <teacher-information
              :data="model.teacher">

          </teacher-information>
        </div>
        <div class="col-md-9">
          <course-details_-episode-items
              v-if="model.items.length > 0"
              :items="model.items">
          </course-details_-episode-items>
        </div>
        <div class="col-md-12 col-sm-12">
          <course-details-submit-comment>

          </course-details-submit-comment>
        </div>
      </div>
    </v-card>
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
import CourseDetailsSubmitComment from "@/view/components/Course/CourseDetails/CourseDetailsSubmitComment.vue";
import CourseDetails_EpisodeItems from "@/view/components/Course/CourseDetails/CourseDetails_EpisodeItems.vue";
import TeacherInformation from "@/view/components/Course/CourseDetails/Widgets/TeacherInformation.vue";
import {mapGetters} from "vuex";

export default {
  name: "CourseDetails",
  components: {
    TeacherInformation,
    CourseDetails_EpisodeItems,
    CourseDetailsSubmitComment, CourseDetails_VideoPlayer_Modal, CourseDetails_InformationSide
  },
  computed: {
    ...mapGetters(['sessionId'])
  },
  async mounted() {
    const slugOrId = this.$route.params['slugOrId'];
    const [err, data] = await this.to(this.http.get(`/course/course-details/${slugOrId}?sessionId=${this.sessionId}`));
    if (!err) {
      this.model.id = data.id;
      this.model.title = data.title;
      this.model.content = data.content;
      this.model.price = data.price;
      this.model.cover = data.cover;
      this.model.studentCounts = data.studentCounts;
      this.model.teacher = data.teacher;
      this.model.isAddedToCart = data.isAddedToCart;
      this.model.isPurchased = data.isPurchased;
      this.model.items = data['courseItems'];
      // this.items = data.courseItems.map((f) => {
      //   return {
      //     title: f.title,
      //     children: f['episodeItems'].map((f) => {
      //       return {
      //         id: f.id,
      //         title: f.title,
      //       }
      //     })
      //   }
      // })
    }
  },
  created() {

  },
  data() {
    return {
      modal: {
        visible: false,
      },
      model: {
        id: null,
        // image: "https://iranbusinesscoach.com/wp-content/uploads/2020/09/cover-01-%D8%AF%D9%88%D8%B1%D9%87-%D9%BE%D8%A7%DB%8C%D9%87-%D8%A8%DB%8C%D8%B2%DB%8C%D9%86%D8%B3%E2%80%8C%DA%A9%D9%88%DA%86%DB%8C%D9%86%DA%AF-v3-1.jpg",
        cover: null,
        title: null,
        content: null,
        price: 0,
        teacher: null,
        lessonCounts: 12,
        studentCounts: 12,
        progress: 20,
        isAddedToCart: false,
        isPurchased: false,
        items: [
          // {
          //   targetType: 1,
          //   title: 'برای دریافت گواهینامه کلیک کنید',
          //   hasButton: true,
          //   buttonTitle: 'دریافت گواهینامه',
          // },
          // {
          //   targetType: 1,
          //   title: 'فصل اول',
          //   hasButton: false,
          //   buttonTitle: null,
          //   children: [
          //     {
          //       id: 1,
          //       title: 'قسمت اول',
          //     }
          //   ]
          // },

        ],
      }
    }
  },
  methods: {
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

.summary__title {
  font-family: IranYekanRegular !important;
  color: white;
  font-size: 1.3rem !important;
  margin-right: 20px;
}

.summary__content {
  font-family: "IRAN Sans" !important;
  font-size: 1.2rem !important;
  margin-top: 8px;
  color: white;
  margin-right: 20px;
}

::v-deep .v-image__image--cover {
  border-radius: 18px !important;
}
</style>