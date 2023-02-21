<template>
  <v-card width="300">
    <v-card-text>
      
    </v-card-text>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Test",
  computed: {
    ...mapGetters(['cartItems'])
  }
}
</script>

<style scoped>

</style>