<template>
  <div class="page-content tm-sticky-parent">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'TheLayoutContent',
  data: () => ({}),
};
</script>

<style scoped>
.container--fluid {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

</style>
