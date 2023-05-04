<template>
    <div id="mini-cart" class="mini-cart style-svg">
        <a href="https://dana-team.com/products/edumall/cart/"
           class="mini-cart__button header-icon"
           title="سبد خرید خود را مشاهده کنید">
            <span class="mini-cart-icon"
                  data-count="0">
            </span>
        </a>
        <div class="widget_shopping_cart_content">
            <div class="woocommerce-mini-cart__empty-message">
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

        </div>
    </div>

</template>

<script>
export default {
    name: "TheLayoutToolbarCartWidget",
    props: {
        cartItems: Array,
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
    }
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