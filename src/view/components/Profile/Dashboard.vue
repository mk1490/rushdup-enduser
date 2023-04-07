<template>
  <v-container>
    <div class="row">
      <div class="col-6">
        <v-card>
          <v-card-title>
            آخرین سفارشات
          </v-card-title>
          <v-card-text>

          </v-card-text>
        </v-card>
      </div>
      <div class="col-6">
        <v-card>
          <v-card-title>
            آخرین دوره ها
          </v-card-title>
          <v-card-text>

          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      table: {
        lastOrders: {
          headers: [],
          contents: [],
        },
        lastCourses: {
          headers: [],
          contents: [],
        }
      }
    }
  },
  async created() {
    const [err, data] = await this.to(this.http.get(`/profile/dashboard`));
    if (!err) {
      this.table.lastCourses.contents = data.lastCourses;
      this.table.lastOrders.contents = data.lastOrders;
    }
  }
}
</script>

<style scoped>

</style>