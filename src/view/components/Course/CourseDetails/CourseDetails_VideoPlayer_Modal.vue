<template>
  <v-dialog
      :persistent="true"
      width="800">
    <v-card>
      <v-card-title>

      </v-card-title>
      <v-card-text>
        <div class="d-flex justify-center">
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
            text
            color="red"
            @click="$emit('update:visible', false)"
            block>
          {{ $t('ui.close') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

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
        width: 800,
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