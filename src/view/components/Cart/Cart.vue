<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ $t('cart.title') }}
      </v-card-title>
      <v-card-text>
        <div
            v-if="courseItems.length > 0"
            class="row">
          <div class="col-9">
            <div class="row">
              <div class="col-12">
                <items-list
                    :course-items="courseItems">
                </items-list>
              </div>
              <div class="col-12">
                <selection-payment-types :payment-ipg-items="ipgItems">

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
            v-else>
          <cart-empty>
          </cart-empty>
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
import CartEmpty from "@/view/components/Cart/Widgets/CartEmpty.vue";

export default {
  name: "Cart",
  async created() {
    const [err, data] = await this.to(this.http.get(`cart/initialize?sessionId=${this.sessionId}`));
    if (!err) {
      this.ipgItems = data['activePaymentIpgs'];
      this.totalAmount = data.totalAmount;
      this.payableAmount = data.payableAmount;
      this.courseItems = data.courseItems;
    }
  },
  components: {CartEmpty, ItemsList, SelectionPaymentTypes, SideTotalAmountAndPayButton, DiscountCode},
  data() {
    return {
      discountCode: null,
      totalAmount: 0,
      payableAmount: 0,
      ipgItems: [],
      courseItems: [],
    }
  },
  computed: {
    ...mapGetters(['sessionId'])
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