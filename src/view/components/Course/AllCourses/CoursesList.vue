<template>
  <v-container fluid>
    <div class="row">
      <div class="col-3">
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
                  solo-inverted
                  :label="$t('allCourses.form.educationTitle')"
                  v-model="model.educationTitle">
              </v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              {{ $t('allCourses.filters.byCategory') }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="row">
                <div class="col-12">
                  <v-text-field
                      dense
                      hide-details
                      clearable
                      solo-inverted
                      :label="$t('allCourses.form.educationTitle')"
                      v-model="model.educationTitle">
                  </v-text-field>
                </div>
                <div
                    v-for="item in items.categoryItems"
                    class="col-12">
                  <v-checkbox
                      :label="item.title">


                  </v-checkbox>
                </div>
              </div>

            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div class="col-auto">
        <main-list
            @onItemClick="itemClick"
            :items="items.mainListItems">
        </main-list>
      </div>
    </div>
  </v-container>
</template>

<script>
import MainList from "@/view/components/Course/AllCourses/MainList.vue";

export default {
  name: "CoursesList",
  components: {MainList},
  async created() {
    const [err, data] = await this.to(this.http.get(`/course/list`));
    if (!err) {
      this.items.mainListItems = data.map(f => {
        f.cover = this.serverAddress + f.cover;
        return f;
      });
      console.log(this.items.mainListItems)
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
      }
    }
  },
  methods: {
    itemClick(item) {
      this.$router.push('CourseDetailsVideo/' + item.id)
    }
  }
}
</script>

<style scoped>

</style>