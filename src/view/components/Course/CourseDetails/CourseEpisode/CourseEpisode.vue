<template>
  <v-container class="row">
    <aside class="col-auto">
      <v-card>
        <v-card-text class="pa-0">
          <div class="d-block">
            <v-img
                :aspect-ratio="4/3"
                width="300"
                :src="cover">
            </v-img>
          </div>
          <v-list>
            <v-list-item
                @click="selectItem(item)"
                :class="item.id === currentCourseItemId ? `deep-orange--text`: ''"
                v-for="item in episodeItems">
              <v-list-item-content>
                <div class="d-inline-flex align-center">
                  <v-icon class="deep-orange--text">
                    mdi-play
                  </v-icon>
                  <span class="episode_item_title">
                    {{ item.title }}
                  </span>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </aside>
    <div class="col mx-5">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="row pa-14">
              <div class="col-12">
                <div class="r1_iframe_embed">
                  <iframe
                      src="https://player.arvancloud.ir/index.html?config=https://matink1490.arvanvod.ir/LgZYRMK5NB/oXZyE7WQPe/origin_config.json&skin=shaka"
                      style="border:0 #ffffff none;" name="ForBiggerFun" frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen="true"
                      webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-12 mt-15">
                    <h1>
                      {{ title }}
                    </h1>
                  </div>
                  <div class="col-12">
                    <v-card flat>
                      <v-card-text>
                        <v-textarea
                            filled
                            placeholder="کدوم نکته این درس برات کاربردی و جالب بود؟"
                            hide-details
                            dense
                            v-model="model.comment">

                        </v-textarea>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer/>
                        <v-btn
                            @click="submitComment"
                            color="primary">
                          ثبت نظر
                        </v-btn>
                      </v-card-actions>

                    </v-card>
                  </div>
                  <div class="col">
                    <h2>
                      نظرات کاربران
                    </h2>
                  </div>
                  <div class="col-auto">
                  </div>
                  <div
                      v-for="item in commentItems"
                      class="col-12">
                    <course-episode-comment-item
                        :title="getCommentSenderName(item)"
                        :content="item.content">

                    </course-episode-comment-item>
                  </div>
                </div>
              </div>
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import CourseEpisodeCommentItem
  from "@/view/components/Course/CourseDetails/CourseEpisode/course-episode-comment-item.vue";

export default {
  name: "CourseEpisode",
  components: {CourseEpisodeCommentItem},
  data() {
    return {
      currentCourseItemId: null,
      title: null,
      cover: null,
      episodeItems: [],
      commentItems: [],
      model: {
        postId: null,
        comment: null,
      }
    }
  },
  async created() {
    const route = this.$route.params;
    const [err, data] = await this.to(this.http.get(`/course/CourseEpisodeItems/${route['courseGroupId']}`));
    if (!err) {
      this.title = data.title;
      this.cover = this.serverAddress + `/core/image/course/${data['courseId']}`;
      this.currentCourseItemId = data.id;
      this.episodeItems = data.episodeItems;
      this.commentItems = data.commentItems;
    }
  },
  methods: {
    async selectItem(item) {
      const [err, data] = await this.to(this.http.get(`/course/CourseEpisodeItems/${this.$route.params['courseGroupId']}/${item.id}`));
      if (!err) {
        this.currentCourseItemId = item.id;
        this.title = data.title;
      }
    },
    async submitComment() {
      const [err, data] = await this.to(this.http.post(`/comment`, {
        comment: this.model.comment,
        postId: this.currentCourseItemId,
        rate: 0,
      }));
      if (!err) {
        this.model.comment = null;
        this.$swal.fire({
          icon: 'success',
          text: 'دیدگاه شما با موفقیت ثبت شد!',
        })
      }
    },
    getCommentSenderName(item) {
      const fullName = item.name == null ? '' : item.name + ' ' + item.family == null ? '' : item.family;
      return fullName;
    }
  }
}
</script>

<style scoped>
.episode_item_title {
  font-family: "IRAN Sans" !important;
  font-size: 1.3rem !important;
}

.r1_iframe_embed {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  padding-top: 56.25%;
}

.r1_iframe_embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

::v-deep .v-text-field__slot {
  font-size: 1.3rem !important;
}

.vjs-theme-arvan.arvan-fill {
  border-radius: 15px !important;
}
</style>