<template>
  <v-content>
    <transition
        name="fade-transform"
        mode="out-in">
      <keep-alive>
        <v-container
            class="container--fluid gray__bg">
          <router-view/>
        </v-container>
      </keep-alive>
    </transition>
  </v-content>
</template>

<script>
export default {
  name: "TheLayoutContent"
}
</script>

<style scoped>
.gray__bg {
  background-color: #F6F8FA;
  height: 100%;
}
</style>