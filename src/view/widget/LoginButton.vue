<template>
  <div>
    <div>
      <v-btn
          v-if="!isLogin"
          class="d-none d-sm-block"
          text
          light
          @click="login()"
      >
        {{ $t('ui.loginOrRegister') }}
      </v-btn>
      <v-menu
          v-if="isLogin"
          class="d-sm-none d-md-block"
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
                class="text-right">
              {{ $t('ui.userAccount') }}
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </div>

        </template>
        <v-list>
          <v-list-item
              @click="navigateToRoute('/Profile')"
          >
            <v-list-item-title>داشبورد</v-list-item-title>
          </v-list-item>
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
          <v-list-item @click="myTests">
            <v-list-item-title>{{ $t('ui.myTests') }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
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
    this.loading = true;
  },
  computed: {
    ...mapGetters([
      'cartItems',
      'isLogin'
    ])
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    async login() {
      this.navigateToRoute('/login')
    }, async navigateToRoute(route) {
      await this.$router.replace(route);
    },
    async logout() {
    },
    async myTests() {

    },
    async() {

    }
  },
}
</script>

<style scoped>

</style>