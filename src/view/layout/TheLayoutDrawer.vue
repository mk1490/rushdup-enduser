<template>
  <v-navigation-drawer
      dark
      fixed
      style="background: #0e4b06"
      class="darken-4"
      app
      right
      :value="navbarShow"
      :width="320"
      @input="stateNavbarShow">
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-content>
          <v-list-item-title>
            <h3>
              {{ `${name} ${family}` }}
            </h3>
          </v-list-item-title>
        </v-list-item-content>
        <!--        <v-list-item-action>-->
        <!--          <v-list-item-action-text class="text-h6">-->
        <!--            <v-btn-->
        <!--                @click="goToProfile"-->
        <!--                small-->
        <!--                class="darken-2"-->
        <!--                color="yellow">-->
        <!--              {{ $t('ui.profile') }}-->
        <!--            </v-btn>-->
        <!--          </v-list-item-action-text>-->
        <!--        </v-list-item-action>-->
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-app-bar
        v-if="navbarLogo"
        :dense="toolbarDense"
        dark
    >
      <v-toolbar-title class="text-center">
        <v-avatar
            size="32px"
            tile
        >
          <img
              src="img/icons/android-icon-36x36.png"
              alt="VVA"
          >
        </v-avatar>
        <span>{{ $t('toolbar.appname') }}</span>
      </v-toolbar-title>
    </v-app-bar>
    <the-layout-drawer-list
        v-if="drawerItemsVisible"
        :dense="navbarDense"
        :routes="navigationItems"
        :icon-show="true"
    />
    <template v-slot:append>
      <div class="pa-2">
        <v-btn
            @click="logout"
            block
            class="darken-2"
            color="yellow">
          {{ $t('ui.logout') }}
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex';
import TheLayoutDrawerList from './TheLayoutDrawerList.vue';

export default {
  name: 'TheLayoutDrawer',
  components: {
    TheLayoutDrawerList,
  },
  async created() {
    this.refreshRoutes();
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'SET_USER_INFO') {
        this.permissions = mutation.payload.roles;
        this.refreshRoutes()
      }
    });
    if (this.permissions.length === 0) {
      // await this.$store.dispatch('initProfile');
    }
  },
  data() {
    return {
      drawerItemsVisible: false,
      permissions: [],
      routes: [],
    }
  },
  computed: {
    ...mapGetters([
      'permissionRoutes',
      'navbarDense',
      'navbarShow',
      'navbarLogo',
      'toolbarDense',
      'name',
      'family',
      'phoneNumber',
      'id',
      'avatar',
    ]),
    navigationItems() {
      this.routes = this.routes.map((f) => {
        f.hasPermission = this.checkHasPermission(f);
        if (f.children) {
          f.children = f.children.map((f) => {
            f.hasPermission = this.checkHasPermission(f);
            return f;
          })
        }
        return f;
      });
      return this.routes;
    }
  },
  methods: {
    stateNavbarShow(state) {
      this.$store.dispatch('NavbarState', {state});
    },
    goToProfile() {
      this.$router.push('/Profile');
    },
    async logout() {
      await this.$store.dispatch('logout')
    },
    checkHasPermission(item) {
      if (typeof item.meta === 'object') {
        if (item.meta.permission) {
          return !this.permissions.includes(item.meta.permission);
          // return false;
        } else
          return false;
      }
      return false;
    },
    refreshRoutes() {
      this.drawerItemsVisible = false;
      this.routes = this.$router.options.routes;
      setTimeout(() => {
        if (this.routes.length > 0) {
          this.drawerItemsVisible = true;
        }
      }, 10);
    }
  },
};
</script>
