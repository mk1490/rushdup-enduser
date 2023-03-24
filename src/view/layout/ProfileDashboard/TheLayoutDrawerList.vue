<template>
  <div class="d-inline-block full-width">
    <v-list
        light
        subheader
        two-line
        class="layout-drawer">
      <v-list-item
          to="/dashboard">
        <v-list-item-title>
          سفارشات أخیر
        </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>
      <v-subheader>بخش کاربری</v-subheader>
      <v-list-item
          to="/MyCourses">
        <v-list-item-title>
          دوره های من
        </v-list-item-title>
      </v-list-item>
      <v-list-item
          to="/Licenses">
        <v-list-item-title>
          گواهینامه های صادره
        </v-list-item-title>
      </v-list-item>
      <v-list-item
          to="/tickets">
        <v-list-item-title>
          تیکت
        </v-list-item-title>
      </v-list-item>
      <v-list-item
          to="/wallet">
        <v-list-item-title>
          کیف پول
        </v-list-item-title>
      </v-list-item>
      <v-list-item
          to="/transactions">
        <v-list-item-title>
          تراکنش و سفارشات
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "TheLayoutDrawerList",
  methods: {
    async navigateToRoute(route) {
      await this.$router.push(route);
    }
  }
}
</script>

<style scoped>

.v-list-item--active {
  /*background-color: #EF5350 !important;*/
  color: #0066ff !important;
}
</style>