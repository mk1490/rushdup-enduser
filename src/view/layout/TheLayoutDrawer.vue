<template>
  <v-navigation-drawer
      dark
      fixed
      style="background: #ffffff"
      app
      right
      :value="navbarShow"
      width="80%"
      @input="stateNavbarShow">
    <v-divider></v-divider>
    <the-layout-drawer-list
        v-if="drawerItemsVisible"
        :icon-show="true"
    />
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
