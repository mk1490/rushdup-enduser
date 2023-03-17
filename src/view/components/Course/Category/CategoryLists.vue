<template>
  <v-container>

    <div class="row">
      <div class="col-12">
        <header-navigation-widget
            :item-show-type="itemShowType"
            v-on:selectList="itemShowType = 1"
            v-on:selectGrid="itemShowType = 2"
            :title="{categoryName: selectedCategory !== null ? selectedCategory.name : ''}">

        </header-navigation-widget>
      </div>
      <div class="col-12 mt-4">
        <v-card
            flat>
          <v-card-text>
            <grid
                @onItemClick="itemClick"
                :items="mainListItems">
            </grid>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
import MainList from "@/view/components/Course/SharedComponent/List.vue";
import {category} from "@/locale/fa_IR/modules/cms";
import List from "@/view/components/Course/SharedComponent/List.vue";
import Grid from "@/view/components/Course/SharedComponent/Grid.vue";
import HeaderNavigationWidget from "@/view/components/Course/SharedComponent/HeaderNavigationWidget.vue";

export default {
  name: "CategoryLists",
  components: {HeaderNavigationWidget, Grid, List, MainList},
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
        this.mainListItems = data.map(f => {
          f.cover = f.cover !== null ? this.serverAddress + f.cover : null;
          return f;
        });
      }
    }
  },
  data() {
    return {
      itemShowType: 1,
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