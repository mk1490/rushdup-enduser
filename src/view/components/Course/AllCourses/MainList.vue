<template>
  <div class="d-inline-flex">
    <div v-for="(item, index) in items">
      <v-card
          :height="360"
          :width="340">
        <v-responsive>
          <v-card-text class="pa-0">
            <div class="d-block">
              <v-img
                  @click="itemClick(item)"
                  :key="index"
                  :src="item.cover">
              </v-img>
            </div>
            <div
                @click="itemClick(item)"
                class="course__title mt-2 clickable">
              <v-btn
                  block
                  text
                  :href="`#/course-details/${item.slug}`">
                {{ item.title }}
              </v-btn>
            </div>
            <hr class="d-block"/>
            <div class="d-block pricing">
              <div class="row">
                <div class="col"></div>
                <div class="col-auto">
                  <span>
                    {{ convertAmount(item.price, this) }}
                  </span>
                  <small>
                    {{ $t('IRR') }}
                  </small>
                </div>
              </div>
            </div>

          </v-card-text>
        </v-responsive>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainList",
  emits: ['onItemClick'],
  props: {
    items: Array,
  },
  data() {
  },
  methods: {
    itemClick(item) {
      this.$emit('onItemClick', item)
    }
  }
}
</script>

<style scoped>

.course__title {
  font-family: IranYekanRegular;
  font-size: 1.6rem;
  font-weight: bold;
  font-stretch: normal;
  display: flex;
  justify-content: center;
}

hr {
  border-top: 2px dashed #494949;
  margin-top: 12px;
}

.pricing {
  font-family: "IRAN Sans" !important;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.pricing span {
  font-size: 1.4rem !important;
}

.pricing small {
  font-size: 0.8rem !important;
}

</style>