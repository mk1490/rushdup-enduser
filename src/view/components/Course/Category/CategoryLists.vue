<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        <h2>{{ $t('category.title', {categoryName: selectedCategory !== null ? selectedCategory.name : ''}) }}</h2>
      </v-card-title>
      <v-card-text>
        <main-list
            @onItemClick="itemClick"
            :items="mainListItems">
        </main-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
import MainList from "@/view/components/Course/SharedComponent/MainList.vue";

export default {
  name: "CategoryLists",
  components: {MainList},
  methods: {
    itemClick() {

    },
    async getData() {
      const [err, data] = await this.to(this.http.get(`course/list?categoryIdOrIds=${this.selectedCategory.id}`));
      if (!err) {
        this.mainListItems = data;
      }
    }
  },
  data() {
    return {
      mainListItems: [],
    }
  },
  computed: {
    ...mapGetters(['selectedCategory'])
  },
  watch: {
    'selectedCategory': {
      async handler(val) {
        await this.getData();
      }
    }
  }
}
</script>

<style scoped>

</style>