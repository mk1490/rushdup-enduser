<template>]
  <div>
    <v-btn
        class="d-none d-sm-block"
        v-if="!isLogin"
        @click="login"
        elevation="5"
        style="background-color:#E53935"
        rounded>
      {{ $t('ui.loginToAccount') }}
    </v-btn>

    <v-menu
        class="d-sm-none d-md-block"
        v-if="isLogin"
        open-on-hover
        bottom
        offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            v-bind="attrs"
            v-on="on"
            elevation="5"
            style="background-color:#E53935"
            rounded>
          {{ $t('ui.userAccount') }}
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
            @click="navigateToRoute('/MyCourses')"
        >
          <v-list-item-title>{{ $t('ui.myCourses') }}</v-list-item-title>
        </v-list-item>
        <v-list-item
            @click="navigateToRoute('/AccountInformation')"
        >
          <v-list-item-title>{{ $t('ui.accountInformation') }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>{{ $t('ui.saleCooperation') }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>{{ $t('ui.myTests') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="handleLogout">
          <v-list-item-title>{{ $t('ui.accountLogout') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TheLayoutToolbarLoginOrRegisterButton",
  computed: {
    ...mapGetters(['isLogin', 'cartItems'])
  },
  methods: {
    async login() {
      // this.oidc.signinRedirect({}).then(res => {
      //   console.log(res)
      // }).catch(e => {
      //   console.log(e)
      // });
      this.oidc.login();
    },
    handleLogout() {
      this.oidc.signoutRedirect().then(res => {
        this.$store.dispatch('setLoginState', false)
      })
    },
    async navigateToRoute(route) {
      await this.$router.replace(route);
    },
  }
}
</script>

<style scoped>

</style>