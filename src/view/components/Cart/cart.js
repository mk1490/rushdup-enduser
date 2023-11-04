import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    data() {
        return {
            lastAction: null, // Last action == Post comment, Add to cart or?
            lastActionData: null,
        }
    },
    methods: {
        ...mapMutations(['ADD_TO_CART']),
        async addToCartOrCompletePurchaseFlowOrViewCourse(purchaseStatus, courseId, model) {

            if (!await this.checkOrOpenAuthModal(true)) {
                this.lastActionData = {purchaseStatus, courseId, model}
                return;
            }


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
                    break;
                }
                case 1: {
                    this.$router.push(`/course-learn/${model.slug}`)
                    break;
                }
                case 2: {
                    this.$router.push('/Cart');
                    break;
                }
                case 3: {

                    break;
                }
            }
        },
        getCartButtonTitle(status) {
            switch (status) {
                case -1:
                    return this.$t('course.addToCard');
                case 1:
                    return this.$t('course.startLearning');
                case 2:
                    return this.$t('course.completePurchaseFlow');
                default:
                    return this.$t('course.addToCard');
            }
        },
        async openCommentModal() {
            if (!this.checkOrOpenAuthModal(true)) {
                this.lastAction = 2;
            } else {
                this.$store.dispatch('showCommentModal', true);
            }
        }
    },
    computed: {
        ...mapGetters(['sessionId'])
    },
    created() {
        // On Auth success
        this.authSubscriber.success.asObservable().subscribe(async response => {
            switch (this.lastAction) {
                case 1: { // last action 1 is add to cart
                    await this.addToCartOrCompletePurchaseFlowOrViewCourse(this.lastActionData.purchaseStatus, this.lastActionData.courseId, this.lastActionData.model)
                    break;
                }
                case 2: { // Add comment

                }
            }
        })
    },
    destroyed() {
        this.authSubscriber.success.unsubscribe()
    }

}