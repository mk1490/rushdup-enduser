<template>
  <v-app-bar
      app
      style="background-color: #F5F5F5"
      height="160"
      class="darken-3"
      dark
      flat>
    <div class="row full-width">
      <div class="col-12 pa-0 ma-0 px-10">
        <div class="row">
          <div class="col-auto">
            <div class="d-inline-flex align-center">
              <v-btn
                  @click="toggleNavbar"
                  class="d-md-none d-sm-block"
                  icon
                  color="black"
              >
                <v-icon>
                  mdi-menu
                </v-icon>
              </v-btn>
              <v-img
                  width="70"
                  src="@/assets/logo.png"/>
              <span
                  @click="$router.push('/Home')"
                  class="iran-yekan-regular app-title mx-5 noselect">
                رشدآپ
              </span>
            </div>
          </div>
          <div class="col">
            <div class="d-flex justify-center">
              <div style="width: 50%">
                <v-autocomplete
                    filled
                    hide-no-data
                    append-outer-icon="mdi-magnify"
                    light
                    :placeholder="$t('ui.searchCourseOrTeacher')">
                </v-autocomplete>
              </div>
            </div>
          </div>
          <div class="col-auto d-inline-flex">
            <the-layout-toolbar-cart-widget
                class="d-none d-sm-block"
                :cart-items="cartItems"/>
            <login-button></login-button>
          </div>
        </div>
      </div>
      <div class="col-12 pa-0 ma-0">
        <div class="row px-16">
          <div class="col d-inline-flex">


            <v-menu
                bottom
                offset-y
                open-on-hover>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    :to="'/explore'"
                    color="primary"
                    light
                    text>
                  همه آموزش ها
                </v-btn>
              </template>
              <v-list v-if="categoryItems.length > 0">
                <v-list-item
                    :to="'/category/' +item.slug"
                    v-for="(item, index) in categoryItems"
                    :key="index">
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
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
                      :to="getMenuTarget(item)"
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
          <div class="col-auto">
            <div class="d-inline-flex">
              <v-btn
                  :to="'/teacher-request'"
                  color="primary"
                  light
                  text>
                درخواست تدریس
              </v-btn>
              <!--              <the-layout-toolbar-login-or-register-button></the-layout-toolbar-login-or-register-button>-->
            </div>
          </div>
        </div>
      </div>
    </div>
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
import TheLayoutToolbarCartWidget from "@/view/widget/TheLayoutToolbarCartWidget.vue";
import LoginButton from "@/view/widget/LoginButton.vue";

export default {
  name: 'TheLayoutToolbar',
  created() {
    console.log(this.menuItems)
  },
  components: {
    LoginButton,
    TheLayoutToolbarCartWidget,
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
      'menuItems',
      'categoryItems',
      'cartItems',
      'cartExistItems',
    ]),
    toggleNavbarIcon() {
      return this.navbarShow ? 'mdi-format-indent-decrease' : 'mdi-format-indent-increase';
    },
  },
  methods: {
    toggleNavbar() {
      this.$store.dispatch('NavbarToggle');
    },
    getMenuTarget(item) {
      if (item['targetType'] === 1) {
        const targetExtrea = item['targetExtra'];
        switch (targetExtrea) {
          case 'Home':
            return '/'
            break;
          default :
            return '/' + targetExtrea;
        }
      } else {
        return item['target'];
      }
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