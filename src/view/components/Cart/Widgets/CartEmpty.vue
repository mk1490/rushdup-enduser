<template>
    <div
            class="d-flex justify-center"
            v-else>
        <div class="d-inline-block justify-center">
            <v-img
                    src="@/assets/cartEmpty.png"
                    height="250">
            </v-img>
            <div class="d-flex justify-center">
              <span class="cart__empty">
              {{ $t('cart.yourCartEmpty') }}
            </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartEmpty"
}
</script>

<style scoped>
.cart__empty {
    font-family: "IRAN Sans" !important;
    font-size: 1rem !important;
    font-weight: bold;
    margin-top: 25px;
}
</style>