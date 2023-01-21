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


      <div
          v-if="item.children"
          v-for="item in menubarItems">


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
              {{ item.title }}
            </v-btn>
          </template>

          <v-list v-if="item.children.length> 0">
            <v-list-item
                v-for="(item, index) in item.children"
                :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
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
  components: {
    AppDateTime,
    Breadcrumbs,
    ErrorLog,
    FullScreen,
    Localization,
    Notification,
    Profile,
  },
  data: () => ({
    menubarItems: [
      {
        title: 'خانه',
        target: '/',
        children: [],
      },
      {
        title: 'ویدئوها',
        target: null,
        children: [],
      },
      {
        title: 'دوره ها',
        target: null,
        children: [
          {
            title: 'دوره ها',
            target: null,
            children: []
          }
        ],
      },
      {
        title: 'سبد خرید',
        target: null,
        children: [],
      },
    ],
  }),
  computed: {
    ...mapGetters([
      'toolbarDense',
      'navbarShow',
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
      console.log(route)
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