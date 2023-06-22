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
import {getCurrentInstance} from 'vue'
import {mapActions, mapGetters} from "vuex";
import DeleteDialog from "./view/widget/DeleteDialog";
import ProgressDialog from "@/view/widget/ProgressDialog";
import common from '@/plugins/commonMethods';

export default {
    setup() {
        common.init(getCurrentInstance())
    },
    async beforeCreate() {
        // Generate random uuid for session.
        await this.$store.dispatch('initializeSessionId');
        // if (!!user) {
        //   await this.$store.dispatch('setUserInfo', user);
        // } else {

        // }
    },

    async created() {
        // Vue.prototype.showLoader();
        await this.$store.commit('INITIAL_CART_ITEMS');
        // Vue.prototype.deleteModal = this.$refs.delete;
        this.$store.subscribe(async (mutation) => {
            switch (mutation.type) {
                case 'LOGOUT':
                    await this.logout();
                    break;
            }
        });
        const [err, data] = await this.to(this.http.get(`${this.serverAddress}/api/auth/currentProfile`));
        if (!err) {
            await this.$store.dispatch('setLoginState', true);
            await this.$store.commit('SET_CART_ITEMS', data.cartItems);
        }
    },
    name: 'App',
    components: {ProgressDialog, DeleteDialog},
    async mounted() {
        // Vue.prototype.deleteModal = this.$refs.deleteDialog;
        await this.$store.commit('INITIAL_CART_ITEMS');
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
                const [err, data] = await this.to(this.http.get(`/core/initialize?sessionId=${this.sessionId}`, fd, {
                    errorModal: false
                }));
                if (!err) {

                    await this.$store.dispatch('initMenuItems', data.menuItems);
                    await this.$store.dispatch('initCategoryItems', data.categoryItems);
                    await this.$store.dispatch('initCartExistsItems', data.cartItems);
                    await this.$store.dispatch('initHomeItems', data.homeItems);
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
<style>
.swal2-container {
    z-index: 9999999 !important;
}
</style>
