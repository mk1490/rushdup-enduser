<template>
  <div class="v-application--wrap">
    <!--    <the-layout-toolbar></the-layout-toolbar>-->
    <the-layout-drawer></the-layout-drawer>
    <the-layout-content></the-layout-content>

  </div>
</template>

<script>
import TheLayoutToolbar from "@/view/layout/ProfileDashboard/TheLayoutToolbar.vue";
import TheLayoutDrawer from "@/view/layout/ProfileDashboard/TheLayoutDrawer.vue";
import TheLayoutContent from "@/view/layout/ProfileDashboard/TheLayoutContent.vue";

export default {
  name: "TheLayout",
  components: {TheLayoutContent, TheLayoutDrawer, TheLayoutToolbar},
  async created() {
  },
}
</script>

<style scoped>

</style>