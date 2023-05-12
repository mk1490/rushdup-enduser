import Vue from 'vue'

module.exports = {
    async addToCartOrCompletePurchaseFlowOrViewCourse(item) {
        switch (this.purchaseStatus) {
            case -1: {
                const [err, data] = await this.to(this.http.post(`/cart`, {
                    sessionId: this.sessionId,
                    courseId: item.id,
                }));
                if (!err) {
                    this.$toast.success('افزودن به سبد خرید با موفقیت انجام شد.')
                    this.purchaseStatus = 2;
                    await Vue.prototype.$store.dispatch('addToCart', item)
                    // await this.addToCart(item);
                }
            }
                break;
            case 2: {
                await this.$router.push('/cart');
                break;
            }

        }
    },
}