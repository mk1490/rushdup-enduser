<template>
  <v-app>
    <router-view/>
    <delete-dialog
        ref="deleteDialog">
    </delete-dialog>
    <ProgressDialog :showing="loading"></ProgressDialog>
  </v-app>
</template>
<script>
import {mapGetters} from "vuex";
import Vue from 'vue';
import DeleteDialog from "./view/widget/DeleteDialog";
import ProgressDialog from "@/view/widget/ProgressDialog";

export default {
  async created() {
    Vue.prototype.showLoader();
    await this.$store.commit('INITIAL_CART_ITEMS');
    const [err, data] = await this.to(this.http.get(`/initialize`));
    if (!err) {
      await this.$store.dispatch('initMenuItems', data.menuItems);
      await this.$store.dispatch('initCategoryItems', data.categoryItems);
    }
    Vue.prototype.deleteModal = this.$refs.delete;
    this.$store.subscribe(async (mutation) => {
      switch (mutation.type) {
        case 'LOGOUT':
          await this.logout();
          break;
      }
    });

    // this.oidc.events.addUserLoaded((user) => {
    //   console.log('user Loaded', user);
    //   // this.oidc.signinRedirectCallback({response_mode: "query"}).then(res => {
    //   //   console.log("Auth sucess")
    //   // })
    //   this.$store.dispatch('setLoginState', true)
    // })
    this.oidc.on('user_login', () => {
      console.log('user login!');
    })
    // await this.oidc.loginCallback(window.location.href)

    // console.log(await this.oidc.getUser())

    // await this.$store.dispatch('initProfile');
    // }
    const user = await this.oidc.getUser();
    if (user) {
      this.$store.dispatch('setLoginState', true)
    }
    console.log()
  },
  name: 'App',
  components: {ProgressDialog, DeleteDialog},
  async mounted() {
    const name = window.location.href.split('/')[3].includes('callback')
    if (name) {
      const urlParams = new URLSearchParams(window.location.search);
      await this.oidc.loginCallback(window.location.href)
      console.log(await this.oidc.getUser())
      await this.$store.dispatch('setLoginState', true)
    }
    Vue.prototype.deleteModal = this.$refs.deleteDialog;

  },
  computed: {
    ...mapGetters(['loading']),
  },
  data: () => ({}),
  watch: {
    'deleteDialog': {
      handler() {
      }
    }
  },
  methods: {
    async logout() {
      localStorage.removeItem('Authorization');
      window.location.href = '/#/SignIn';
    }
  }
};
</script>
