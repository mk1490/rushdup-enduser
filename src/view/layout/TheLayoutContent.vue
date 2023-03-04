<template>
  <v-content>
    <transition
        name="fade-transform"
        mode="out-in"
    >
      <keep-alive>
        <v-container fluid class="container--fluid gray__bg">
          <router-view/>
        </v-container>
      </keep-alive>
    </transition>
  </v-content>
</template>

<script>
export default {
  name: 'TheLayoutContent',
  data: () => ({}),
};
</script>

<style scoped>
.container--fluid {
  padding-left: 10%;
  padding-right: 10%;
}

.gray__bg {
  background-color: #F5F5F5;
}
</style>
