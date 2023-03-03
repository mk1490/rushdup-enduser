<template>
  <v-container>
    <file-uploader height="200"></file-uploader>
  </v-container>

</template>

<script>
import {mapGetters} from "vuex";
import FileUploader from "@/view/widget/FileUploader.vue";

export default {
  name: "Test",
  components: {FileUploader},
  computed: {
    ...mapGetters(['cartItems'])
  }
}
</script>

<style scoped>

</style>