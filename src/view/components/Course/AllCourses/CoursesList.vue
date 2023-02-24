<template>
  <v-container fluid>
    <div class="row">
      <div class="col-md-3 d-none d-sm-none d-md-block">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              {{ $t('allCourses.filters.byEducationTitle') }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field
                  dense
                  hide-details
                  clearable
                  solo
                  :placeholder="$t('allCourses.form.educationTitle')"
                  v-model="model.educationTitle">
              </v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              {{ $t('allCourses.filters.byCategory') }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="row pb-3">
                <div class="col-12">
                  <v-text-field
                      dense
                      hide-details
                      clearable
                      solo
                      :placeholder="$t('allCourses.form.educationTitle')"
                      v-model="model.educationTitle">
                  </v-text-field>
                </div>
                <div
                    v-for="(item, index) in items.categoryItems"
                    class="col-12 pb-0 pt-0">
                  <v-checkbox
                      hide-details
                      dense
                      :value="item.id"
                      @change="onCategorySelectionChange(item.id, $event)"
                      :label="item.name">
                  </v-checkbox>
                </div>
              </div>

            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div class="col-md-9 col-sm-12">
        <main-list
            @onItemClick="itemClick"
            :items="items.mainListItems">
        </main-list>
      </div>
    </div>
  </v-container>
</template>

<script>
import MainList from "@/view/components/Course/SharedComponent/MainList.vue";
import qs from "qs";
import NoItemsForVisible from "@/view/components/Course/AllCourses/Widgets/NoItemsForVisible.vue";

export default {
  name: "CoursesList",
  components: {NoItemsForVisible, MainList},
  async mounted() {
    {
      this.getData().then();
      const [err, data] = await this.to(this.http.get(`/course/categories-list`));
      if (!err) {
        await this.$store.dispatch('initCategoryItems', data);
        this.items.categoryItems = data;
      }
    }

  },
  data() {
    return {
      items: {
        categoryItems: [],
        mainListItems: [],
      },
      model: {
        educationTitle: null,
        categoryTitle: null,
        selectedCategories: [],
      }
    }
  },
  methods: {
    itemClick(item) {
    },
    async onCategorySelectionChange(id, event) {
      if (event) {
        this.model.selectedCategories.push(id)
      } else {
        this.model.selectedCategories.splice(this.model.selectedCategories.findIndex(x => x.id === id), 1);
      }
      await this.getData();
    },
    async getData() {
      const queryParams = new URLSearchParams();
      this.model.selectedCategories.map((f) => {
        queryParams.append('categoryIdOrIds', f);
      })
      const [err, data] = await this.to(this.http.get('/course/list?' + queryParams, {}));
      if (!err) {
        this.items.mainListItems = data.map(f => {
          f.cover = f.cover !== null ? this.serverAddress + f.cover : '';
          return f;
        });
      }
    }
  }
}
</script>

<style scoped>

</style>