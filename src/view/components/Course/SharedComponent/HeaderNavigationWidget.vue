<template>
  <div class="row">
    <div class="col">
      <h2>{{ $t('category.title', title) }}</h2>
    </div>
    <div class="col-auto">
      <div class="d-inline-flex align-center">
        <v-select
            hide-details
            outlined
            dense
            style="width: 140px"
            class="ml-3"
            :items="sortByItems"
            v-model="sortBy"
            label="مرتب سازی">

        </v-select>
        <v-btn
            @click="selectGrid"
            :color="itemShowType == 2 ? 'green': 'white'"
            class="sqaure-btn">
          <v-icon
              :color="itemShowType == 2 ?'white': 'green'">
            mdi-grid
          </v-icon>
        </v-btn>
        <v-btn
            @click="selectList"
            :color="itemShowType == 1 ?'green': 'white'"
            class="sqaure-btn mx-1">
          <v-icon
              :color="itemShowType != 2 ?'white': 'green'">
            mdi-format-list-bulleted
          </v-icon>
        </v-btn>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNavigationWidget",
  emits: ['selectGrid', 'selectList'],
  props: ['title', 'itemShowType'],
  methods: {
    selectGrid() {
      this.$emit('selectGrid')
    },
    selectList() {
      this.$emit('selectList')
    }
  },
  data() {
    return {
      sortBy: 0,
      sortByItems: [
        {text: 'قدیمی ترین', value: 0},
        {text: 'ارزان ترین', value: 1},
        {text: 'گران ترین', value: 2},
        {text: 'پرفروش ترین', value: 3},
      ],
    }
  }
}
</script>

<style scoped>

</style>