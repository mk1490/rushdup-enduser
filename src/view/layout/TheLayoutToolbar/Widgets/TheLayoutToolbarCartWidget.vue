<template>

    <div id="mini-cart" class="mini-cart style-normal">
        <a href="/Cart"
           class="mini-cart__button header-icon"
           title="سبد خرید خود را مشاهده کنید" style="opacity: 1;">
            <span class="mini-cart-icon" :data-count="cartExistItems.length"></span>
        </a>
        <div class="widget_shopping_cart_content" style="opacity: 1;">
            <div
                    v-if="cartExistItems.length === 0"
                    class="woocommerce-mini-cart__empty-message">
                <div class="empty-basket">
                    <span class="fal fa-dolly-flatbed-empty"></span>
                </div>
                <p class="empty-message">سبد خرید شما خالی است</p>
                <p class="return-to-shop">
                    <a class="button wc-backward"
                       href="#">
                        مرور فروشگاه </a>
                </p>
            </div>
            <ul
                    v-if="cartExistItems.length > 0"
                    class="woocommerce-mini-cart cart_list product_list_widget">
                <li
                        v-for="(cartItem, cartIndex) in cartExistItems"
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
                            <bdi>{{
                                cartItem.financial.deducatedPrice == 0 ? 'رایگان' : getComma(cartItem.financial.deducatedPrice)
                                }}&nbsp;
                            <span
                                    v-if="cartItem.financial.deducatedPrice !== 0"
                                    class="woocommerce-Price-currencySymbol">{{ $t('ui.IRR') }}</span>
                        </bdi>
                        </span>
                    </div>
                </li>
            </ul>

            <div
                    v-if="cartExistItems.length > 0"
                    class="cart-footer">
                <div class="woocommerce-mini-cart__total total">
                    <strong>جمع:</strong>
                    <span class="woocommerce-Price-amount amount">
                        <bdi>{{ getComma(totalAmount) }}&nbsp;
                            <span class="woocommerce-Price-currencySymbol">{{ $t('ui.IRR') }}</span>
                        </bdi>
                    </span>
                </div>

                <div class="woocommerce-mini-cart__buttons buttons">
                    <router-link to="Cart">
                        <a class="button wc-forward">مشاهده سبد خرید</a>
                    </router-link>

                    <router-link to="Cart">
                        <a class="button checkout wc-forward">تسویه حساب</a>
                    </router-link>

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
        ...mapGetters(['cartExistItems']),
        totalAmount() {
            let total = 0;
            this.cartExistItems.map(f => {
                total += f.financial.deducatedPrice
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
                const [err, data] = await this.http.delete(`/cart/${this.cartExistItems[index].id}`);
                if (!err) {
                    this.cartExistItems.splice(index, 1);
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