﻿<template>
    <div class="container">
        <div class="woocommerce">
            <div v-if="courseItems.length > 0">
                <div class="woocommerce-notices-wrapper"></div>
                <div class="woocommerce-cart-form-wrapper">
                    <table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                        <thead>
                        <tr>
                            <th class="product-thumbnail">محصول</th>
                            <th class="product-name">عنوان دوره</th>
                            <th class="product-price">قیمت</th>
                            <th class="product-remove">عملیات</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr
                                v-for="(item, index) in courseItems"
                                class="woocommerce-cart-form__cart-item cart_item">


                            <td class="product-thumbnail">
                                <a :href="`/cd/${item.slug}`">
                                    <img
                                            v-if="!!item.image"
                                            width="150"
                                            height="150"
                                            class="attachment-thumbnail size-thumbnail wp-post-image"
                                            sizes="(max-width: 150px) 100vw, 150px"
                                            :src="getPublicUrl(item.image)"
                                            alt="">
                                </a>
                            </td>

                            <td class="product-name">
                                <h6 class="product-title">
                                    <a href="#">
                                        {{ item.title }}
                                    </a>
                                </h6>
                            </td>

                            <td class="product-price" data-title="قیمت">
                                <span class="woocommerce-Price-amount amount">
                                    <bdi>
                                    {{ getComma(item.financial.deducatedPrice) }}
                                    &nbsp;<span class="woocommerce-Price-currencySymbol">ریال</span>
                                    </bdi>
                                </span>
                            </td>
                            <td class="product-remove">
                                <a
                                        @click="removeItem(item, index)"
                                        class="tm-button style-bottom-line" title="حذف این مورد">
                                    <div class="button-content-wrapper"><span class="button-text">حذف</span></div>
                                </a></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <div class="row actions">
                    <div class="col-md-6">
                        <div class="tm-button-wrapper btn-empty-cart">
                            <a
                                    @click="removeAllCartItems"
                                    class="tm-button style-text tm-button-nm icon-left">
                                <div class="button-content-wrapper">

                                    <span class="button-icon"><i class="fal fa-times"></i></span>

                                    <span class="button-text">پاک کردن سبدخرید</span>

                                </div>
                            </a></div>
                    </div>
                    <div class="col-md-6">
                        <div class="actions-buttons">
                            <input
                                    type="hidden"
                                    value="ece1ff0560"><input type="hidden" name="_wp_http_referer"
                                                              value="/products/edumall/cart/"></div>
                    </div>

                    <div class="actions-wrap">

                    </div>
                </div>
                <div class="cart-collaterals-wrap">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="coupon-wrap">
                                <div class="coupon">
                                    <h6 class="coupon-heading">
                                        کوپن تخفیف </h6>
                                    <div class="coupon-description">
                                        کد کوپن خود را وارد کنید اگر شما آن را داشته باشید.
                                    </div>
                                    <input
                                            v-model="discountCode"
                                            type="text"
                                            class="edumall-input input-text"
                                            placeholder="کد کوپن">

                                    <button
                                            @click="applyDiscountCode"
                                            class="button" name="apply_coupon" value="کوپن را اعمال کنید">
                                        کوپن را اعمال کنید
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">

                            <div class="cart-collaterals row">
                                <div class="col-md-push-6 col-md-6 cart-total-wrap">
                                    <div class="cart_totals">
                                        <table class="shop_table shop_table_responsive">
                                            <tbody>
                                            <tr class="cart-subtotal">
                                                <th>مجموع</th>
                                                <td data-title="جمع جزء"><span class="woocommerce-Price-amount amount"><bdi>
                                                    {{ getComma(totalAmount) }}
                                                    <span
                                                            class="woocommerce-Price-currencySymbol">ریال</span>
                                                </bdi>
                                                </span>
                                                </td>
                                            </tr>


                                            <tr
                                                    v-if="appliedDiscount != -1"
                                                    class="cart-subtotal">
                                                <th>تخفیف</th>
                                                <td><span class="woocommerce-Price-amount amount"><bdi>
                                                    {{ getComma(appliedDiscount) }}
                                                    <span
                                                            class="woocommerce-Price-currencySymbol">ریال</span></bdi></span>
                                                </td>
                                            </tr>


                                            <tr class="order-total">
                                                <th>قابل پرداخت</th>
                                                <td data-title="جمع"><strong><span
                                                        class="woocommerce-Price-amount amount">
                                                    <bdi>
                                                    {{
                                                        appliedDiscount != -1 ? getComma(finalDeducatedPrice) : getComma(payableAmount)
                                                        }}
                                                    <span class="woocommerce-Price-currencySymbol"></span>
                                                </bdi>
                                                </span>
                                                </strong>
                                                </td>
                                            </tr>


                                            </tbody>
                                        </table>

                                        <div class="wc-proceed-to-checkout">
                                            <a
                                                    @click="checkout"
                                                    class="checkout-button button alt wc-forward">
                                                تسویه حساب
                                            </a>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                    v-if="courseItems.length == 0"
                    class="empty-cart-messages">
                <div class="empty-cart-icon">
                    <img
                            width="250px"
                            height="238px"
                            src="@/assets/images/cart-icon.svg"/>
                </div>
                <h2 class="empty-cart-heading">سبد خرید شما در حال حاضر خالی است.</h2>
                <p class="empty-cart-text">شما می توانید تمام محصولات موجود را چک کرده و مقداری در فروشگاه بخرید.</p>
            </div>

        </div>
    </div>
