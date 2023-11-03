const cart = {
    state: {
        commentModalVisible: false,
    }, getters: {
        commentModalVisible: (state) => state.commentModalVisible,
    },
    mutations: {
        /*SET_MENU_ITEMS: (state, payload) => {
            state.menuItems = payload;
        },*/
    }, actions: {
        showCommentModal: async ({state}, payload) => {
            state.commentModalVisible = payload;
        },
    },
};
export default cart;
