<template>
  <v-app-bar
      app
      style="background: #fff"
      class="darken-3 px-6"
      dark
      fixed
      flat>


    <div class="d-inline-flex align-center">

      <v-img
          src="@/assets/logo.png"
      />

      <span class="iran-yekan-regular app-title mx-5 noselect">
        آموزشیار
      </span>
      <v-btn
          width="110"
          href="#/explore"
          color="primary"
          outlined>
        همه آموزش ها
      </v-btn>

      <div
          v-for="item in menuItems">
        <v-menu
            @click="navigateToRoute(item.target)"
            open-on-hover
            bottom
            offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                @click="navigateToRoute(item.target)"
                text
                color="black"
                dark
                v-bind="attrs"
                v-on="on"
            >
              <v-icon v-if="item.childrenItems && item.childrenItems.length > 0">
                mdi-menu-down
              </v-icon>
              {{ item.title }}
            </v-btn>
          </template>

          <v-list v-if="item.childrenItems && item.childrenItems.length> 0">
            <v-list-item
                @click="navigateToRoute(childItem.target)"
                v-for="(childItem, index) in item.childrenItems"
                :key="index"
            >
              <v-list-item-title>{{ childItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>


    </div>
    <v-spacer/>

    <v-menu
        open-on-hover
        bottom
        offset-y

    >
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
            @click="navigateToRoute('MyCourses')"
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
        <v-list-item>
          <v-list-item-title>{{ $t('ui.accountLogout') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<script>
import {mapGetters} from 'vuex';
import Breadcrumbs from '../widget/AppBreadcrumbs.vue';
import ErrorLog from '../widget/AppErrorLog.vue';
import FullScreen from '../widget/AppFullScreen.vue';
import Localization from '../widget/AppLocalization.vue';
import Notification from '../widget/AppNotification.vue';
import Profile from '../widget/AppProfile.vue';
import AppDateTime from "@/view/widget/AppDateTime";

export default {
  name: 'TheLayoutToolbar',
  created() {
    console.log(this.menuItems)
  },
  components: {
    AppDateTime,
    Breadcrumbs,
    ErrorLog,
    FullScreen,
    Localization,
    Notification,
    Profile,
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'toolbarDense',
      'navbarShow',
      'menuItems'
    ]),
    toggleNavbarIcon() {
      return this.navbarShow ? 'mdi-format-indent-decrease' : 'mdi-format-indent-increase';
    },
  },
  methods: {
    toggleNavbar() {
      this.$store.dispatch('NavbarToggle');
    },
    async navigateToRoute(route) {
      await this.$router.push(route);
    }
  },
};
</script>


<style>
.app-title {
  font-weight: bold;
  color: #000;
  font-size: 1.5rem !important;
  cursor: pointer;
}
</style>