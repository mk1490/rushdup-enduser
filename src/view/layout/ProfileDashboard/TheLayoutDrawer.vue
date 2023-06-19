<template>
    <the-layout-drawer-list>

    </the-layout-drawer-list>
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