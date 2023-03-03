<template>
  <div
      v-if="showing"
      class="overlay--container">
    <div
        class="overlay"
        opacity="0.9"
        light :z-index="999"
    >
      <v-progress-circular
          indeterminate
          size="40"
          color="white">
      </v-progress-circular>

      <div>
        <p>
          درحال دریافت اطلاعات...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressDialog",
  props: {
    showing: Boolean
  },
}
</script>

<style scoped>

.overlay--container {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 9999;
  overflow-x: hidden;
  overflow-x: hidden;
  background-color: rgba(40, 31, 31, 0.70);
  backdrop-filter: blur(8px);
  /**! text-align: center;*/
}

.overlay {
  position: relative;
  top: 50%;
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  display: inline-block;

  /*margin-top: 30px;*/
}

.overlay p {
  color: white;
  font-family: "IRAN Sans";
  margin-top: 15px;
  font-size: 1.5rem;
}
</style>