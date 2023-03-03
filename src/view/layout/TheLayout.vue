<template>
  <div class="v-application--wrap">
    <the-layout-toolbar/>
    <the-layout-drawer class="d-sm-none d-sm-block d-md-none"/>
    <the-layout-content/>
    <the-layout-footer/>
  </div>
</template>

<script>
import TheLayoutDrawer from './TheLayoutDrawer.vue';
import TheLayoutToolbar from './TheLayoutToolbar.vue';
import TheLayoutContent from './TheLayoutContent.vue';
import TheLayoutFab from './TheLayoutFab.vue';
import TheLayoutToTopFab from './TheLayoutToTopFab.vue';
import TheLayoutFooter from './TheLayoutFooter.vue';

export default {
  async created() {
    if (!(await this.$store.dispatch('isAuth'))) {
      // window.location.href = '/#/SignIn';
    }
  },
  name: 'TheLayout',
  components: {
    TheLayoutDrawer,
    TheLayoutToolbar,
    TheLayoutContent,
    TheLayoutFab,
    TheLayoutToTopFab,
    TheLayoutFooter,
  },
  data: () => ({}),
};
</script>
