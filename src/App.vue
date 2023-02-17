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


    const [err, data] = await this.to(this.http.get(`/initialize`));
    if (!err) {
      await this.$store.dispatch('initMenuItems', data.menuItems);
    }


    Vue.prototype.deleteModal = this.$refs.delete;

    this.$store.subscribe(async (mutation) => {
      switch (mutation.type) {
        case 'LOGOUT':
          await this.logout();
          break;
      }
    });
    // await this.$store.dispatch('initProfile');
    // }
  },
  name: 'App',
  components: {ProgressDialog, DeleteDialog},
  mounted() {
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
