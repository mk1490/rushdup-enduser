<template>

    <div id="mini-cart" class="mini-cart style-normal">
        <a href="/Cart"
           class="mini-cart__button header-icon"
           title="سبد خرید خود را مشاهده کنید" style="opacity: 1;">
            <span class="mini-cart-icon" :data-count="cartItems.length"></span>
        </a>
        <div class="widget_shopping_cart_content" style="opacity: 1;">
            <div
                    v-if="cartItems.length === 0"
                    class="woocommerce-mini-cart__empty-message">
                <div class="empty-basket">
                    <span class="fal fa-dolly-flatbed-empty"></span>
                </div>
                <p class="empty-message">سبد خرید شما خالی است</p>
                <p class="return-to-shop">
                    <a class="button wc-backward"
                       href="https://dana-team.com/products/edumall/shop/">
                        مرور فروشگاه </a>
                </p>
            </div>
            <ul
                    v-if="cartItems.length > 0"
                    class="woocommerce-mini-cart cart_list product_list_widget">
                <li
                        v-for="(cartItem, cartIndex) in cartItems"
                        class="woocommerce-mini-cart-item mini_cart_item">
                    <a
                            @click="removeCartItem(cartIndex)"
                            class="remove remove_from_cart_button"
                            data-product_sku="">×</a>
                    <div class="product-thumbnail">
                        <a>
                            <img width="150" height="150"
                                 class="attachment-thumbnail size-thumbnail"
                                 alt="" decoding="async" loading="lazy"
                                 sizes="(max-width: 150px) 100vw, 150px"> </a>
                    </div>

                    <div class="product-caption">
                        <h3 class="product-name">
                            <a :href="`/cd/${cartItem.slug}`"
                               class="link-in-title">
                                {{ cartItem.title }}
                            </a>
                        </h3>
                        <span class="quantity">
                            <bdi>{{ cartItem.deducatedPrice == 0 ? 'رایگان' : getComma(cartItem.deducatedPrice) }}&nbsp;
                            <span
                                    v-if="cartItem.deducatedPrice !== 0"
                                    class="woocommerce-Price-currencySymbol">{{ $t('ui.IRR') }}</span>
                        </bdi>
                        </span>
                    </div>
                </li>
            </ul>

            <div
                    v-if="cartItems.length > 0"
                    class="cart-footer">
                <div class="woocommerce-mini-cart__total total">
                    <strong>جمع:</strong> <span
                        class="woocommerce-Price-amount amount"><bdi>{{ getComma(totalAmount) }}&nbsp;<span
                        class="woocommerce-Price-currencySymbol">{{ $t('ui.IRR') }}</span></bdi></span>
                </div>

                <div class="woocommerce-mini-cart__buttons buttons">
                    <a
                            href="/Cart"
                            class="button wc-forward">مشاهده سبد خرید</a>
                    <a class="button checkout wc-forward">تسویه حساب</a>
                </div>
            </div>


        </div>
    </div>


</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "TheLayoutToolbarCartWidget",
    computed: {
        ...mapGetters(['cartItems']),
        totalAmount() {
            let total = 0;
            this.cartItems.map(f => {
                total += f.deducatedPrice
            })
            return total;
        }
    },
    methods: {
        async navigateToRoute(route) {
            await this.$router.replace(route);
        },
        async removeCartItem(index) {
            const isConfirm = window.confirm('برای حذف این دوره از سبد اطمینان دارید؟')
            if (isConfirm) {
                const [err, data] = await this.http.delete(`/cart/${this.cartItems[index].id}`);
                if (!err) {
                    this.cartItems.splice(index, 1);
                    this.$store.dispatch('removeCartItem', index);
                }
            }
        }
    },
}
</script>

<style scoped>
.title {
    font-family: "IRAN Sans" !important;
    font-size: 20px;
    margin-bottom: 0px;
    margin-right: 16px;
}

.price {
    font-family: "IRAN Sans" !important;
    font-size: 20px;
    margin-bottom: 0px;
    margin-right: 16px;
}

.no_cart_item {
    font-family: "IRAN Sans";
    font-size: 1.4rem !important;
    color: #f44336;
}
</style>