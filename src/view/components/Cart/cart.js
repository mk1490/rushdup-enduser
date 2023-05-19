import Vue from 'vue'
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    created() {
        console.log('Salam mixin')
    },
    methods: {
        ...mapMutations(['ADD_TO_CART']),
        async addToCartOrCompletePurchaseFlowOrViewCourse(purchaseStatus, courseId, model) {
            switch (purchaseStatus) {
                case -1: {
                    console.log(this.sessionId)
                    const [err, data] = await Vue.prototype.to(Vue.prototype.http.post(`/cart`, {
                        sessionId: this.sessionId,
                        courseId: courseId,
                    }));
                    if (!err) {
                        Vue.prototype.$toast.success('افزودن به سبد خرید با موفقیت انجام شد.')
                        Vue.prototype.purchaseStatus = 2;
                        await this.ADD_TO_CART(model);
                    }
                }
                    break;
                case 2: {
                    await Vue.prototype.$router.push('/cart');
                    break;
                }
            }
        },
    },
    computed: {
        ...mapGetters(['sessionId'])
    }

}