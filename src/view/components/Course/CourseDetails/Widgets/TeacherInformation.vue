<template>
  <v-card
      class="mt-4"
      elevation="0">
    <v-card-text>
      <div class="row align-center">
        <div class="col">
          <div class="d-inline-flex align-center">
            <v-avatar
                size="50">
              <v-img
                  v-if="data['avatar']"
                  :src="data['avatar']">
              </v-img>

            </v-avatar>
            <div class="mr-2">
              <span class="teacher__title">{{ $t('ui.teacher') }}:</span>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <a
              class="teacher__link"
              :href="`/teacherProfile/${data['slug']}`">
            {{ data['title'] }}
          </a>
        </div>
        <div
            v-if="data['bio']"
            class="col-12">
          <p>
            {{ data['bio'] }}
          </p>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TeacherInformation",
  props: {
    data: Object,
  }
}
</script>

<style scoped>
.teacher__title {
  font-family: "IRAN Sans";
  font-size: 1.1rem;
}

.teacher__link {
  font-family: "IRAN Sans";
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
}

</style>