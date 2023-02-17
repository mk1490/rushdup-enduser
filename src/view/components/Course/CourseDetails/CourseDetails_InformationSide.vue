<template>
  <v-card
      min-height="280"
      class="pa-2 mt-4 mx-3"
      outlined
      elevation="7"
      rounded
      shaped>
    <v-card-text class="pa-0 d-inline-block">
      <div class="d-block pa-0">
        <v-img
            :src="data.image">
        </v-img>
      </div>
      <div class="d-block d-flex justify-center my-4">
                <span class="d-flex course__title">
                  {{ data.title }}
                </span>
      </div>
      <div class="d-block">
        <p>{{ $t('myCourses.lessonCounts', {count: data.lessonCounts}) }}</p>
      </div>
      <div class="d-block">
        <v-progress-linear
            dir="rtl"
            color="red"
            :height="10"
            :value="data.progress">
          <template
              v-slot:default="{ value }">
            <strong>{{ Math.ceil(value) }} درصد</strong>
          </template>
        </v-progress-linear>
      </div>
      <div class="d-block mt-5">
        <div class="row">
          <div class="col d-inline-flex">
                  <span>
                    {{ data.price }}
                  </span>
            <small>
              {{ $t('IRR') }}
            </small>
          </div>
          <div class="col-auto"></div>
        </div>
      </div>
      <div class="d-block mt-5">
        <div class="d-flex justify-center">
          <v-btn
              height="50"
              block
              class="white--text"
              color="green">
            {{ $t('course.addToCard') }}
          </v-btn>
        </div>
      </div>
      <div class="d-block">
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-right">
                {{ $t('course.studentCounts') + ':' }}
              </th>
              <td class="text-left">
                {{ data.studentCounts }}
              </td>
            </tr>
            <tr>
              <th class="text-right">
                {{ $t('course.timeDuration') + ':' }}
              </th>
              <td class="text-left">
                {{ data.studentCounts }}
              </td>
            </tr>
            </thead>
          </template>
        </v-simple-table>
      </div>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CourseDetails_InformationSide",
  props:{
    data: Object
  }
}
</script>

<style scoped>

</style>