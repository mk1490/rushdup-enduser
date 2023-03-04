<template>
  <v-card>
    <v-card-title>
      <div class="row">
        <div class="col d-inline-flex">
          <div class="comment-sender-name">
            {{ title }}
          </div>
          <div class="comment-date">
            {{ time }}
          </div>
        </div>
        <div class="col-auto">
          <v-rating
              color="orange"
              :value="rate"
              :length="5">
          </v-rating>
        </div>
      </div>
    </v-card-title>
    <v-card-text>
      <p>
        {{ content }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "course-episode-comment-item",
  props: {
    title: String,
    time: String,
    content: String,
    rate: Number,
  }
}
</script>

<style scoped>
.comment-sender-name {
  font-size: 1.3rem;
  font-family: IranYekanRegular;
  font-weight: bold;
  color: black;
}

.comment-date {
  font-family: IranYekanRegular;
  font-size: 1.1rem !important;
  color: gray(0.7);
}

p {
  font-family: "IRAN Sans";
  font-size: 1.4rem !important;
  font-weight: bold;
  color: gray(0.75);
}

::v-deep .v-rating button {
  padding: 0px !important;
  color: orange;
}
</style>