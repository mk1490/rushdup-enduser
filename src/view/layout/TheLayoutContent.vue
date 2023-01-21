<template>
  <v-content>
    <transition
        name="fade-transform"
        mode="out-in"
    >
      <keep-alive>
        <v-container fluid class="container--fluid px-0">
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
