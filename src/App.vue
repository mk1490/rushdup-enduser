<template>
  <v-app style="background-color: white">
    <router-view/>
    <delete-dialog
        ref="deleteDialog">
    </delete-dialog>
    <ProgressDialog :showing="loading"></ProgressDialog>
  </v-app>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import Vue from 'vue';
import DeleteDialog from "./view/widget/DeleteDialog";
import ProgressDialog from "@/view/widget/ProgressDialog";

export default {
  async beforeCreate() {
    // Generate random uuid for session.
    this.$store.dispatch('initializeSessionId');
    const user = await this.oidc.getUser();
    if (user) {
      await this.$store.dispatch('setUserInfo', user);
    }
  },

  async created() {
    Vue.prototype.showLoader();
    await this.$store.commit('INITIAL_CART_ITEMS');


    Vue.prototype.deleteModal = this.$refs.delete;
    this.$store.subscribe(async (mutation) => {
      switch (mutation.type) {
        case 'LOGOUT':
          await this.logout();
          break;
      }
    });
  },
  name: 'App',
  components: {ProgressDialog, DeleteDialog},
  async mounted() {
    Vue.prototype.deleteModal = this.$refs.deleteDialog;
    const isLogin = await this.oidc.isLoggedIn();
    await this.$store.commit('INITIAL_CART_ITEMS');
    this.oidc.on('user_login', async (user) => {
      await this.$store.commit('LOGIN_STATE', true);
    });
  },
  computed: {
    ...mapGetters(['loading', 'cartItems', 'sessionId']),
  },
  data: () => ({}),
  watch: {
    'deleteDialog': {
      handler() {
      }
    },
    'cartItems': {
      async handler() {
        const fd = new FormData();
        this.cartItems.forEach(x => {
          fd.append('cartItemId', x.id);
        })
        const [err, data] = await this.to(this.http.post(`/initialize?sessionId=${this.sessionId}`, fd));
        if (!err) {
          await this.$store.dispatch('initMenuItems', data.menuItems);
          await this.$store.dispatch('initCategoryItems', data.categoryItems);
          await this.$store.dispatch('initCartExistsItems', data.cartItems);
        }
      }
    }
  },
  methods: {
    ...mapActions(['initializeSessionId']),
    async logout() {
      localStorage.removeItem('Authorization');
      window.location.href = '/#/SignIn';
    }
  }
};
</script>
