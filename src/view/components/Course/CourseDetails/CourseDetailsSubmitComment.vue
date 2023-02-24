<template>
  <v-card elevation="5">
    <v-card-title>
      {{ $t('comment.title') }}
    </v-card-title>
    <v-card-text>
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="row">
            <div class="col-12">
              <v-text-field
                  :label="$t('comment.form.name')"
                  outlined
                  hide-details
                  dense
                  v-model="model.name"
              ></v-text-field>
            </div>
            <div class="col-12">
              <v-text-field
                  :label="$t('comment.form.email')"
                  outlined
                  hide-details
                  dense
                  v-model="model.name"
              ></v-text-field>
            </div>
            <div class="col-12">
              <v-text-field
                  :label="$t('comment.form.mobileNumber')"
                  outlined
                  hide-details
                  dense
                  v-model="model.name"
              ></v-text-field>
            </div>
          </div>
        </div>
        <div class="col">
          <v-textarea
              outlined
              :placeholder="$t('comment.form.writeYourComment')">

          </v-textarea>
        </div>
      </div>
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
  name: "CourseDetailsSubmitComment",
  data() {
    return {
      model: {
        name: null,
        family: null,
        mobileNumber: null,
      }
    }
  }
}
</script>

<style scoped>

</style>