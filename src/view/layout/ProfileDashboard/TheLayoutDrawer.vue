<template>
  <v-navigation-drawer
      dark
      fixed
      style="background: #fff"
      app
      right
      absolute
      :value="profileNavbarShow"
      width="300">
    <the-layout-drawer-list>

    </the-layout-drawer-list>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from "vuex";
import TheLayoutDrawerList from "@/view/layout/ProfileDashboard/TheLayoutDrawerList.vue";

export default {
  name: "TheLayoutDrawer",
  components: {TheLayoutDrawerList},
  computed: {
    ...mapGetters(['profileNavbarShow'])
  }
}
</script>

<style scoped>

</style>