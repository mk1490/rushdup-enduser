<template>
  <v-dialog
      persistent
      v-model="visible">
    <v-card>
      <v-card-title>

      </v-card-title>
      <v-card-text>
        <video-player

            :options="options"
        >

        </video-player>
      </v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {videoPlayer} from "vue-video-player/src";

export default {
  name: "CourseDetails_VideoPlayer_Modal",
  components: {videoPlayer},
  props: {
    visible: Boolean,
  },
  data() {
    return {
      options: {
        height: 500,
        sources: [
          {
            type: 'video/mp4',
            src: 'http://vjs.zencdn.net/v/oceans.mp4'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>