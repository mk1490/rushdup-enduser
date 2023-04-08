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
                  v-model="model.email"
              ></v-text-field>
            </div>
            <div class="col-12">
              <v-text-field
                  :label="$t('comment.form.mobileNumber')"
                  outlined
                  hide-details
                  dense
                  v-model="model.mobileNumber"
              ></v-text-field>
            </div>
          </div>
        </div>
        <div class="col">
          <v-textarea
              outlined
              v-model="model.content"
              :placeholder="$t('comment.form.writeYourComment')">

          </v-textarea>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn
          @click="submitComment()"
          color="primary">
        {{ $t('comment.registerComment') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CourseDetailsSubmitComment",
  props: ['courseId'],
  data() {
    return {
      model: {
        name: null,
        email: null,
        mobileNumber: null,
        content: null,
      }
    }
  },
  methods: {
    async submitComment() {
      const [err, data] = await this.to(this.http.post(`/comment/${this.courseId}`, {
        name: this.model.name,
        email: this.model.email,
        mobileNumber: this.model.mobileNumber,
        content: this.model.content
      }));
      if (!err) {
        this.model.name = null;
        this.model.email = null;
        this.model.mobileNumber = null;
        this.model.content = null;
        this.$swal.fire({
          icon: 'success',
          text: 'دیدگاه شما با موفقیت ثبت شد!',
        })
      }

    }

  }
}
</script>

<style scoped>

</style>