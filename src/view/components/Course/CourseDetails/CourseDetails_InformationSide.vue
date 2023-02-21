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
              @click="addToCartOrCompletePurchaseFlowOrViewCourse"
              height="50"
              block
              class="white--text"
              color="green">
            {{ getCartButtonTitle() }}
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
import {mapGetters} from "vuex";

export default {
  name: "CourseDetails_InformationSide",
  props: {
    data: Object
  },
  data() {
    return {
      // 0 به منزله عدم خرید
      // 1 به منزله اضافه شده به سبد خرید
      // 2 به منزله خریداری شده
      purchaseStatus: 0,
    }
  },
  computed: {
    ...mapGetters(['cartItems'])
  },
  mounted() {
    console.log(this.cartItems, this.data['id'])
    console.log(this.cartItems.findIndex(x => x.id === this.data.id) !== -1)
    if (this.cartItems.findIndex(x => x.id === this.data.id) !== -1) {
      this.purchaseStatus = 1;
    }
  },
  methods: {
    async addToCartOrCompletePurchaseFlowOrViewCourse() {
      switch (this.purchaseStatus) {
        case 0:
          await this.$store.dispatch('addToCart', this.data);
          this.purchaseStatus = 1;
          break;
        case 1:
          break;
      }

    },
    getCartButtonTitle() {
      switch (this.purchaseStatus) {
        case 0 :
          return this.$t('course.addToCard');
        case 1:
          return this.$t('course.completePurchaseFlow');
        case 2:
          return this.$t('course.startLearning');
      }
    }
  }
}
</script>

<style scoped>

</style>