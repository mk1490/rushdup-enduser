<template>
  <v-card
      flat
      class="mt-5"
      elevation="0">
    <v-card-text class="pt-9">
      <v-expansion-panels
          class="mb-5">
        <v-expansion-panel v-for="childItem in items">
          <v-expansion-panel-header
          >
            {{ childItem.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <v-list-item
                  :ripple="false"
                  @click="itemDetailsClick(item)"
                  v-for="item in childItem.episodeItems">
                <div class="d-inline-flex">
                  <v-icon>mdi-play</v-icon>
                  <span>{{ item.title }}</span>
                </div>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CourseDetails_EpisodeItems",
  props: {
    items: Array,
  },
  emits: ['clickCourseEpisode'],
  methods: {
    async itemDetailsClick(item) {
      this.$emit('clickCourseEpisode', item)
    }
  }
}
</script>

<style scoped>
.v-list-item {
  font-family: "IRAN Sans";
  font-size: 1.4rem !important;
}
</style>