</template>

<script>
import DiscountCode from "@/view/components/Cart/Widgets/DiscountCode.vue";
import SideTotalAmountAndPayButton from "@/view/components/Cart/Widgets/SideTotalAmountAndPayButton.vue";
import SelectionPaymentTypes from "@/view/components/Cart/Widgets/SelectionPaymentTypes.vue";
import ItemsList from "@/view/components/Cart/Widgets/ItemsList.vue";
import {mapGetters} from "vuex";
import CartEmpty from "@/view/components/Cart/Widgets/CartEmpty.vue";

export default {
    name: "Cart",
    mounted() {
        // this.$store.dispatch('setPageTitle', this.$t('cart.title'))
    },
    async created() {

        const [err, data] = await this.to(this.http.get(`/cart/initialize/`));
        if (!err) {
            this.ipgItems = data['ipgItems'];
            this.totalAmount = data.totalAmount;
            this.payableAmount = data.payableAmount;
            this.courseItems = data.courseItems;
            this.$store.dispatch('setPageTitle', 'سبد خرید');
        }

        this.$store.subscribeAction(async ({type}) => {
            if (type === 'setLoginState') {
                await this.$router.push('Checkout')
            }
        })

    },
    components: {CartEmpty, ItemsList, SelectionPaymentTypes, SideTotalAmountAndPayButton, DiscountCode},
    data() {
        return {
            appliedDiscount: -1,
            finalDeducatedPrice: -1,
            selectedIpg: {},
            discountCode: null,
            totalAmount: 0,
            payableAmount: 0,
            ipgItems: [],
            courseItems: [],
            prepareToLogin: false,
        }
    },
    computed: {
        ...mapGetters(['sessionId', 'isLogin'])
    },
    methods: {
        async removeItem(item, index) {
            const [err, data] = await this.to(this.http.delete(`/cart/${item.id}?sessionId=${this.$store.getters.sessionId}`));
            if (!err) {
                this.courseItems.splice(index, 1);
            }
        },
        async removeAllCartItems(item, index) {
            const [err, data] = await this.to(this.http.delete(`/cart/deleteAll?sessionId=${this.$store.getters.sessionId}`));
            if (!err) {
                this.courseItems.splice(index, 1);
            }
        },
        async checkout() {
            if (!this.isLogin) {
                this.$swal.fire({
                    icon: 'warning',
                    text: 'برای تسویه حساب نیازمند احراز هویت می‌باشید؛ آیا هم اکنون می‌خواهید وارد شوید؟',
                    showCancelButton: true,
                    confirmButtonText: 'بله',
                    cancelButtonText: 'خیر، ادامۀ خرید',
                    allowOutsideClick: false,
                }).then(({isConfirmed}) => {
                    if (isConfirmed) {
                        this.$store.dispatch('openLoginModal').then()
                        this.prepareToLogin = true;
                    }
                })
                return;
            }
            await this.$router.push('Checkout')
        },
        async applyDiscountCode() {
            const [err, data] = await this.to(this.http.get(`/cart/checkDiscountCode?code=${this.discountCode}`));
            this.appliedDiscount = -1;
            if (!err) {
                this.appliedDiscount = data['deducatedPrice'];
                this.finalDeducatedPrice = data['finalDeducatedPrice'];
            }

        }
    }
}
</script>

<style scoped>
.cart-collaterals .cart-subtotal .amount {
    font-size: 16px;
}

.cart-collaterals .cart_totals .order-total .amount {
    font-size: 24px !important;
    font-weight: 700;
    color: #d31819;
}

.woocommerce-cart .shop_table tr {
    border-bottom: 1px solid var(--edumall-color-box-border) !important;
}

.woocommerce-cart-form .cart_totals {
    background: var(--edumall-color-box-white-background);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--edumall-color-box-white-border);
    border-radius: 5px;
    padding: 25px 30px 34px;
}

.woocommerce-cart-form .coupon .input-text {
    margin-bottom: 20px;
}

.woocommerce-cart-form .checkout-button {
    width: 100%;
}

.empty-cart-messages {
    text-align: center;
}

.empty-cart-heading {
    margin-top: 50px;
}
</style>