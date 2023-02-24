<template>
  <v-card
      flat
      class="mt-5"
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
</template>

<script>
export default {
  name: "CourseDetails_EpisodeItems",
  props: {
    items: Array,
  }
}
</script>

<style scoped>

</style>