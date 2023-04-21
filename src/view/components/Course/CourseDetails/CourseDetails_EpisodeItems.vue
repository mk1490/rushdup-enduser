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

                  v-for="item in childItem.episodeItems">
                <v-list-item-content
                    @click="itemDetailsClick(item)">
                  <div class="d-inline-flex">
                    <v-icon>mdi-play</v-icon>
                    <span>{{ item.title }}</span>
                  </div>
                </v-list-item-content>
                <v-list-item-action>
                  <v-tooltip
                      color="green"
                      bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          v-bind="attrs"
                          v-on="on"
                          @click
                          icon>
                        <v-icon>
                          mdi-format-list-checks
                        </v-icon>
                      </v-btn>
                    </template>
                    شرکت در آزمون
                  </v-tooltip>
                </v-list-item-action>
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