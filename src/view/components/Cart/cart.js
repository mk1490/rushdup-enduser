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
                    const [err, data] = await this.to(this.http.post(`/cart`, {
                        sessionId: this.sessionId,
                        courseId: courseId,
                    }));
                    if (!err) {
                        this.$toast.success('افزودن به سبد خرید با موفقیت انجام شد.')
                        this.purchaseStatus = 2;
                        await this.ADD_TO_CART(model);
                    }
                }
                    break;
                case 2: {
                    await this.$router.push('/cart');
                    break;
                }
            }
        },
        getCartButtonTitle(purchaseStatus) {
            switch (purchaseStatus) {
                case -1:
                    return this.$t('course.addToCard');
                case 1:
                    return this.$t('course.startLearning');
                case 2:
                    return this.$t('course.completePurchaseFlow');
            }
        }
    },
    computed: {
        ...mapGetters(['sessionId'])
    }

}