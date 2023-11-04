<template>
    <div class="container">
        <div class="row checkout-content-wrap">
            <div class="v-col-7">
                <div id="order_review">
                    <h3 class="checkout-payment-info-heading">اطلاعات پرداخت</h3>
                    <div id="payment" class="woocommerce-checkout-payment" style="position: static; zoom: 1;">
                        <ul class="wc_payment_methods payment_methods methods">
                            <li class="wc_payment_method payment_method_WC_ZPal payment-selected">
                                <label class="payment_title">
                                    <input type="radio" class="input-radio"
                                           style="display: none;">
                                    <span class="payment-title-icon">
                                        <svg height="434pt" viewBox="0 -70 434 434"
                                             width="434pt"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                    d="m387 0h-340c-25.945312.0273438-46.9726562 21.054688-47 47v200c.0273438 25.945312 21.054688 46.972656 47 47h340c25.945312-.027344 46.972656-21.054688 47-47v-200c-.027344-25.945312-21.054688-46.9726562-47-47zm-373 76.460938h406v29.078124h-406zm33-62.460938h340c18.214844.019531 32.980469 14.785156 33 33v15.460938h-406v-15.460938c.019531-18.214844 14.785156-32.980469 33-33zm340 266h-340c-18.214844-.019531-32.980469-14.785156-33-33v-127.460938h406v127.460938c-.019531 18.214844-14.785156 32.980469-33 33zm0 0"></path><path
                                                d="m345.152344 159.386719c-7.304688-.007813-14.507813 1.746093-21 5.105469-19.253906-9.949219-42.847656-5.027344-56.519532 11.792968-13.671874 16.816406-13.671874 40.921875 0 57.738282 13.671876 16.820312 37.265626 21.742187 56.519532 11.792968 16.863281 8.710938 37.355468 6.109375 51.503906-6.539062 14.152344-12.648438 19.027344-32.71875 12.257812-50.449219-6.769531-17.730469-23.78125-29.445313-42.761718-29.441406zm-73.765625 45.765625c0-17.542969 14.222656-31.761719 31.765625-31.761719 17.542968 0 31.765625 14.222656 31.765625 31.765625s-14.222657 31.765625-31.765625 31.765625c-17.535156-.019531-31.746094-14.230469-31.765625-31.769531zm73.765625 31.769531c-2.722656-.003906-5.433594-.359375-8.066406-1.054687 15.78125-17.433594 15.78125-43.992188 0-61.425782 11.921874-3.132812 24.578124.914063 32.46875 10.382813 7.890624 9.46875 9.59375 22.648437 4.367187 33.808593-5.230469 11.164063-16.441406 18.292969-28.769531 18.289063zm0 0">

                                        </path>
                                        </svg>
                                    </span>

                                    <span class="payment-title-name">پرداخت امن زرین پال</span>
                                </label>
                                <div class="payment_box payment_method_WC_ZPal">
                                    <p>پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه زرین پال</p>
                                </div>
                            </li>
                        </ul>
                        <div class="form-row place-order">
                            <button
                                    @click="submitRequest"
                                    class="button alt">
                                ثبت سفارش
                            </button>

                        </div>
                    </div>

                </div>
            </div>

            <div class="v-col-5">
                <div class="woocommerce-order-details">

                    <h3 id="order_review_heading">خلاصه سفارش</h3>


                    <div class="woocommerce-checkout-review-order">
                        <table class="shop_table woocommerce-checkout-review-order-table"
                               style="position: static; zoom: 1;">
                            <tbody>
                            <tr
                                    v-for="item in cartItems"
                                    class="cart_item">
                                <td class="product-info">
                                    <div class="product-wrapper">
                                        <div class="product-thumbnail">
                                            <img
                                                    v-if="!!item.cover"
                                                    width="150" height="150"
                                                    :src="getImageUrl(item.cover)"
                                                    class="attachment-thumbnail size-thumbnail wp-post-image">
                                        </div>
                                        <div class="product-caption">
                                            <h3 class="product-name">
                                                {{ item.title }}
                                                <strong class="product-quantity">x1</strong>
                                            </h3>
                                        </div>
                                    </div>
                                </td>
                                <td class="product-total">
                                    <span class="woocommerce-Price-amount amount">
                                        <bdi>{{ convertToIRR(item.financial.price) }}</bdi>
                                    </span>
                                </td>
                            </tr>
                            </tbody>
                            <tfoot>

                            <tr class="cart-subtotal">
                                <th>جمع جزء</th>
                                <td>
                                    <span class="woocommerce-Price-amount amount">
                                    <bdi>{{ convertToIRR(finalPrice) }}</bdi>
                                </span>
                                </td>
                            </tr>
                            <tr class="order-total">
                                <th>جمع</th>
                                <td>
                                    <strong>
                                        <span class="woocommerce-Price-amount amount">
                                    <bdi>
                                    {{ convertToIRR(finalPrice) }}
                                    <span
                                            class="woocommerce-Price-currencySymbol">

                                    </span>
                                </bdi>
                                </span>
                                    </strong>
                                </td>
                            </tr>


                            </tfoot>
                        </table>

                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: "Checkout",
    data() {
        return {
            ipgItems: [],
            cartItems: [],
            finalPrice: 0,
        }
    },
    async created() {
        const [err, data] = await this.to(this.http.get(`/cart/initialize/`));
        if (!err) {
            this.cartItems = data.courseItems;
            this.ipgItems = data.ipgItems;
            let total = 0;
            data.courseItems.map(f => {
                total += f.financial.price;
            })
            this.finalPrice = total;
        }
    },
    methods: {
        async submitRequest() {
            const [err, data] = await this.to(this.http.post(`/cart/prepare-payment`))
        }
    }

}
</script>

<style scoped>
.payment_box {
    margin-top: 20px !important;
}

.form-row {
    margin-top: 20px !important;
}
</style>