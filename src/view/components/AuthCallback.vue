<template>
  <h1>
    درحال احراز هویت
  </h1>
</template>

<script>
import qs from "qs";

export default {
  name: "AuthCallback",
  async created() {
    try {
      const localState = await this.oidc.loginCallback(window.location.href);
      if (localState && localState.location) {
        console.log(await this.oidc.isLoggedIn());
        window.location.replace(localState.location)
      } else {
        await this.$router.replace('/')
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>

</style>