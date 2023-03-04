<template>
  <div>
    <v-skeleton-loader
        v-if="loading == true"
        min-width="50"
        light
        type="button">
    </v-skeleton-loader>
    <div>
      <v-btn
          class="d-none d-sm-block"
          v-if="!isLogin"
          text
          light
          @click="login">
        {{ $t('ui.loginOrRegister') }}
      </v-btn>
      <v-menu
          class="d-sm-none d-md-block"
          v-if="isLogin"
          open-on-hover
          bottom
          offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div
              v-bind="attrs"
              v-on="on"
              class="d-inline-flex">
            <v-avatar
                color="red"
                size="30">
            </v-avatar>
            <v-btn
                :ripple="false"
                text
                light
                class="text-right"
            >

              {{ $t('ui.userAccount') }}
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </div>

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
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "LoginButton",
  async created() {
    const isLogin = await this.oidc.isLoggedIn();
    await this.$store.commit('LOGIN_STATE', isLogin);
    this.loading = true;
  },
  computed: {
    ...mapGetters(['isLogin', 'cartItems'])
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    async login() {
      await this.oidc.login();
    }, async navigateToRoute(route) {
      await this.$router.replace(route);
    },
  }
}
</script>

<style scoped>

</style>