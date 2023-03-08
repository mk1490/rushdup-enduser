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
import {category} from "@/locale/fa_IR/modules/cms";

export default {
  name: "CategoryLists",
  components: {MainList},
  async created() {
    const categoryItems = this.$store.getters.categoryItems;
    await this.$store.dispatch('setCategory', categoryItems[categoryItems.findIndex(x => x.slug === this.$route.params.slug)]);
  },
  methods: {
    itemClick() {

    },
    async getData() {
      const [err, data] = await this.to(this.http.get(`course/list?categoryIdOrIds=${this.selectedCategory.id || this.$store.getters.selectedCategory}`));
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