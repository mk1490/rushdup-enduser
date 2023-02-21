<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ $t('cart.title') }}
      </v-card-title>
      <v-card-text>
        <div
            v-if="cartItems.length > 0"
            class="row">
          <div class="col-9">
            <div class="row">
              <div class="col-12">
                <items-list>

                </items-list>
              </div>
              <div class="col-12">
                <selection-payment-types>

                </selection-payment-types>
              </div>
            </div>
          </div>
          <div class="col d-flex">
            <div class="d-inline-block">
              <discount-code>
              </discount-code>
              <side-total-amount-and-pay-button
                  class="mt-10"
                  :model="this">

              </side-total-amount-and-pay-button>
            </div>
          </div>
        </div>
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
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import DiscountCode from "@/view/components/Cart/Widgets/DiscountCode.vue";
import SideTotalAmountAndPayButton from "@/view/components/Cart/Widgets/SideTotalAmountAndPayButton.vue";
import SelectionPaymentTypes from "@/view/components/Cart/Widgets/SelectionPaymentTypes.vue";
import ItemsList from "@/view/components/Cart/Widgets/ItemsList.vue";
import {mapGetters} from "vuex";

export default {
  name: "Cart",
  components: {ItemsList, SelectionPaymentTypes, SideTotalAmountAndPayButton, DiscountCode},
  data() {
    return {
      discountCode: null,
      totalAmount: 0,
      payableAmount: 0,
    }
  },
  computed: {
    ...mapGetters(['cartItems'])
  }
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