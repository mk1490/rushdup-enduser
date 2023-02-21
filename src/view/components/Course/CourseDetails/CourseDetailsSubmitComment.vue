<template>
  <v-card elevation="5">
    <v-card-title>
      {{ $t('comment.title') }}
    </v-card-title>
    <v-card-text>
      <v-textarea
          outlined
          :placeholder="$t('comment.writeYourComment')">

      </v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary">
        {{ $t('comment.registerComment') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CourseDetailsSubmitComment"
}
</script>

<style scoped>

</style>